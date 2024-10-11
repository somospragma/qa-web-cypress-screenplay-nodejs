import { Question } from "cypress/support/tasks/question";

export default class IsVisible implements Question {
    private readonly selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>) {
        this.selector = selector;
    }

    answeredBy(actor: any): Cypress.Chainable<boolean> {
        return this.selector().then(($val)=>{
            return $val.is(':visible');
        });
    }
}

