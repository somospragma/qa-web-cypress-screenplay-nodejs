import { Task } from "cypress/support/tasks/task";

export default class TypeElement implements Task {
    private readonly selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>;
    private readonly argument: string;
 
    constructor(selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>, argument: string) {
        this.selector = selector;
        this.argument = argument;
    }

    execute(actor: any): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.selector()
        .should('be.visible')
        .type(this.argument);
    }
}
