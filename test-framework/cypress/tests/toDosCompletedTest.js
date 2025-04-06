import { CompletedToDosPage } from "../pages/toDosCompletePage/toDosCompletePage";

describe("List complited ToDos", function() {
    contesxt('Viewing list completedt todos test', function() {
        it('should allow me to display an empty tab "Completed"', function() {
            let completedToDosPage = new CompletedToDosPage()

            completedToDosPage.completedList()
            completedToDosPage.checkListCompleted()
        })
    })
})