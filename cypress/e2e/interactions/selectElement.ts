import Actor from "cypress/support/actors/actor";
import { UseCypress } from "../abilities/userCypress";
import { Interaction } from "cypress/support/tasks/interaction";

export default class SelectElement implements Interaction{
    private readonly selector: string;
    private readonly i: string;
 
    constructor(selector: string, i: string) {
        this.selector = selector;
        this.i = i
    }

    execute(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.select(this.selector, this.i);
    }
}
