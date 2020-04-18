

function calculator(num) {
    let two = 'yu';
    let three = 'gi';
    let five = 'oh';
    let twoThree = 'yu-gi';
    let twoFive = 'yu-oh';
    let threeFive = 'gi-oh';
    let allThree = 'yu-gi-oh'

    let numArray =[];
    for (let i = 1; i <= num; i++) {

        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            numArray.push(allThree);
        }
        else if (i % 2 === 0 && i % 3 === 0 ) {
            numArray.push(twoThree);
        }

        else if (i % 2 === 0 && i % 5 === 0 ) {
            numArray.push(twoFive);
        }

        else if (i % 3 === 0 && i % 5 === 0 ) {
            numArray.push(threeFive);
        }

        else if(i % 2 === 0) {
            numArray.push(two);
        }

        else if (i % 3 === 0) {
            numArray.push(three);
        }

       else if (i % 5 === 0) {
            numArray.push(five);
        }

        else {
            numArray.push(i);
        }

    }
    console.log (numArray);
        return numArray;

}

calculator(100);
calculator(30);