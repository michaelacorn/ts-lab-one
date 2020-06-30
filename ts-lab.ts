interface mountain {
    name: string;
    height: number;

}

let Mountains: mountain [] = [
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
]

interface product {
    name: string;
    price: number;

}

let Products: product [] = [
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
]

const findNameOfTallestMountain = (array: mountain[]): string => {
    let max = array[0];
    for (const i of array) {
        // console.log(i);
        if (i.height > max.height) {
            max = i;
        }
    }
    return max.name;
}

let tallestMountain = findNameOfTallestMountain(Mountains);
console.log(tallestMountain);

const calcAverageProductPrice = (array: product[]): number => {
    let sum = 0;
    for (const i of array) {
        sum = (i.price + sum)
    }
    return sum / array.length;
    
}

let averagePrice = calcAverageProductPrice(Products);
console.log(averagePrice);

interface InventoryItem {
    product: product;
    quantity: number;

}

let items: InventoryItem [] = [
    {product: 
        {name: 'motor',
        price:  10.00}, 
    quantity: 10
},

    {product:
        {name: 'sensor',
        price:  12.50}, 
    quantity: 4
},
    {product:
        {name: 'LED',
        price:  1.00},
    quantity: 20
,

}]

const calcInventoryValue = (array: InventoryItem []) : number => {
    let value = 0;
    for (const i of array) {
        value += i.product.price * i.quantity
    }
    return value;

}
let inventoryValue = calcInventoryValue(items);
console.log(inventoryValue);