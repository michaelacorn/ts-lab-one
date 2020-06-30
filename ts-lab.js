"use strict";
var Mountains = [
    { name: 'Kilimanjaro',
        height: 19341
    },
    { name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310,
    }
];
var Products = [
    { name: 'motor',
        price: 10.00
    },
    { name: 'sensor',
        price: 12.50
    },
    {
        name: 'LED',
        price: 1.00,
    }
];
var findNameOfTallestMountain = function (array) {
    var max = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        // console.log(i);
        if (i.height > max.height) {
            max = i;
        }
    }
    return max.name;
};
var tallestMountain = findNameOfTallestMountain(Mountains);
console.log(tallestMountain);
var calcAverageProductPrice = function (array) {
    var sum = 0;
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var i = array_2[_i];
        sum = (i.price + sum);
    }
    return sum / array.length;
};
var averagePrice = calcAverageProductPrice(Products);
console.log(averagePrice);
var items = [
    { product: { name: 'motor',
            price: 10.00 },
        quantity: 10
    },
    { product: { name: 'sensor',
            price: 12.50 },
        quantity: 4
    },
    { product: { name: 'LED',
            price: 1.00 },
        quantity: 20,
    }
];
var calcInventoryValue = function (array) {
    var value = 0;
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var i = array_3[_i];
        value += i.product.price * i.quantity;
    }
    return value;
};
var inventoryValue = calcInventoryValue(items);
console.log(inventoryValue);
