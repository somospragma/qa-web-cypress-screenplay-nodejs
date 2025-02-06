import Actor from "cypress/support/actors/actor";
import { Task } from "cypress/support/tasks/task";
import { UseCypress } from "../abilities/userCypress";

export default class TypeElement implements Task{
    private readonly selector: string
    private readonly argument: string;
 
    constructor(selector: string, argument: string) {
        this.selector = selector;
        this.argument = argument;
    }


execute(actor: Actor): void {
    const cypress = UseCypress.as(actor);
    cypress.type(this.selector, this.argument);
    
}

    /*execute(actor: Actor): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.selector()
        .should('be.visible')
        .type(this.argument);
    }*/
}
