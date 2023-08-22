
function hasCloseElements(numbers, threshold) {
    for (let idx = 0; idx < numbers.length; idx++) {
        for (let idx2 = 0; idx2 < numbers.length; idx2++) {
            if (idx !== idx2) {
                const distance = Math.abs(numbers[idx] - numbers[idx2]);
                if (distance < threshold) {
                    return true;
                }
            }
        }
    }
    return false;
}

