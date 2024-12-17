import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePageUi } from "../user_Interfaces/homePageUi";
import { cartPageUi } from "../user_Interfaces/cartPageUi";
import { registerPageUi } from "../user_Interfaces/registerPageUi";
import { checkoutPageUi } from "../user_Interfaces/checkoutPageUi";
import { UseCypress } from "../abilities/userCypress";
import { GenerateRandomData } from "../abilities/generateRandomData";
import Actor from "cypress/support/actors/actor";
import VisitarPag from "../tasks/visitarPag";
import IsVisible from "../questions/isVisible";
import ClickElement from "../Interactions/clickElement";
import TypeElement from "../Interactions/typeElement";
import IsEqual from "../questions/isEqual";
import { RegisterUser } from "../tasks/registerUser";

const actorQA = new Actor('Usuario de prueba');

actorQA.can(new UseCypress());
actorQA.can(new GenerateRandomData());

Given("Launch browser", () => {
    cy.viewport(1280, 720);
 });

When("Navigate to url {string}", (url: string) => {
    actorQA.perform(new VisitarPag(url));
});

Then("Verify that home page is visible successfully", () => {
    actorQA.asksFor(new IsVisible(homePageUi.LOGO)).then((isVisible: boolean) => {
        expect(isVisible).to.be.true;
    });
 });

When("Add products to cart", () => {
    actorQA.attemptsTo(
        new ClickElement(homePageUi.ADD_CART_PROD1),
        new ClickElement(homePageUi.PRODUCT_ADDED)
    );
 });

When("Click Cart button", () => {
    actorQA.perform(new ClickElement(homePageUi.BTN_CARD));
});

Then("Verify that cart page is displayed", () => {
    actorQA.asksFor(new IsVisible(cartPageUi.BREAKCRUM)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
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
    actorQA.asksFor(new IsEqual(registerPageUi.LABEL_ACCOUNT_CREATED)).then((isEqual: string) =>{
        expect(isEqual).to.be.equal(label);
    });
    actorQA.perform(new ClickElement(registerPageUi.BTN_CONTINUE));
});

Then("Verify Logged in as username at top", () => {
    actorQA.asksFor(new IsVisible(homePageUi.LOGGED_USERNAME)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
});

When("Verify Address Details and Review Your Order", () => {
    actorQA.asksFor(new IsVisible(checkoutPageUi.CONTENEDOR_DELIVERY_ADDRESS)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
    actorQA.asksFor(new IsVisible(checkoutPageUi.CONTENEDOR_BILLING_ADDRESS)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
    actorQA.asksFor(new IsVisible(checkoutPageUi.CONTENEDOR_YOUR_ORDER)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
});

When("Enter description in comment text area and click Place Order", () => {
    actorQA.attemptsTo(
        new TypeElement(checkoutPageUi.TEXT_AREA_COMENTARIO,'Comentario de prueba'),
        new ClickElement(checkoutPageUi.BTN_PLACE_ORDER)
    );
});

When("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
    actorQA.attemptsTo(
        new TypeElement(checkoutPageUi.TEXTBOX_NAMECARD,'NombrePrueba'),
        new TypeElement(checkoutPageUi.TEXTBOX_CARDNUMBER,'5245655855'),
        new TypeElement(checkoutPageUi.TEXTBOX_CARDCVC,'123'),
        new TypeElement(checkoutPageUi.TEXTBOX_CARDEXP,'02'),
        new TypeElement(checkoutPageUi.TEXTBOX_CARDYEAR,'2020'),
    );
});

When("Click Pay and Confirm Order button", () => {
    actorQA.perform(new ClickElement(checkoutPageUi.BTN_PAY));
});

Then("Verify success message {string}", (label: string) => {
    actorQA.asksFor(new IsEqual(checkoutPageUi.LABEL_SUCCESS)).then((isEqual: string)=>{
        expect(isEqual).to.be.equal(label);
    });
});

When("Click Delete Account button", () => {
    actorQA.perform(new ClickElement(homePageUi.DELETE_ACCOUNT));
});

Then("Verify Account Delete! {string} and click Continue button", (label: string) => {
    actorQA.asksFor(new IsEqual(homePageUi.LABEL_ACCOUNT_DELETED)).then((isEqual: string) =>{
        expect(isEqual).to.be.equal(label);
    });
    actorQA.perform(new ClickElement(homePageUi.BTN_CONTINUE));
});

