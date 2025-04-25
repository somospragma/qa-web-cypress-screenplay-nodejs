import { Interaction } from "cypress/support/tasks/interaction";
import { UseCypress } from "../abilities/userCypress";

export default class ClickElement implements Interaction {
    constructor(private readonly selector: string) { }

    execute(actor: any): void {
        const cypress = UseCypress.as(actor);
        cypress.click(this.selector);
    }
}
