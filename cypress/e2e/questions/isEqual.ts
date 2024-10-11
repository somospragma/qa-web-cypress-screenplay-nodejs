import { Question } from "cypress/support/tasks/question";

type PlainObject<T = any> = {
    [key: string]: T;
};

export default class IsEqual implements Question {
    private readonly selector: () => Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(selector: () => Cypress.Chainable<JQuery<HTMLElement>>) {
        this.selector = selector;
    }

    answeredBy(actor: any): Cypress.Chainable<string> {
        return this.selector().invoke('text').then(($val) => {
            const element = $val.trim();
            return element
        });
    }
}

