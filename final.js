// promlem 1

function anaToVori(ana) {
    if (ana < 0) {
        return 'plese input prosetive number';
    }
    else if (typeof ana != 'number') {
        return 'pless input number'
    }
    let vori = ana / 16;
        return vori;
}
const ana = 50;
const vori = anaToVori(ana);
console.log(vori);

// promlem 2

function pandaCost(siggara, chomosa, jilapi) {
    const siggaraPrice = 7;
    const chomosaPrice = 10;
    const jilapiPrice = 15;
    if (typeof siggara != 'number' || typeof chomosa != 'number' || typeof jilapi != 'number') {
        return 'plese input number value'
    }
    else if (siggara < 0 || chomosa < 0 || jilapi < 0) {
        return 'plese input prositive number'
    }
    let totalSinggara = siggaraPrice * siggara;
    let totalChomoca = chomosaPrice * chomosa;
    let totalJilapi = jilapiPrice * jilapi;
    let total = totalSinggara + totalChomoca + totalJilapi;
    return total;
}
const siggara = 2;
const chomosa = 6;
const jilapi = 3;
const totalCost = pandaCost(siggara, chomosa, jilapi);
console.log(totalCost);

// promlem 3

function picnicBudget(person) {
    const firsthundedPersonCost = 5000;
    const secendhundedPersonCost = 4000;
    const therdPersonCost = 3000;
    if (typeof person != 'number') {
        return 'plese input number value'
    }
    else if (person < 0) {
        return 'plese input positive number'
    }
    if (person <= 100) {
        let totalBudget = firsthundedPersonCost * person;
        return  totalBudget;
    }
    else if (person <= 200) {
        let firsthunded = firsthundedPersonCost * 100;
        let resevrPerson = person - 100;
        let secendTotal = resevrPerson * secendhundedPersonCost;
        let totalBudget = firsthunded + secendTotal;
        return totalBudget;
    }
    else { 
        let firsthunded = firsthundedPersonCost * 100;
        let secendhunded = 100 * secendhundedPersonCost;
        let reservPerson = person - 200;
        let therdTotal = reservPerson * therdPersonCost;
        let totalBudget = firsthunded + secendhunded + therdTotal;
        return totalBudget;
    }
}
const totalPerson = 126;
const totalBudget = picnicBudget(totalPerson);
console.log(totalBudget);

// promlem 4

const friendsList = ['eshak khan', 'masudur rahman', 'zubayer', 'md naim', 'mahmud', 'akash'];

function oddFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length % 2 != 0) {
            let friendName = friend;
            return friendName;
        }
    }
}
const friend = oddFriend(friendsList);
console.log(friend);