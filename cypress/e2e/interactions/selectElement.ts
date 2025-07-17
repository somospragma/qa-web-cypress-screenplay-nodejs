import Actor from "cypress/support/actors/actor";
import { UseCypress } from "../abilities/useCypress";
import { Interaction } from "cypress/support/tasks/interaction";

export default class SelectElement implements Interaction{
    constructor(private readonly selector: string, private readonly i: string) { }

    execute(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.select(this.selector, this.i);
    }
    static option(selector: string, i: string): SelectElement {
        return new SelectElement(selector, i);
    }
}
