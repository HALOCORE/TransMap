function f_gold(A) {
    var loc = 0;
    var vmx = A[0];
    var mx = A[0];
    for (var i = 0; i < A.length; i++) {
        if (A[i] > mx) {
            mx = A[i];
        }
        if (A[i] < vmx) {
            loc = i;
            vmx = mx;
        }
    }
    return loc + 1;
}

