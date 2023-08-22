
function findClosestElements(numbers) {
    let closestPair = null;
    let distance = null;

    for (let idx = 0; idx < numbers.length; idx++) {
        for (let idx2 = 0; idx2 < numbers.length; idx2++) {
            if (idx !== idx2) {
                if (distance === null) {
                    distance = Math.abs(numbers[idx] - numbers[idx2]);
                    closestPair = [numbers[idx], numbers[idx2]].sort();
                } else {
                    const newDistance = Math.abs(numbers[idx] - numbers[idx2]);
                    if (newDistance < distance) {
                        distance = newDistance;
                        closestPair = [numbers[idx], numbers[idx2]].sort();
                    }
                }
            }
        }
    }

    return closestPair;
}

