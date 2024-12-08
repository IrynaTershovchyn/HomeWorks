const text = "Happiness, Time, Task, Wonderful, Joyful, Apple";
const pattern = /\b[b-zB-Z]{6,}\b/g;  
/*const pattern = /\b[^aA\s]{6,}\b/g; //не впевнена, що "символи" в умові - це тільки літери можуть бути. Тому ще цей варіант 
*/console.log(text.match(pattern));