export default class SelectElement {
    private readonly selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>;
    private readonly i: string;
 
    constructor(selector: ()=> Cypress.Chainable<JQuery<HTMLElement>>, i: string) {
        this.selector = selector;
        this.i = i
    }

    execute(actor: any): void {
        this.selector()
        .should('be.visible')
        .select(this.i);
    }
}
