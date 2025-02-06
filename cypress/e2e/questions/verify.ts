import Actor from "cypress/support/actors/actor";
import { Question } from "cypress/support/tasks/question";
import { UseCypress } from "../abilities/userCypress";

export default class Verify implements Question {
    private readonly selector: string;
    private readonly assertion: string;
    private readonly value?: any;

    constructor(selector: string, assertion: string, value?: any) {
        this.selector = selector;
        this.assertion = assertion;
        this.value = value;
    }

    answeredBy(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.should(this.selector, this.assertion, this.value);
    }
}

