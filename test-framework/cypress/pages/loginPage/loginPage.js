import BasePage from "../basePage";
import loginPageSelectors from "./loginPageSelectors";


export class LoginPage extends BasePage {

    constructor() {
        super('TestArena Login Page')
    }

    login(email, pass) {

        cy.get(loginPageSelectors.email).type(email)
        cy.get(loginPageSelectors.pass).type(pass)
        cy.get(loginPageSelectors.loginBtn).contains('Zaloguj').click()
    }

    getLoginPageUrl(){
        let loginPageUrl = this.url
        loginPageUrl = 'http://demo.testarena.pl/zaloguj'
        return loginPageUrl
    }
}
