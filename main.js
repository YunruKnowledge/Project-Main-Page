



'use strict';

function myFunc(...x) {
    const myArr = new Array (...x) ;
    return myArr;
}

const myObject = {
    a: myFunc(10, 20, 30, 40, '232'),
    b: function() {
        return this.a[4];
    },
};

const newArr = [];

for (let i = 0; i < myObject.a.length; i++) {
    newArr.push(myObject.a[i]);
}

console.log(newArr) ;