import BasePage from "../basePage";


function getSelectors(){
    return {
        specialCharacterValidation: '.new-todo.validation1',
        oneCharValidation: '.new-todo.validation2'
    }
}

export class ToDosPage extends BasePage {

    constructor() {
        super()
    }

    specialCharactersToDo() {
        cy.fixture('testData.json').then((specialCharacters) => {
            get('.new-todo').type(specialCharacters.specialCharacters).type('{enter}')
        })
    }

    checkSpecialCharactersValidation() {
        cy.expect(getSelectors().specialCharacterValidation).toHaveText("Tekst może zawierać wyłącznie litery, cyfry, spacje oraz znaki specjalne !@#$%&*?,.=+-_")
    }
    
   oneCharToDo() {
        cy.fixture('testData.json').then((oneCharacters) => {
            get('new-todo').type(oneCharacters.oneChar[0](Math.random())).type('{enter}')
        })
   }

   checkOneCharValidation() {
    cy.expect(getSelectors().oneCharValidation).toHaveText("Minimalna ilość znaków to 3")
   }
}