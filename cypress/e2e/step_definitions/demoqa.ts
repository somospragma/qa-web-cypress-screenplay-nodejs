import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Actor from "cypress/support/actors/actor";
import VisitarPag from "../tasks/visitarPag";
import ClickElement from "../tasks/clickElement";
import { inicio } from "../user_Interfaces/demoqaUi";

const actor = new Actor('Daniel');

Given("Ingresar al portal web demoqa", () => {
    const visitarPag = new VisitarPag(Cypress.env('baseUrl'));
    actor.perform(visitarPag);
});

When("Da click en la seccion de Book Store Application", () => { 
    const clickElement = new ClickElement(inicio.CARD_BOOK_STORE);
    actor.perform(clickElement);
});

Then("Verificar que se muestre la pagina de Login", () => { 
});

When("Digita el userName {string}", (userName) => { });
When("Digita la contraseña {string}", (passw) => { });
When("Da click en el boton de Login", () => { });
Then("Verificar que se muestre la pagina de mi cuenta", () => { });
