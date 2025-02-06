import Actor from "cypress/support/actors/actor";

export interface Ability {
    performAs(actor: Actor): void;
}
