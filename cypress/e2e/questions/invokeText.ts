import Actor from "cypress/support/actors/actor";
import { Question } from "cypress/support/tasks/question";
import { UseCypress } from "../abilities/userCypress";

export default class InvokeText implements Question {
    constructor(private readonly selector: string, private readonly assertion: string, private readonly value: any) { }

    answeredBy(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.invoke(this.selector, this.assertion, this.value);
    }
}

