import BasePage from "../basePage";

let myTaskAssignedToMe = {
    overall: 0
}

function getSelectors() {
    return {
        myTask: '.article_left_box > h4:nth-child(1)',
        taskAssignedToMe: '.article_box.dsb>div>*'
    }
}

export class MainPage extends BasePage {

    constructor() {
        super()
    }

    checkMyTask() {
        cy.url().should('contain', 'demo.testarena')
        cy.get(getSelectors().myTask).should('be.visible')
    }
    
    getTaskAssignedToMe(taskName, taskPosition = myTaskAssignedToMe) {

        if(taskName === "overall") {
            //dodatkowe czynności związane z innąklasą css
        }

        cy.get(getSelectors().taskAssignedToMe).eq(taskPosition[taskName])
    }
}
