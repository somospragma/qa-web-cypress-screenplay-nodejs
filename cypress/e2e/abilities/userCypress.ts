import Actor from "cypress/support/actors/actor";
import { Ability } from "./Ability";

export class UseCypress implements Ability {
    performAs(actor: any): void {
        // Puede ser útil si necesitas configurar algo específico en Cypress
    }

    static as(actor: Actor): UseCypress {
        return actor.usesAbility(UseCypress);
    }
}
