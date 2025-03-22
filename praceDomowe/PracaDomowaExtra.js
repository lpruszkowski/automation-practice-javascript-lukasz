/*
1.1 Wykorzystanie klasy bazowej i budowa abstrakcji:

Stwórz klasę użytkownika która będzie naszą klasą bazową.

Klasa użytkownika powinna posiadać konstruktor w którym znajduje się 5 elementów związanych z użytkownikiem. Określ je, czyli coś co może posiadać użytkownik np numer telefonu.

Konstruktor Powinien posiadać również parametr dla każdego elementu znajdującego się w konstruktorze, tak by można było później podać wartość w kolejnej klasie.

Następnie w tej samej klasie stwórz 3 metody które w jakiś sposób przetwarzają parametry z konstruktora. To może być dowolna czynność, logowanie w konsoli, dodawanie itd. liczy się poprawne 
wykorzystanie parametru zawartego w konstruktorze.

*Metody powinny być maksymalnie 3 tak by w minimum jednej metodzie wykorzystać więcej niż jeden element z konstruktora za pomocą słówka kluczowego this.
*/

class User {
    constructor(login, city, country, phone, add_year) {
        this.login = login
        this.city = city
        this.country = country
        this.phone = phone
        this.add_year = add_year
    }
    
    viewUser() {
        console.log('Login: ' + this.login + '\nCity: ' + this.city + '\nConutry: ' + this.country + '\nPhone: ' + this.phone + '\nAdd year: ' + this.add_year)
    }

    addedYears() {
        const date = new Date()
        let addTime = date.getFullYear() - this.add_year
        console.log("Add years: " + addTime + " years ago")
    }
}

let user = new User("User_1","London","England","123-456-789", 2006)

user.viewUser()
user.addedYears()

/*
- Tworzymy dwie kolejne klasy użytkowników, niech mają nazwy BasicUser i CartUser, *Może być w tym samym pliku żeby było łatwiej, a na zajęciach pokażę Wam jak wykorzystać import oraz export dla 
wykorzystania osobnych plików.

W każdej z tych klas tworzymy konstruktor i z wykorzystaniem słówka super podajemy wartości dla każdego elementu z konstruktora tak by każdy użytkownik był unikalny.

Następnie w każdej z tych 2 klas tworzymy po 1 metodzie np. getUserData i w niej wykorzystujemy wszystkie 3 metody które powstały w klasie bazowej, wykorzystując słówko this.

Następnie poniżej w tym samym pliku odwołujemy się do klas: BasicUser i CartUser i wywołujemy / uruchamiamy metodę która w tej klasie się znajduje tak by pozyskać unikalne informacje.
Pamiętajcie że jeżeli obaj użytkownicy mają numer np. telefonu i będziecie to logować w konsoli to dane muszą być unikalne które podacie w obu klasach.
*/

class BasicUser extends User {
    constructor(login, city, country, phone, add_year) {
        super(login, city, country, phone, add_year)
    }

    basicUserView() {
        this.viewUser()
    }

    basicUserAddedYears() {
        this.addedYears()
    }
}

class CartUser extends User {
    constructor(login, city, country, phone, add_year) {
        super(login, city, country, phone, add_year)
    }

    cartUserView() {
        this.viewUser()
    }

    cartUserAddedYears() {
        this.addedYears()
    }
}

let basicUser = new BasicUser("User_2","Grenada","Spain","321-654-987", 2012)

basicUser.viewUser()
basicUser.addedYears()

let cartUser = new CartUser("User_3","Rome","Italy","963-258-741", 1995)

cartUser.viewUser()
cartUser.addedYears()

/*
1.2 Wykorzystanie obiektów JS

Stwórz obiekt o nazwie 'library', który będzie zawierał 3 klucze (książki).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne klucze: Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna być listą w której znajdą się odpowiednie wpisy.
Wyloguj w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania, Ilość stron tak by w konsoli nie pojawił się żaden nawias.
*/

let library = {
    Książka1: {
        Tytuł: "Wielkie nadzieje", 
        Autor: "Charles Dickens", 
        "Data wydania": "1861", 
        "Ilość stron": 400
    },
    Książka2: {
        Tytuł: "Przygody Tomka Sawyera", 
        Autor: "Mark Twain", 
        "Data wydania": "1876", 
        "Ilość stron": 262
    },
    Książka3: {
        Tytuł: "Fundacja", 
        Autor: "Isaac Asimov", 
        "Data wydania": "1951", 
        "Ilość stron": 204 }

}

console.log('Tytuł: ' + library.Książka1.Tytuł + '\nAutor: ' + library.Książka1.Autor + '\nData wydania: ' + library.Książka1["Data wydania"] + '\nIlość stron: ' + library.Książka1["Ilość stron"])
console.log('Tytuł: ' + library.Książka2.Tytuł + '\nAutor: ' + library.Książka2.Autor + '\nData wydania: ' + library.Książka2["Data wydania"] + '\nIlość stron: ' + library.Książka2["Ilość stron"])
console.log('Tytuł: ' + library.Książka3.Tytuł + '\nAutor: ' + library.Książka3.Autor + '\nData wydania: ' + library.Książka3["Data wydania"] + '\nIlość stron: ' + library.Książka3["Ilość stron"])


