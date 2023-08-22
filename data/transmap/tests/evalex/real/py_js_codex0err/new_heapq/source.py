##### Segment BEGIN Basic
__all__ = ['heappush', 'heappop', 'heapify', 'heapreplace', 'merge', 'nlargest', 'nsmallest', 'heappushpop']

def heappush(heap, item):
    heap.append(item)
    _siftdown(heap, 0, len(heap)-1)

def heappop(heap):
    lastelt = heap.pop()
    if heap:
        returnitem = heap[0]
        heap[0] = lastelt
        _siftup(heap, 0)
        return returnitem
    return lastelt

def heapreplace(heap, item):
    returnitem = heap[0]
    heap[0] = item
    _siftup(heap, 0)
    return returnitem

def heappushpop(heap, item):
    if heap and heap[0] < item:
        item, heap[0] = heap[0], item
        _siftup(heap, 0)
    return item

def heapify(x):
    n = len(x)
    for i in reversed(range(n//2)):
        _siftup(x, i)

##### Segment END

##### Segment BEGIN max
def _heappop_max(heap):
    lastelt = heap.pop()
    if heap:
        returnitem = heap[0]
        heap[0] = lastelt
        _siftup_max(heap, 0)
        return returnitem
    return lastelt

def _heapreplace_max(heap, item):
    returnitem = heap[0]
    heap[0] = item
    _siftup_max(heap, 0)
    return returnitem

def _heapify_max(x):
    n = len(x)
    for i in reversed(range(n//2)):
        _siftup_max(x, i)

def _siftdown(heap, startpos, pos):
    newitem = heap[pos]

    while pos > startpos:
        parentpos = (pos - 1) >> 1
        parent = heap[parentpos]
        if newitem < parent:
            heap[pos] = parent
            pos = parentpos
            continue
        break
    heap[pos] = newitem

##### Segment END

##### Segment BEGIN shift
def _siftup(heap, pos):
    endpos = len(heap)
    startpos = pos
    newitem = heap[pos]
    childpos = 2*pos + 1
    while childpos < endpos:
        rightpos = childpos + 1
        if rightpos < endpos and not heap[childpos] < heap[rightpos]:
            childpos = rightpos
        
        heap[pos] = heap[childpos]
        pos = childpos
        childpos = 2*pos + 1
    heap[pos] = newitem
    _siftdown(heap, startpos, pos)

def _siftdown_max(heap, startpos, pos):
    'Maxheap variant of _siftdown'
    newitem = heap[pos]
    
    while pos > startpos:
        parentpos = (pos - 1) >> 1
        parent = heap[parentpos]
        if parent < newitem:
            heap[pos] = parent
            pos = parentpos
            continue
        break
    heap[pos] = newitem

def _siftup_max(heap, pos):
    endpos = len(heap)
    startpos = pos
    newitem = heap[pos]
    childpos = 2*pos + 1
    while childpos < endpos:
        rightpos = childpos + 1
        if rightpos < endpos and not heap[rightpos] < heap[childpos]:
            childpos = rightpos
        
        heap[pos] = heap[childpos]
        pos = childpos
        childpos = 2*pos + 1
    
    heap[pos] = newitem
    _siftdown_max(heap, startpos, pos)

##### Segment END

##### Segment BEGIN merge
def merge(*iterables, reverse=False):
    h = []
    h_append = h.append

    if reverse:
        _heapify = _heapify_max
        _heappop = _heappop_max
        _heapreplace = _heapreplace_max
        direction = -1
    else:
        _heapify = heapify
        _heappop = heappop
        _heapreplace = heapreplace
        direction = 1


    for order, it in enumerate(map(iter, iterables)):
        try:
            next = it.__next__
            h_append([next(), order * direction, next])
        except StopIteration:
            pass
    _heapify(h)
    while len(h) > 1:
        try:
            while True:
                value, order, next = s = h[0]
                yield value
                s[0] = next()
                _heapreplace(h, s)
        except StopIteration:
            _heappop(h)
    if h:
        value, order, next = h[0]
        yield value
        yield from next.__self__
    return

##### Segment END

##### Segment BEGIN nsmallest
def nsmallest(n, iterable):
    if n == 1:
        it = iter(iterable)
        sentinel = object()
        result = min(it, default=sentinel)
        return [] if result is sentinel else [result]

    try:
        size = len(iterable)
    except (TypeError, AttributeError):
        pass
    else:
        if n >= size:
            return sorted(iterable)[:n]

    it = iter(iterable)
    result = [(elem, i) for i, elem in zip(range(n), it)]
    if not result:
        return result
    _heapify_max(result)
    top = result[0][0]
    order = n
    _heapreplace = _heapreplace_max
    for elem in it:
        if elem < top:
            _heapreplace(result, (elem, order))
            top, _order = result[0]
            order += 1
    result.sort()
    return [elem for (elem, order) in result]


##### Segment END

##### Segment BEGIN nlargest
def nlargest(n, iterable):
    if n == 1:
        it = iter(iterable)
        sentinel = object()
        result = max(it, default=sentinel)
        return [] if result is sentinel else [result]

    try:
        size = len(iterable)
    except (TypeError, AttributeError):
        pass
    else:
        if n >= size:
            return sorted(iterable, reverse=True)[:n]

    it = iter(iterable)
    result = [(elem, i) for i, elem in zip(range(0, -n, -1), it)]
    if not result:
        return result
    heapify(result)
    top = result[0][0]
    order = -n
    _heapreplace = heapreplace
    for elem in it:
        if top < elem:
            _heapreplace(result, (elem, order))
            top, _order = result[0]
            order -= 1
    result.sort(reverse=True)
    return [elem for (elem, order) in result]


##### Segment END

##### Segment IGNORE BEGIN
# try:
#     from _heapq import *
# except ImportError:
#     pass
# try:
#     from _heapq import _heapreplace_max
# except ImportError:
#     pass
# try:
#     from _heapq import _heapify_max
# except ImportError:
#     pass
# try:
#     from _heapq import _heappop_max
# except ImportError:
#     pass


# if __name__ == "__main__":

#     import doctest
#     print(doctest.testmod())

def assert_equal(a, b):
  if a != b:
    raise Exception("MyLogError MISMATCH")

def test_heappush_tool(items):
  heap = []

  for item in items:
    heappush(heap, item)
  
  a = heappop(heap)
  b = heappop(heap)

  return [a, b]

def test_heappush():
  assert_equal(test_heappush_tool([6,1,-2,5]),[-2,1])
  assert_equal(test_heappush_tool([34,-3,-12,0]),[-12,-3])
  assert_equal(test_heappush_tool([5,4,3,2,1]),[1,2])
  assert_equal(test_heappush_tool([4.7,8,-1.2,7.2]),[-1.2,4.7])
  
def test_heapify_tool(x):
  heapify(x)

  a = heappop(x)
  b = heappop(x)

  return [a, b]

def test_heapify():
  assert_equal(test_heapify_tool([6,1,-2,5]),[-2,1])
  assert_equal(test_heapify_tool([34,-3,-12,0]),[-12,-3])
  assert_equal(test_heapify_tool([5,4,3,2,1]),[1,2])
  assert_equal(test_heapify_tool([4.7,8,-1.2,7.2]),[-1.2,4.7])

def test_heappushpop_tool(x, i):
  heapify(x)

  a = heappushpop(x, i)

  return a

def test_heappushpop():
  assert_equal(test_heappushpop_tool([6,1,-2,5],-5),-5)
  assert_equal(test_heappushpop_tool([34,-3,-12,0],-13),-13)
  assert_equal(test_heappushpop_tool([5,4,3,2,1],0),0)
  assert_equal(test_heappushpop_tool([4.7,8,-1.2,7.2],9),-1.2)

def test_heapreplace_tool(x, i):
  heapify(x)

  a = heapreplace(x, i)
  b = heappop(x)

  return [a,b]

def test_heapreplace():
  assert_equal(test_heapreplace_tool([6,1,-2,5],-5),[-2,-5])
  assert_equal(test_heapreplace_tool([34,-3,-12,0],-13),[-12,-13])
  assert_equal(test_heapreplace_tool([5,4,3,2,1],0),[1,0])
  assert_equal(test_heapreplace_tool([4.7,8,-1.2,7.2],9),[-1.2,4.7])

def test_merge():
  assert_equal(list(merge([1,3,5,7], [0,2,4,8], [5,10,15,20], [], [25])), [0, 1, 2, 3, 4, 5, 5, 7, 8, 10, 15, 20, 25])
  assert_equal(list(merge([7,5,3,1], [8,4,2,0], reverse=True)), [8, 7, 5, 4, 3, 2, 1, 0])

def test_nsmallest():
    assert_equal(nsmallest(1, [6,1,-2,5]),[-2])
    assert_equal(nsmallest(2, [34,-3,-12,0]),[-12,-3])
    assert_equal(nsmallest(2, [5,4,3,2,1]),[1,2])
    assert_equal(nsmallest(2, [4.7,8,-1.2,7.2]),[-1.2,4.7])

def test_nlargest():
    assert_equal(nlargest(1, [6,1,-2,5]),[6])
    assert_equal(nlargest(2, [34,-3,-12,0]),[34,0])
    assert_equal(nlargest(2, [5,4,3,2,1]),[5,4])
    assert_equal(nlargest(2, [4.7,8,-1.2,7.2]),[8,7.2])

def test():
    test_heappush()
    test_heapify()
    test_heappushpop()
    test_heapreplace()
    test_nsmallest()
    test_nlargest()
    test_merge()

test()
##### Segment IGNORE END