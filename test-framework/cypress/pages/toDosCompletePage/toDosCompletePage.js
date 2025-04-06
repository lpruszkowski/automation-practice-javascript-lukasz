import BasePage from "../basePage";

function getSelectors(){
    return {
        tabCompleted: '.todo-list li #completed'
    }
}


export class CompletedToDosPage extends BasePage {

    constructor() {
        super()
    }

   completedList() {
    cy.get(getSelectors().tabCompleted).click()

   }

   checkListCompleted() {
    cy.get('.completed-list li').should('have.length', 0)
   }
}