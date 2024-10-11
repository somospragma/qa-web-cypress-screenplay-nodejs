import { Task } from "cypress/support/tasks/task";

export default class ClickElement implements Task {
    private readonly selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>;
 
    constructor(selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>) {
        this.selector = selector;
    }

    execute(actor: any): void {
        this.selector()
        .should('be.visible')
        .click();
    }
}
