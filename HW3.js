// Найперший варіант, який прийшов в голову - це зробити масив з x в y кількості, і перемножити значення між собою:
function pow (x,y) {
    let array = [];
    let total=1;
    for (let i = 0; i < y; i++) {
    array.push (x);
    };
    for (let j = 0; j < array.length; j++) {
        total *= array[j];
    }
 return total;
}
const result = pow (2,3);
console.log ("Результат першого варіанту " + result);

//Виглядало якось задовго, тому спробувала ще покрутити,і в фіналі вийшло це:
function pow2 (x,y) {
    let total2=1;
    for (let i=0; i<y; i++){
        total2 *=x;
        console.log ("i=" + i + ', x=' + x);
    }
    return total2;
}
const result2 = pow2 (5,3);
console.log ("Результат другого варіанту " + result2);

