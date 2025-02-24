import Actor from 'cypress/support/actors/actor';
import { UseCypress } from '../abilities/userCypress';
import { Interaction } from 'cypress/support/tasks/interaction';

export default class VisitarPag implements Interaction {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    execute(actor: Actor): void {
        const cypress = UseCypress.as(actor)
        cypress.visit(this.url)
    }
}
