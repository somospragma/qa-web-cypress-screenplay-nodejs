import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import demoqa_ui from "../userInterfaces/demoqa_ui";
import demoqa_qs from "../questions/demoqa_qs";

Given("Ingresar al portal web demoqa", ()=>{
    cy.visit(Cypress.env('baseUrl'));
});

When('Da click en la seccion de elements', ()=>{
    demoqa_ui.inicio.BNT_ELEMENTS().click();
});

Then('Se debera visualizar todos los elements', ()=>{
    demoqa_qs.seValidaElements();
});