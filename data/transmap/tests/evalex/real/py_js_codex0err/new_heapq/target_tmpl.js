///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END
///// Segment BEGIN Basic
///// Segment END

///// Segment BEGIN max
///// Segment END

///// Segment BEGIN shift
///// Segment END

///// Segment BEGIN merge
///// Segment END

///// Segment BEGIN nsmallest
///// Segment END

///// Segment BEGIN nlargest
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