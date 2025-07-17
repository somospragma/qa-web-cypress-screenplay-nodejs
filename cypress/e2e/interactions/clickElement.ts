import { Interaction } from "cypress/support/tasks/interaction";
import { UseCypress } from "../abilities/useCypress";

export default class Click implements Interaction {
    constructor(private readonly selector: string) { }

    execute(actor: any): void {
        const cypress = UseCypress.as(actor);
        cypress.click(this.selector);
    }
    static Element(selector: string): Click {
        return new Click(selector);
    }
}
