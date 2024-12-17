export default class ClickElement {
    private readonly selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>;
 
    constructor(selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>) {
        this.selector = selector;
    }

    execute(actor: any): void {
        this.selector()
        .should('be.visible')
        .click();
    }
}
