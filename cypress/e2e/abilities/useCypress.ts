import Actor from "cypress/support/actors/actor";
import { Ability } from "cypress/support/tasks/ability";

export class UseCypress implements Ability {

    static as(actor: Actor): UseCypress {
        return actor.usesAbility(UseCypress);
    }

    performAs(actor: Actor): void {
        // Puede ser útil si necesitas configurar algo específico en Cypress
    }

    visit(url: string): void {
        cy.visit(url, { timeout: 10000 });
    }

    click(selector: string): void {
        cy.get(selector, {timeout: 2000})
            .should('be.visible')
            .click();
    }

    type(selector: string, text: string): void {
        cy.get(selector, {timeout: 2000})
            .should('be.visible')
            .type(text, {delay:100});
    }

    select(selector: string, i: string): void {
        cy.get(selector, {timeout: 2000})
            .should('be.visible')
            .select(i);
    }

    wait(milliseconds: number): void {
        cy.wait(milliseconds);
    }

    should(selector: string, assertion: string, value?: any): void {
        cy.get(selector, {timeout: 2000} ).should(assertion, value);
    }

    invoke(selector: string, assertion: string, value: any): void {
        cy.get(selector, {timeout: 2000} ).invoke(assertion).then((texto) => {
            const title = texto.replace(/\n/g, '').trim();
            expect(title).to.be.equals(value);
        });
    }

}
