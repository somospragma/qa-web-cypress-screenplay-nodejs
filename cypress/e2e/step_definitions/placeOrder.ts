import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePageStringUi } from "../user_Interfaces/homePageUi";
import { cartPageUi } from "../user_Interfaces/cartPageUi";
import { registerPageStringUi } from "../user_Interfaces/registerPageUi";
import { checkoutPageStringUi } from "../user_Interfaces/checkoutPageUi";
import { UseCypress } from "../abilities/userCypress";
import { GenerateRandomData } from "../abilities/generateRandomData";
import { RegisterUser } from "../tasks/registerUser";
import Actor from "cypress/support/actors/actor";
import VisitarPag from "../interactions/visitarPag";
import ClickElement from "../interactions/clickElement";
import TypeElement from "../interactions/typeElement";
import Verify from "../questions/verify";
import InvokeText from "../questions/invokeText";

const actorQA = new Actor('Usuario de prueba');

actorQA.can(new UseCypress());
actorQA.can(new GenerateRandomData());

Given("Launch browser {int} {int}", (width: number, height: number) => {
    cy.viewport(width, height);
 });

When("Navigate to url {string}", (url: string) => {
    const visitPag = new VisitarPag(url);
    visitPag.execute(actorQA);
});

Then("Verify that home page is visible successfully", () => {
    const isVisible = new Verify(homePageStringUi.LOGO, 'be.visible');
    isVisible.answeredBy(actorQA);
 });

When("Add products to cart", () => {
    actorQA.attemptsTo(
        new ClickElement(homePageStringUi.ADD_CART_PROD1),
        new ClickElement(homePageStringUi.PRODUCT_ADDED)
    );
 });

When("Click Cart button", () => {
    actorQA.perform(new ClickElement(homePageStringUi.BTN_CARD));
});

Then("Verify that cart page is displayed", () => {
    const isVisible = new Verify(cartPageUi.BREAKCRUM, 'be.visible');
    isVisible.answeredBy(actorQA);
});

When("Click Proceed To Checkout button", () => {
    actorQA.perform(new ClickElement(cartPageUi.BTN_CHEKOUT));
});

When("Click Register Login button", () => {
    actorQA.perform(new ClickElement(cartPageUi.LINK_REGISTER));
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
    const isVisible = new Verify(homePageStringUi.LOGGED_USERNAME, 'be.visible');
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
    actorQA.attemptsTo(
        new TypeElement(checkoutPageStringUi.TEXTBOX_NAMECARD,'NombrePrueba'),
        new TypeElement(checkoutPageStringUi.TEXTBOX_CARDNUMBER,'5245655855'),
        new TypeElement(checkoutPageStringUi.TEXTBOX_CARDCVC,'123'),
        new TypeElement(checkoutPageStringUi.TEXTBOX_CARDEXP,'02'),
        new TypeElement(checkoutPageStringUi.TEXTBOX_CARDYEAR,'2020'),
    );
});

When("Click Pay and Confirm Order button", () => {
    actorQA.perform(new ClickElement(checkoutPageStringUi.BTN_PAY));
});

Then("Verify success message {string}", (label: string) => {
    const invoke = new InvokeText(checkoutPageStringUi.LABEL_SUCCESS, 'text', label);
    invoke.answeredBy(actorQA);
});

When("Click Delete Account button", () => {
    actorQA.perform(new ClickElement(homePageStringUi.DELETE_ACCOUNT));
});

Then("Verify Account Delete! {string} and click Continue button", (label: string) => {
    const invoke = new InvokeText(homePageStringUi.LABEL_ACCOUNT_DELETED, 'text', label);
    invoke.answeredBy(actorQA);
    actorQA.perform(new ClickElement(homePageStringUi.BTN_CONTINUE));
});
