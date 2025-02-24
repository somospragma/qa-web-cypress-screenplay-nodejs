import { Interaction } from "cypress/support/tasks/interaction";
import { UseCypress } from "../abilities/userCypress";

export default class ClickElement implements Interaction {
    private readonly selector: string;
 
    constructor(selector: string) {
        this.selector = selector;
    }

    execute(actor: any): void {
        const cypress = UseCypress.as(actor);
        cypress.click(this.selector);
    }
}
