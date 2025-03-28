/*
Wybrane funkcje dostępne dla tablic



*/

.unshift() //dodaje elementy na początku tablicy
.shift() //usuwa pierwszy element
.push() //dodanie elementów na końcu tablicy
.pop() //usuwanie ostaniejgo elementu

//edytowanie pozycji w tablicy
nazwa_tablicy[indeks_elementu] = nowa_wartosc

// funkcja slice nie wpływ na starą tablicę
// funkcja splice zastępuje stare elementy nowymi

let obj = {

    foo: 5345;
    bar: "World"
}


obj["user 2"] = {}

//-----------------------------------------------------------------------


let text = 'to jakieś zdanie jest'

console.log(text.length)


let textExtra = "Ala ma kota i psa"

console.log(textExtra.substr(7))

console.log(textExtra.toLowerCase())


let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript';

let textNew = 'Koty i psy to fajne zwierzaki'

let textToArr = textNew.split(" ");

console.log(textToArr.length)

//---------------------------------------------------------------------------

let osoby1 = [
    'Jan Kowalski',
    ['Adam Nowak', [['Maria Z', 'Janusz G']]],
    'Maria Z',
    'Janusz G',
    [[['Maria Z', 'Janusz G']]],
    'Marcin J',
    22,
    [[['Maria Z', 'Janusz G'], [12,2,3,[[['Marek H.', 'Krzysztof K.']]]]]],
    {
        myName: "Krzysiek"
    }
];


osoby1([7],[0],[1],[3],[0],[0].push("Lukasz P"))















