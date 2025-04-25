import Actor from 'cypress/support/actors/actor';
import { UseCypress } from '../abilities/userCypress';
import { Interaction } from 'cypress/support/tasks/interaction';
import { UseEnvironment } from '../abilities/useEnvironment';

export default class VisitarPag implements Interaction {
    execute(actor: Actor): void {
        const baseUrl = this.selectEnv(actor);
        const cypress = UseCypress.as(actor)
        cypress.visit(baseUrl)
    }

    private selectEnv(actor: Actor): string {
        const env = UseEnvironment.as(actor).baseUrl();
        return env;

    execute(actor: Actor): void {
        const url = this.selectEnv(actor);
        const cypress = UseCypress.as(actor)
        cypress.visit(url);
    }

    private selectEnv (actor: Actor): string {
        const baseUrl = UseEnvironment.as(actor).baseUrl();
        return baseUrl;
    }
}
