var percentageLetter = function(s, letter) {
    // Turns string into Array
    let arr = s.split('');
    let obj = {}
    let ltr
    let num = 0
    let result
    for (let i = 0; i < arr.length; i++) {
        // Frequency counter for each letter in object
        obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
    }
    for (let val in obj) {
        if (val === letter) {
            ltr = obj[val]
        }
        num += obj[val]
    }
    // if NaN the result is automatically 0
    if (isNaN(Math.floor(ltr / num * 100))) {
        result = 0
    } else {
        // Equation to get percentage result
        result = Math.floor(ltr / num * 100)
    }
    return result
};

console.log(percentageLetter("foorbar", "o"))
