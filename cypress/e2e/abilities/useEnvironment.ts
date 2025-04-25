import { Ability } from "cypress/support/tasks/ability";
import Actor from "cypress/support/actors/actor";

export class UseEnvironment implements Ability {

    static as(actor: Actor): UseEnvironment {
        return actor.usesAbility(UseEnvironment);
    }

     performAs(actor: Actor): void {
        // Puede ser útil si necesitas configurar algo específico en Cypress
    }

    constructor(private readonly env?: string) {
        this.env = env ?? Cypress.env('ENV') ?? 'DEV';
    }

    baseUrl(): string {
        const config = Cypress.env(this.env);
        if (!config) {
            throw new Error(`No se encontró configuración para el entorno: ${this.env}`);
        }
        return config.baseUrl;
    }
}