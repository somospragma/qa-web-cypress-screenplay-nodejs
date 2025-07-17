import Actor from 'cypress/support/actors/actor';
import { UseCypress } from '../abilities/useCypress';
import { Interaction } from 'cypress/support/tasks/interaction';
import { UseEnvironment } from '../abilities/useEnvironment';

export default class VisitarPag implements Interaction {

    execute(actor: Actor): void {
        const url = this.selectEnv(actor);
        const cypress = UseCypress.as(actor)
        cypress.visit(url);
    }

    private selectEnv (actor: Actor): string {
        const baseUrl = UseEnvironment.as(actor).baseUrl();
        return baseUrl;
    }
    static page(): VisitarPag {
        return new VisitarPag();
    }
}
