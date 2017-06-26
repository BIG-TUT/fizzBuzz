var printSequence = function (sequence) {
        sequence.forEach(function (element) {
            console.log(element)
        });
    },
    fizzBuzzify = function (sequence, fizzNum, buzzNum) {
        return sequence.map(function (element) {
            return element % fizzNum === 0 && element % buzzNum === 0 ?
                       "FizzBuzz":
                   element % fizzNum === 0 ?
                       "Fizz":
                   element % buzzNum === 0 ?
                       "Buzz":
                   //else
                       element;
        });
    },
    range = function (firstTerm, lastTerm) {
        var resultSequence = [],
            currentTerm = 0;
        for (currentTerm = firstTerm; currentTerm <= lastTerm; currentTerm++) {
            resultSequence.push(currentTerm);
        };
        return resultSequence;
    };

printSequence(fizzBuzzify(range(1, 100), 3, 5));

