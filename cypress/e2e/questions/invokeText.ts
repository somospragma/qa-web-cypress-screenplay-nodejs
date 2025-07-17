import Actor from "cypress/support/actors/actor";
import { Question } from "cypress/support/tasks/question";
import { UseCypress } from "../abilities/useCypress";

export default class InvokeText implements Question {
    private readonly selector: string;
    private readonly assertion: string;
    private readonly value: any;

    constructor( selector: string, assertion: string, value: any) { 
        this.selector = selector;
        this.assertion = assertion;
        this.value = value;
    }

    answeredBy(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.invoke(this.selector, this.assertion, this.value);
    }

    static element(selector: string, assertion: string, value: any): InvokeText {
        return new InvokeText(selector, assertion, value);
    }
}

