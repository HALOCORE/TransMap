///// Segment IGNORE BEGIN
"use strict";

function compare(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    } else if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        for (let i = 0; i < a.length; i++) {
          const comparison = compare(a[i], b[i]);
          if (comparison !== 0) {
            return comparison;
          }
        }
        return 0;
      }
    } else {
      throw new Error('Cannot compare different types');
    }
  }
///// Segment IGNORE END
///// Segment BEGIN Basic DONE
const __all__ = ['heappush', 'heappop', 'heapify', 'heapreplace', 'merge', 'nlargest', 'nsmallest', 'heappushpop'];

function heappush(heap, item) {
    heap.push(item);
    _siftdown(heap, 0, heap.length - 1);
}

function heappop(heap) {
    let lastelt = heap.pop();
    if (heap.length) {
        let returnitem = heap[0];
        heap[0] = lastelt;
        _siftup(heap, 0);
        return returnitem;
    }
    return lastelt;
}

function heapreplace(heap, item) {
    let returnitem = heap[0];
    heap[0] = item;
    _siftup(heap, 0);
    return returnitem;
}

function heappushpop(heap, item) {
    if (heap.length && heap[0] < item) {
        [item, heap[0]] = [heap[0], item];
        _siftup(heap, 0);
    }
    return item;
}

function heapify(x) {
    let n = x.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        _siftup(x, i);
    }
}
///// Segment END

///// Segment BEGIN max DONE
function _heappop_max(heap) {
    let lastelt = heap.pop();
    if (heap.length) {
        let returnitem = heap[0];
        heap[0] = lastelt;
        _siftup_max(heap, 0);
        return returnitem;
    }
    return lastelt;
}

function _heapreplace_max(heap, item) {
    let returnitem = heap[0];
    heap[0] = item;
    _siftup_max(heap, 0);
    return returnitem;
}

function _heapify_max(x) {
    let n = x.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        _siftup_max(x, i);
    }
}

function _siftdown(heap, startpos, pos) {
    let newitem = heap[pos];

    while (pos > startpos) {
        let parentpos = (pos - 1) >> 1;
        let parent = heap[parentpos];
        if (compare(parent, newitem) > 0) {
            heap[pos] = parent;
            pos = parentpos;
            continue;
        }
        break;
    }
    heap[pos] = newitem;
}
///// Segment END

///// Segment BEGIN shift DONE
function _siftup(heap, pos) {
    let endpos = heap.length;
    let startpos = pos;
    let newitem = heap[pos];
    let childpos = 2 * pos + 1;
    while (childpos < endpos) {
        let rightpos = childpos + 1;
        if (rightpos < endpos && !(compare(heap[childpos], heap[rightpos]) < 0)) {
            childpos = rightpos;
        }
        heap[pos] = heap[childpos];
        pos = childpos;
        childpos = 2 * pos + 1;
    }
    heap[pos] = newitem;
    _siftdown(heap, startpos, pos);
}

function _siftdown_max(heap, startpos, pos) {
    let newitem = heap[pos];
    while (pos > startpos) {
        let parentpos = (pos - 1) >> 1;
        let parent = heap[parentpos];
        if (parent < newitem) {
            heap[pos] = parent;
            pos = parentpos;
            continue;
        }
        break;
    }
    heap[pos] = newitem;
}

function _siftup_max(heap, pos) {
    let endpos = heap.length;
    let startpos = pos;
    let newitem = heap[pos];
    let childpos = 2 * pos + 1;
    while (childpos < endpos) {
        let rightpos = childpos + 1;
        if (rightpos < endpos && !(heap[rightpos] < heap[childpos])) {
            childpos = rightpos;
        }
        heap[pos] = heap[childpos];
        pos = childpos;
        childpos = 2 * pos + 1;
    }
    heap[pos] = newitem;
    _siftdown_max(heap, startpos, pos);
}
///// Segment END

///// Segment BEGIN merge DONE
function* merge(reverse, ...iterables) {
    let h = [];
    let h_append = h.push.bind(h);

    let _heapify, _heappop, _heapreplace, direction;
    if (reverse) {
        _heapify = _heapify_max;
        _heappop = _heappop_max;
        _heapreplace = _heapreplace_max;
        direction = -1;
    } else {
        _heapify = heapify;
        _heappop = heappop;
        _heapreplace = heapreplace;
        direction = 1;
    }

    for (let order = 0; order < iterables.length; order++) {
        let it = iterables[order][Symbol.iterator]();
        try {
            let next = it.next.bind(it);
            let next_elem = next();
            if (next_elem.done) continue;
            h_append([next_elem.value, order * direction, next]);
        } catch (e) {
            // pass
            throw e;
        }
    }
    _heapify(h);
    while (h.length > 1) {
        try {
            while (true) {
                let s = h[0];
                let [value, order, next] = s;
                yield value;
                let next_elem = next();
                let done = next_elem.done;
                if (done) {
                    _heappop(h);
                    break;
                }
                s[0] = next_elem.value;
                _heapreplace(h, s);
            }
        } catch (e) {
            throw e;
        }
    }
    if (h.length > 0) {
        let [value, order, next] = h[0];
        yield value;
        yield* (function* next_wrap() {
            while(true) {
                let next_elem = next();
                let val = next_elem.value;
                let done = next_elem.done;
                if (done) {
                    break;
                }
                yield val;
            };
        })();
    }
    return;
}
///// Segment END

///// Segment BEGIN nsmallest DONE
function nsmallest(n, iterable) {
    if (n === 1) {
        const it = iterable[Symbol.iterator]();
        const sentinel = Infinity;
        const result = Math.min(...it);
        return (result === sentinel) ? [] : [result];
    }

    let size;
    try {
        size = iterable.length;
    } catch (error) {
        size = undefined;
    }

    if (size !== undefined && n >= size) {
        return iterable.slice().sort().slice(0, n);
    }

    const it = iterable[Symbol.iterator]();
    const result = Array.from({ length: n }, (_, i) => [it.next().value, i]);
    if (result.length === 0) {
        return result;
    }

    _heapify_max(result);
    let top = result[0][0];
    let order = n;
    const _heapreplace = _heapreplace_max;
    for (const elem of it) {
        if (elem < top) {
            _heapreplace(result, [elem, order]);
            let _order = 0; [top, _order] = result[0];
            order += 1;
        }
    }
    result.sort();
    return result.map(([elem, order]) => elem);
}
///// Segment END

///// Segment BEGIN nlargest DONE
function nlargest(n, iterable) {
    if (n === 1) {
        const it = iterable[Symbol.iterator]();
        const sentinel = Infinity;
        const result = Math.max(...it);
        return (result === sentinel) ? [] : [result];
    }

    let size;
    try {
        size = iterable.length;
    } catch (e) {}
    if (size !== undefined) {
        if (n >= size) {
            return iterable.sort((a, b) => b - a).slice(0, n);
        }
    }

    const it = iterable[Symbol.iterator]();
    const result = [...iterable].map((elem, i) => [elem, -i]).slice(0, n);
    for (let i=0;i<n;i++) it.next();
    if (!result.length) {
        return result;
    }
    heapify(result);
    let top = result[0][0];
    let order = -n;
    const _heapreplace = heapreplace;
    for (const elem of it) {
        if (top < elem) {
            _heapreplace(result, [elem, order]);
            let _order = 0; [top, _order] = result[0];
            order -= 1;
        }
    }
    result.sort((a, b) => b[0] - a[0]);
    return result.map(([elem, order]) => elem);
}
///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
  if (JSON.stringify(a) != JSON.stringify(b)) {
      throw Error("MyLogError MISMATCH");
  }
}

function test_heappush_tool(items) {
  var heap = [];

  for (var i = 0; i < items.length; i++) {
    heappush(heap, items[i]);
  }

  var a = heappop(heap);
  var b = heappop(heap);

  return [a, b];
}

function test_heappush() {
  assert_equal(test_heappush_tool([6, 1, -2, 5]), [-2, 1]);
  console.log("p1_1 passed");
  assert_equal(test_heappush_tool([34, -3, -12, 0]), [-12, -3]);
  console.log("p1_2 passed");
  assert_equal(test_heappush_tool([5, 4, 3, 2, 1]), [1, 2]);
  console.log("p1_3 passed");
  assert_equal(test_heappush_tool([4.7, 8, -1.2, 7.2]), [-1.2, 4.7]);
  console.log("p1_4 passed");
}

function test_heapify_tool(x) {
  heapify(x);

  var a = heappop(x);
  var b = heappop(x);

  return [a, b];
}

function test_heapify() {
  assert_equal(test_heapify_tool([6, 1, -2, 5]), [-2, 1]);
  console.log("p2_1 passed");
  assert_equal(test_heapify_tool([34, -3, -12, 0]), [-12, -3]);
  console.log("p2_2 passed");
  assert_equal(test_heapify_tool([5, 4, 3, 2, 1]), [1, 2]);
  console.log("p2_3 passed");
  assert_equal(test_heapify_tool([4.7, 8, -1.2, 7.2]), [-1.2, 4.7]);
  console.log("p2_4 passed");
}

function test_heappushpop_tool(x, i) {
  heapify(x);

  var a = heappushpop(x, i);

  return a;
}

function test_heappushpop() {
  assert_equal(test_heappushpop_tool([6, 1, -2, 5], -5), -5);
  console.log("p3_1 passed");
  assert_equal(test_heappushpop_tool([34, -3, -12, 0], -13), -13);
  console.log("p3_2 passed");
  assert_equal(test_heappushpop_tool([5, 4, 3, 2, 1], 0), 0);
  console.log("p3_3 passed");
  assert_equal(test_heappushpop_tool([4.7, 8, -1.2, 7.2], 9), -1.2);
  console.log("p3_4 passed");
}

function test_heapreplace_tool(x, i) {
  heapify(x);

  var a = heapreplace(x, i);
  var b = heappop(x);

  return [a, b];
}

function test_heapreplace() {
  assert_equal(test_heapreplace_tool([6, 1, -2, 5], -5), [-2, -5]);
  console.log("p4_1 passed");
  assert_equal(test_heapreplace_tool([34, -3, -12, 0], -13), [-12, -13]);
  console.log("p4_2 passed");
  assert_equal(test_heapreplace_tool([5, 4, 3, 2, 1], 0), [1, 0]);
  console.log("p4_3 passed");
  assert_equal(test_heapreplace_tool([4.7, 8, -1.2, 7.2], 9), [-1.2, 4.7]);
  console.log("p4_4 passed");
}

function test_nsmallest() {
  assert_equal(nsmallest(1, [6,1,-2,5]),[-2]);
  console.log("p5_1 passed");
  assert_equal(nsmallest(2, [34,-3,-12,0]),[-12,-3]);
  console.log("p5_2 passed");
  assert_equal(nsmallest(2, [5,4,3,2,1]),[1,2]);
  console.log("p5_3 passed");
  assert_equal(nsmallest(2, [4.7,8,-1.2,7.2]),[-1.2,4.7]);
  console.log("p5_4 passed");
}

function test_nlargest() {
  assert_equal(nlargest(1, [6,1,-2,5]),[6]);
  console.log("p6_1 passed");
  assert_equal(nlargest(2, [34,-3,-12,0]),[34,0]);
  console.log("p6_2 passed");
  assert_equal(nlargest(2, [5,4,3,2,1]),[5,4]);
  console.log("p6_3 passed");
  assert_equal(nlargest(2, [4.7,8,-1.2,7.2]),[8,7.2]);
  console.log("p6_4 passed");
}

function test_merge() {
    assert_equal(Array.from(merge(false, [1,3,5,7], [0,2,4,8], [5,10,15,20], [], [25])), [0, 1, 2, 3, 4, 5, 5, 7, 8, 10, 15, 20, 25]);
    console.log("p7_1 passed");
    assert_equal(Array.from(merge(true, [7,5,3,1], [8,4,2,0])), [8, 7, 5, 4, 3, 2, 1, 0]);
    console.log("p7_2 passed");
}

function test() {
    test_heappush();
    test_heapify();
    test_heappushpop();
    test_heapreplace();
    test_nsmallest();
    test_nlargest();
    test_merge();
}

test();
///// Segment IGNORE END