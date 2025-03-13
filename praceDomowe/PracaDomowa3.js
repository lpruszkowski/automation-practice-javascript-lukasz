// Zadania 1

/*
a. Stwórz nową Klasę która zawiera metodę z parametrem - name
   Wywołaj metodę kilkukrotnie, przy każdym wywołaniu imię powinno być inne.

*/

class BookOfNames {

    namesChanger(name){

        return name;
    }    
}

let bookOfNames = new BookOfNames()

console.log(bookOfNames.namesChanger("Łukasz"));
console.log(bookOfNames.namesChanger("Tomek"));
console.log(bookOfNames.namesChanger("Michał"));


/*
   Dodatkowo stwórz drugą metodę w której odwołujesz się do metody z parametrem name korzystając ze słówka kluczowego this, w drugiej metodzie zmień imię 
   które dostajesz z metody pierwszej za pomocą metod dla Stringów w taki sposób żeby:
    - wylogować tylko 2 pierwsze litery imienia
    - wylogować imię zaczynające się z dużej litery lub małej litery w zależności jak zostało podane przy wywołaniu metody.
    - wylogować imię do którego dopiszesz nazwisko oraz jakieś dodatkowe dwa słowa, z wykorzystanie iterału słownego.

*/

class BookOfNames {

    constructor(name) {
        this.name = name
    }

    secondMethod() {

        console.log(this.name.substr(0, 2))

        let firstLetter = this.name.charAt(0)
        let rest = this.name.substr(1)
        
        console.log(firstLetter.toUpperCase() + rest)
        console.log(firstLetter.toLowerCase() + rest)

        console.log(this.name + " Nazwisko i jakieś dodatkowe dwa słowa")
    }
}

let bookOfNames = new BookOfNames("Jonasz")

bookOfNames.secondMethod()


/*
b. Zapoznaj się z wybranymi operatorami: Operatory logiczne - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators

    Następnie:

    - Stwórz dwie zmienne których wartością będzie liczba
      Wykorzystując poznane operatory w poleceniu console.log(), wskaż fragment kodu który sprawdzi wartości liczbowe z Twoich zmiennych w następujący 
      sposób:
        Zwróć true, jeśli jedna z liczb to 50 lub jeśli ich suma to 50 w innym przypadku powinno być false

*/

let a = 36;
let b = 58;

console.log( a && b == 50 || a + b == 50);


/*
c. Mamy wskazane dwie tablice :
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]

Napisz fragment kodu który wyloguje informacje w konsoli wykorzystując obie tablice w podany sposób:
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."

*/

console.log("1" + o[1] + " choice is " + color[0] + ".")
console.log("2" + o[2] + " choice is " + color[1] + ".")
console.log("3" + o[3] + " choice is " + color[2] + ".")
