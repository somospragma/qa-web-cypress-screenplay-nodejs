import { Task } from 'cypress/support/tasks/task';

export default class VisitarPag implements Task {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    execute(actor: any): void {
        cy.visit(this.url).wait(1000)
    }
}
