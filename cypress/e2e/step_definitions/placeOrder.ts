import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePageStringUi } from "../user_Interfaces/homePageUi";
import { registerPageStringUi } from "../user_Interfaces/registerPageUi";
import { checkoutPageStringUi } from "../user_Interfaces/checkoutPageUi";
import { UseCypress } from "../abilities/useCypress";
import { UseEnvironment } from "../abilities/useEnvironment";
import { GenerateRandomData } from "../abilities/generateRandomData";
import { RegisterUser } from "../tasks/registerUser";
import Actor from "cypress/support/actors/actor";
import VisitarPag from "../interactions/visitarPag";
import TypeElement from "../interactions/typeElement";
import Verify from "../questions/verify";
import InvokeText from "../questions/invokeText";
import { RegisterPayment } from "../tasks/registerPayment";
import { headerStringUi } from "../user_Interfaces/headerUi";
import { cartPageStringUi } from "../user_Interfaces/cartPageUi";
import Click from "../interactions/clickElement";
import { ClicElement } from "../tasks/clicElementButton";

const actorQA = new Actor('Usuario de prueba');

actorQA.can(new UseCypress());
actorQA.can(new UseEnvironment());
actorQA.can(new GenerateRandomData());

Given("Launch browser {int} {int}", (width: number, height: number) => {
    cy.viewport(width, height);
 });

When("Navigate to url", () => {
    actorQA.perform(VisitarPag.page());
});

Then("Verify that home page is visible successfully", () => {
    actorQA.asksFor(Verify.element(headerStringUi.LOGO, 'be.visible'))
 });

When("Add products to cart", () => {
    actorQA.attemptsTo(
        Click.Element(homePageStringUi.ADD_CART_PROD1),
        Click.Element(homePageStringUi.PRODUCT_ADDED)
    );
 });

When("Click {string} button", (buttonName: string) => {
    actorQA.perform(ClicElement.button(buttonName));
});

Then("Verify that cart page is displayed", () => {
    actorQA.asksFor(Verify.element(cartPageStringUi.BREAKCRUM, 'be.visible'))
});

When("Fill all details in Signup and create account", () => {
    actorQA.perform(RegisterUser.registerUser());
});

Then("Verify Account Created! {string} and click Continue button", (label: string) => {
    actorQA.asksFor(InvokeText.element(registerPageStringUi.LABEL_ACCOUNT_CREATED, 'text', label))
    actorQA.perform(Click.Element(registerPageStringUi.BTN_CONTINUE));
});

Then("Verify Logged in as username at top", () => {
    actorQA.asksFor(Verify.element(headerStringUi.LOGGED_USERNAME, 'be.visible'))
});

When("Verify Address Details and Review Your Order", () => {
    actorQA.toSee(
        Verify.element(checkoutPageStringUi.CONTENEDOR_DELIVERY_ADDRESS, 'be.visible'),
        Verify.element(checkoutPageStringUi.CONTENEDOR_BILLING_ADDRESS, 'be.visible'),
        Verify.element(checkoutPageStringUi.CONTENEDOR_YOUR_ORDER, 'be.visible')
    );
});

When("Enter description in comment text area and click Place Order", () => {
    actorQA.attemptsTo(
        TypeElement.into(checkoutPageStringUi.TEXT_AREA_COMENTARIO,'Comentario de prueba'),
        Click.Element(checkoutPageStringUi.BTN_PLACE_ORDER)
    );
});

When("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
    actorQA.perform(RegisterPayment.registerPayment());
});

Then("Verify success message {string}", (label: string) => {
    actorQA.asksFor(Verify.element(checkoutPageStringUi.LABEL_SUCCESS, 'be.visible', label));
});

Then("Verify Account Delete! {string} and click Continue button", (label: string) => {
    actorQA.asksFor(Verify.element(homePageStringUi.LABEL_ACCOUNT_DELETED, 'be.visible', label));
    actorQA.perform(Click.Element(homePageStringUi.BTN_CONTINUE));
});
