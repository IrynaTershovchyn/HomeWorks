/* Вийшло два варіанти. В першому зібарала згенеровані числа в масив. Найважче було створити умови, щоб генерувалось від 100 до 1000. Начебто вийшло :) 

function checkProbabilityTheory(count) {
    let rndArray=[];
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 0; i < count; i++) {
        let rnd = Math.random();
        rnd *= 900;
        rnd = Math.floor(rnd)+100;
        rndArray.push(rnd+1);
        console.log (rndArray[i])
    }
    console.log("Кількість згенерованих чисел: " + rndArray.length);
        let evenNumber = 0;
        let oddNumber = 0;
    for (let k = 0; k<rndArray.length; k++) {
        if (rndArray[k] % 2 === 0) {
            evenNumber += 1;
        } else {
            oddNumber +=1;
        }
    }
        
    let evenPercent = Math.round(100/rndArray.length * evenNumber);
    let oddPercent = Math.round(100 - evenPercent);
    console.log ("Кількість парних чисел: " + evenNumber);
    console.log ("Кількість непарних чисел: " + oddNumber);
    console.log ("Співвідношення парних чисел до непарних: " + evenPercent + "%/" + oddPercent + "%")

};

checkProbabilityTheory(7);*/

// Потім спробувала об'єднати for і if, щоб не збирати числа в масив
function checkProbabilityTheory(count) {
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 0; i < count; i++) {
        let rnd = Math.random();
        rnd *= 900;
        rnd = Math.floor(rnd)+100;
        if (rnd % 2 === 0) {
            evenNumber += 1;
        } else {
            oddNumber +=1;
        }
        console.log (rnd);
    }
    let totalQty = evenNumber+oddNumber;
    console.log("Кількість згенерованих чисел: " + totalQty);
   
    let evenPercent = Math.round(100/totalQty * evenNumber);
    let oddPercent = Math.round(100 - evenPercent);
    console.log ("Кількість парних чисел: " + evenNumber);
    console.log ("Кількість непарних чисел: " + oddNumber);
    console.log ("Співвідношення парних чисел до непарних: " + evenPercent + "%/" + oddPercent + "%")

};

checkProbabilityTheory(7);
