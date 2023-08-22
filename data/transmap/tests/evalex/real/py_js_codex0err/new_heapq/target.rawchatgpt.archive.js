///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END
///// Segment BEGIN Basic DONE
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
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        _siftup(x, i);
    }
}

const _siftdown = (heap, startpos, pos) => {
    let newitem = heap[pos];
    while (pos > startpos) {
        let parentpos = (pos - 1) >> 1;
        let parent = heap[parentpos];
        if (newitem < parent) {
            heap[pos] = parent;
            pos = parentpos;
            continue;
        }
        break;
    }
    heap[pos] = newitem;
};

const _siftup = (heap, pos) => {
    let endpos = heap.length;
    let startpos = pos;
    let newitem = heap[pos];
    let childpos = 2 * pos + 1;
    while (childpos < endpos) {
        let rightpos = childpos + 1;
        if (rightpos < endpos && !(heap[childpos] < heap[rightpos])) {
            childpos = rightpos;
        }
        heap[pos] = heap[childpos];
        pos = childpos;
        childpos = 2 * pos + 1;
    }
    heap[pos] = newitem;
    _siftdown(heap, startpos, pos);
};

const __all__ = ['heappush', 'heappop', 'heapify', 'heapreplace', 'merge', 'nlargest', 'nsmallest', 'heappushpop'];
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
        if (newitem < parent) {
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
        if (rightpos < endpos && !(heap[childpos] < heap[rightpos])) {
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
function merge(...iterables) {
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
            h_append([next().value, order * direction, next]);
        } catch (e) {
            if (e instanceof StopIteration) {
                // pass
            } else {
                throw e;
            }
        }
    }
    _heapify(h);
    while (h.length > 1) {
        try {
            while (true) {
                let [value, order, next] = s = h[0];
                yield value;
                s[0] = next().value;
                _heapreplace(h, s);
            }
        } catch (e) {
            if (e instanceof StopIteration) {
                _heappop(h);
            } else {
                throw e;
            }
        }
    }
    if (h.length > 0) {
        let [value, order, next] = h[0];
        yield value;
        yield* next.__self__;
    }
    return;
}
///// Segment END

///// Segment BEGIN nsmallest DONE
function nsmallest(n, iterable) {
    if (n === 1) {
        const it = iterable[Symbol.iterator]();
        const sentinel = {};
        const result = Math.min(...it, sentinel);
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
            [top, order] = result[0];
            order += 1;
        }
    }
    result.sort();
    return result.map(([elem, order]) => elem);
}

function _heapify_max(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        _siftup_max(arr, i);
    }
}

function _siftup_max(heap, pos) {
    const endpos = heap.length;
    const startpos = pos;
    const newitem = heap[pos];
    let childpos = 2 * pos + 1;
    while (childpos < endpos) {
        let rightpos = childpos + 1;
        if (rightpos < endpos && !(heap[childpos][0] > heap[rightpos][0])) {
            childpos = rightpos;
        }
        heap[pos] = heap[childpos];
        pos = childpos;
        childpos = 2 * pos + 1;
    }
    heap[pos] = newitem;
    _siftdown_max(heap, startpos, pos);
}

function _siftdown_max(heap, startpos, pos) {
    const newitem = heap[pos];
    while (pos > startpos) {
        const parentpos = (pos - 1) >> 1;
        const parent = heap[parentpos];
        if (newitem[0] > parent[0]) {
            heap[pos] = parent;
            pos = parentpos;
            continue;
        }
        break;
    }
    heap[pos] = newitem;
}

function _heapreplace_max(heap, item) {
    const result = heap[0];
    heap[0] = item;
    _siftup_max(heap, 0);
    return result;
}
///// Segment END

///// Segment BEGIN nlargest DONE
function nlargest(n, iterable) {
    if (n === 1) {
        const it = iterable[Symbol.iterator]();
        const sentinel = {};
        const result = Math.max(...it, sentinel);
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
    const result = Array.from(it, (elem, i) => [elem, i]).slice(-n);
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
            [top, _order] = result[0];
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
  assert_equal(test_heappush_tool([34, -3, -12, 0]), [-12, -3]);
  assert_equal(test_heappush_tool([5, 4, 3, 2, 1]), [1, 2]);
  assert_equal(test_heappush_tool([4.7, 8, -1.2, 7.2]), [-1.2, 4.7]);
}

function test_heapify_tool(x) {
  heapify(x);

  var a = heappop(x);
  var b = heappop(x);

  return [a, b];
}

function test_heapify() {
  assert_equal(test_heapify_tool([6, 1, -2, 5]), [-2, 1]);
  assert_equal(test_heapify_tool([34, -3, -12, 0]), [-12, -3]);
  assert_equal(test_heapify_tool([5, 4, 3, 2, 1]), [1, 2]);
  assert_equal(test_heapify_tool([4.7, 8, -1.2, 7.2]), [-1.2, 4.7]);
}

function test_heappushpop_tool(x, i) {
  heapify(x);

  var a = heappushpop(x, i);

  return a;
}

function test_heappushpop() {
  assert_equal(test_heappushpop_tool([6, 1, -2, 5], -5), -5);
  assert_equal(test_heappushpop_tool([34, -3, -12, 0], -13), -13);
  assert_equal(test_heappushpop_tool([5, 4, 3, 2, 1], 0), 0);
  assert_equal(test_heappushpop_tool([4.7, 8, -1.2, 7.2], 9), -1.2);
}

function test_heapreplace_tool(x, i) {
  heapify(x);

  var a = heapreplace(x, i);
  var b = heappop(x);

  return [a, b];
}

function test_heapreplace() {
  assert_equal(test_heapreplace_tool([6, 1, -2, 5], -5), [-2, -5]);
  assert_equal(test_heapreplace_tool([34, -3, -12, 0], -13), [-12, -13]);
  assert_equal(test_heapreplace_tool([5, 4, 3, 2, 1], 0), [1, 0]);
  assert_equal(test_heapreplace_tool([4.7, 8, -1.2, 7.2], 9), [-1.2, 4.7]);
}

function test_merge() {
  assert_equal(Array.from(merge([1,3,5,7], [0,2,4,8], [5,10,15,20], [], [25])), [0, 1, 2, 3, 4, 5, 5, 7, 8, 10, 15, 20, 25]);
  assert_equal(Array.from(merge(true, [7,5,3,1], [8,4,2,0])), [8, 7, 5, 4, 3, 2, 1, 0]);
}

function test_nsmallest() {
  assert_equal(nsmallest(2, [6,1,-2,5]),[-2,1]);
  assert_equal(nsmallest(2, [34,-3,-12,0]),[-12,-3]);
  assert_equal(nsmallest(2, [5,4,3,2,1]),[1,2]);
  assert_equal(nsmallest(2, [4.7,8,-1.2,7.2]),[-1.2,4.7]);
}

function test_nlargest() {
  assert_equal(nlargest(2, [6,1,-2,5]),[6,5]);
  assert_equal(nlargest(2, [34,-3,-12,0]),[34,0]);
  assert_equal(nlargest(2, [5,4,3,2,1]),[5,4]);
  assert_equal(nlargest(2, [4.7,8,-1.2,7.2]),[8,7.2]);
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