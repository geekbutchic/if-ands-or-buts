const prompt = require("prompt-sync")({ sigint: true });

let person1 = Number(prompt("Please enter how much you paid, Person 1:  "));
let person2 = Number(prompt("Please enter how much you paid, Person 2: "));

let splitBill = (person1 + person2) / 2;

if ((person1 - splitBill) < 0) {
    let owed_amount = Math.abs(person1 - splitBill)

    console.log(`Person 2 owes person 1 $${owed_amount} dollars`);
}

if ((person1 - splitBill) > 0) {
    let owed_amount= Math.abs(person1 -splitBill)
    console.log(`Person 1 owes Person 2 $${owed_amount} dollars`);
}