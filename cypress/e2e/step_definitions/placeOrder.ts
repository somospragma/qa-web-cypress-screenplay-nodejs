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
import ClickElement from "../interactions/clickElement";
import TypeElement from "../interactions/typeElement";
import Verify from "../questions/verify";
import InvokeText from "../questions/invokeText";
import { RegisterPayment } from "../tasks/registerPayment";
import { headerStringUi } from "../user_Interfaces/headerUi";
import { ClicElementButton } from "../tasks/clicElementButton";
import { cartPageStringUi } from "../user_Interfaces/cartPageUi";

const actorQA = new Actor('Usuario de prueba');

actorQA.can(new UseCypress());
actorQA.can(new UseEnvironment());
actorQA.can(new GenerateRandomData());

Given("Launch browser {int} {int}", (width: number, height: number) => {
    cy.viewport(width, height);
 });

When("Navigate to url", () => {
    const visitPag = new VisitarPag();
    visitPag.execute(actorQA);
});

Then("Verify that home page is visible successfully", () => {
    const isVisible = new Verify(headerStringUi.LOGO, 'be.visible');
    isVisible.answeredBy(actorQA);
 });

When("Add products to cart", () => {
    actorQA.attemptsTo(
        new ClickElement(homePageStringUi.ADD_CART_PROD1),
        new ClickElement(homePageStringUi.PRODUCT_ADDED)
    );
 });

When("Click {string} button", (buttonName: string) => {
    actorQA.perform(new ClicElementButton(buttonName));
});

Then("Verify that cart page is displayed", () => {
    const isVisible = new Verify(cartPageStringUi.BREAKCRUM, 'be.visible');
    isVisible.answeredBy(actorQA);
});

When("Fill all details in Signup and create account", () => {
    actorQA.perform(new RegisterUser);
});

Then("Verify Account Created! {string} and click Continue button", (label: string) => {
    const invoke = new InvokeText(registerPageStringUi.LABEL_ACCOUNT_CREATED, 'text', label);
    invoke.answeredBy(actorQA);
    actorQA.perform(new ClickElement(registerPageStringUi.BTN_CONTINUE));
});

Then("Verify Logged in as username at top", () => {
    const isVisible = new Verify(headerStringUi.LOGGED_USERNAME, 'be.visible');
    isVisible.answeredBy(actorQA);
});

When("Verify Address Details and Review Your Order", () => {
    const isVisible1 = new Verify(checkoutPageStringUi.CONTENEDOR_DELIVERY_ADDRESS, 'be.visible');
    isVisible1.answeredBy(actorQA);
    const isVisible2 = new Verify(checkoutPageStringUi.CONTENEDOR_BILLING_ADDRESS, 'be.visible');
    isVisible2.answeredBy(actorQA);
    const isVisible3 = new Verify(checkoutPageStringUi.CONTENEDOR_YOUR_ORDER, 'be.visible');
    isVisible3.answeredBy(actorQA);
});

When("Enter description in comment text area and click Place Order", () => {
    actorQA.attemptsTo(
        new TypeElement(checkoutPageStringUi.TEXT_AREA_COMENTARIO,'Comentario de prueba'),
        new ClickElement(checkoutPageStringUi.BTN_PLACE_ORDER)
    );
});

When("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
    actorQA.perform(new RegisterPayment);
});

Then("Verify success message {string}", (label: string) => {
    const invoke = new InvokeText(checkoutPageStringUi.LABEL_SUCCESS, 'text', label);
    invoke.answeredBy(actorQA);
});

Then("Verify Account Delete! {string} and click Continue button", (label: string) => {
    const invoke = new InvokeText(homePageStringUi.LABEL_ACCOUNT_DELETED, 'text', label);
    invoke.answeredBy(actorQA);
    actorQA.perform(new ClickElement(homePageStringUi.BTN_CONTINUE));
});
