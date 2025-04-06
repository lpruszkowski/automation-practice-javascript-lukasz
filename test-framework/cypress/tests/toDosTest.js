import { ToDosPage } from "../pages/toDosPage/toDosPage";

descibe('Adding todos scenario', function() {
    context('Add todos to test version', function() {

        it('attempt to add todo composed of special characters', function() {
            let toDosPage = new ToDosPage()

            toDosPage.specialCharactersToDo()
            toDosPage.checkSpecialCharactersValidation()
        })

        it('try adding todo with one character', function() {
            let toDosPage = new ToDosPage()

            toDosPage.oneCharToDo()
            toDosPage.checkOneCharValidation()
        })
    })
})