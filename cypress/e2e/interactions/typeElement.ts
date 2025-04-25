import Actor from "cypress/support/actors/actor";
import { UseCypress } from "../abilities/userCypress";
import { Interaction } from "cypress/support/tasks/interaction";

export default class TypeElement implements Interaction {
    constructor(private readonly selector: string, private readonly argument: string) { }

    execute(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.type(this.selector, this.argument);
    }
}
