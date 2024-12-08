var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const allEmails = (arr.map(obj=>obj.email)).toString();
console.log ("Всі імейли: " + allEmails);
const trustPattern = /[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)/g;
const trustedEmail = allEmails.match(trustPattern);
console.log("Імейли, яким можна довіряти: " + trustedEmail);

