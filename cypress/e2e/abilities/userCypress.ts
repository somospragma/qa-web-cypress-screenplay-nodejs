import Actor from "cypress/support/actors/actor";
import { Ability } from "./Ability";

export class UseCypress implements Ability {

    static as(actor: Actor): UseCypress {
        return actor.usesAbility(UseCypress);
    }

    performAs(actor: Actor): void {
        // Puede ser útil si necesitas configurar algo específico en Cypress
    }
   
    visit(url: string): void {
        cy.visit(url);
    }

    click(selector: string): void {
        cy.get(selector).click();
    }

    type(selector: string, text: string): void {
        cy.get(selector).type(text);
    }

    select(selector: string, i: string): void {
        cy.get(selector).select(i);
    }

    wait(milliseconds: number): void {
        cy.wait(milliseconds);
    }

    should(selector: string, assertion: string, value?: any): void {
        cy.get(selector).should(assertion, value);
    }

    invoke(selector: string, assertion: string, value: any): void {
        cy.get(selector).invoke(assertion).then((texto)=>{
            const title = texto.replace(/\n/g,'').trim();
            expect(title).to.be.equals(value);
        });
    }

}
