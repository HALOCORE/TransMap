
function even_odd_palindrome(n) {
    function is_palindrome(n) {
        return String(n) == String(n).split("").reverse().join("");
    }

    let even_palindrome_count = 0;
    let odd_palindrome_count = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1 && is_palindrome(i)) {
            odd_palindrome_count += 1;
        } else if (i % 2 == 0 && is_palindrome(i)) {
            even_palindrome_count += 1;
        }
    }
    return [even_palindrome_count, odd_palindrome_count];
}

