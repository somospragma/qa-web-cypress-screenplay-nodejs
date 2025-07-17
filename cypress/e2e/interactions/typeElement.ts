import Actor from "cypress/support/actors/actor";
import { UseCypress } from "../abilities/useCypress";
import { Interaction } from "cypress/support/tasks/interaction";

export default class TypeElement implements Interaction {
    constructor(private readonly selector: string, private readonly argument: string) { }

    execute(actor: Actor): void {
        const cypress = UseCypress.as(actor);
        cypress.type(this.selector, this.argument);
    }
    static into(selector: string, argument: string): TypeElement {
        return new TypeElement(selector, argument);
    }
}
