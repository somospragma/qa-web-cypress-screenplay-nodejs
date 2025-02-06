import Actor from 'cypress/support/actors/actor';
import { Task } from 'cypress/support/tasks/task';
import { UseCypress } from '../abilities/userCypress';

export default class VisitarPag implements Task {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    execute(actor: Actor): void {
        const cypress = UseCypress.as(actor)
        cypress.visit(this.url)
    }
}
