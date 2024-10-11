import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../user_Interfaces/homePageUi";
import { cartPage } from "../user_Interfaces/cartPage";
import { loginPage } from "../user_Interfaces/loginPage";
import { registerPage } from "../user_Interfaces/registerPage";
import { checkoutPage } from "../user_Interfaces/checkoutPage";
import Actor from "cypress/support/actors/actor";
import VisitarPag from "../tasks/visitarPag";
import IsVisible from "../questions/isVisible";
import ClickElement from "../tasks/clickElement";
import TypeElement from "../tasks/typeElement";
import IsEqual from "../questions/isEqual";
import SelectElement from "../tasks/selectElement";

const actor = new Actor('UsuarioQA');

Given("Launch browser", () => {
    cy.viewport(1280, 720);
 });

When("Navigate to url {string}", (url: string) => {
    const visitarPag = new VisitarPag(url);
    actor.perform(visitarPag);
});

Then("Verify that home page is visible successfully", () => {
    actor.asksFor(new IsVisible(homePage.LOGO)).then((isVisible: boolean) => {
        expect(isVisible).to.be.true;
    });
 });

When("Add products to cart", () => {
    actor.attemptsTo(
        new ClickElement(homePage.ADD_CART_PROD1),
        new ClickElement(homePage.PRODUCT_ADDED)
    );
 });

When("Click Cart button", () => {
    const clickElement = new ClickElement(homePage.BTN_CARD);
    actor.perform(clickElement);
});

Then("Verify that cart page is displayed", () => {
    actor.asksFor(new IsVisible(cartPage.BREAKCRUM)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
});

When("Click Proceed To Checkout button", () => {
    const clickElement = new ClickElement(cartPage.BTN_CHEKOUT);
    actor.perform(clickElement);
});

When("Click Register Login button", () => {
    const clickElement = new ClickElement(cartPage.LINK_REGISTER);
    actor.perform(clickElement);
});

When("Fill all details in Signup and create account", () => {
    actor.attemptsTo(
        new TypeElement(loginPage.TEXTBOX_NAME,'usuarioPrueba'),
        new TypeElement(loginPage.TEXTBOX_EMAIL_ADDRESS_SIGNUP,`email.random.aut${Cypress._.random(1000, 9999)}@pragma.com`),
        new ClickElement(loginPage.BTN_SIGNUP),
        new ClickElement(registerPage.RADIOBTN_MR),
        new TypeElement(registerPage.TEXTBOX_PASSW,'123456Aa*'),
        new SelectElement(registerPage.LISTBOX_DAY, '1'),
        new SelectElement(registerPage.LISTBOX_MONTH, '5'),
        new SelectElement(registerPage.LISTBOX_YEAR, '1987'),
        new TypeElement(registerPage.TEXTBOX_FIRSTNAME,'Prueba'),
        new TypeElement(registerPage.TEXTBOX_LASTNAME,'QaPragma'),
        new TypeElement(registerPage.TEXTBOX_COMPANY,'EmpresaPrueba'),
        new TypeElement(registerPage.TEXTBOX_ADDRESS,'Direccion Prueba'),
        new SelectElement(registerPage.LISTBOX_COUNTRY, 'Canada'),
        new TypeElement(registerPage.TEXTBOX_STATE,'EstadoPrueba'),
        new TypeElement(registerPage.TEXTBOX_CITY,'CiudadPrueba'),
        new TypeElement(registerPage.TEXTBOX_ZIPCODE,'zip12345'),
        new TypeElement(registerPage.TEXTBOX_MOBILENUMBER,'3213213232'),
        new ClickElement(registerPage.BTN_CREATEACCOUNT)
    );
});

Then("Verify Account Created! {string} and click Continue button", (label: string) => {
    actor.asksFor(new IsEqual(registerPage.LABEL_ACCOUNT_CREATED)).then((isEqual: string) =>{
        expect(isEqual).to.be.equal(label);
    });
    actor.perform(new ClickElement(registerPage.BTN_CONTINUE));
});

Then("Verify Logged in as username at top", () => {
    actor.asksFor(new IsVisible(homePage.LOGGED_USERNAME)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
});

When("Verify Address Details and Review Your Order", () => {
    actor.asksFor(new IsVisible(checkoutPage.CONTENEDOR_DELIVERY_ADDRESS)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
    actor.asksFor(new IsVisible(checkoutPage.CONTENEDOR_BILLING_ADDRESS)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
    actor.asksFor(new IsVisible(checkoutPage.CONTENEDOR_YOUR_ORDER)).then((isVisible: boolean) =>{
        expect(isVisible).to.be.true;
    });
});

When("Enter description in comment text area and click Place Order", () => {
    actor.attemptsTo(
        new TypeElement(checkoutPage.TEXT_AREA_COMENTARIO,'Comentario de prueba'),
        new ClickElement(checkoutPage.BTN_PLACE_ORDER)
    );
});

When("Enter payment details: Name on Card, Card Number, CVC, Expiration date", () => {
    actor.attemptsTo(
        new TypeElement(checkoutPage.TEXTBOX_NAMECARD,'NombrePrueba'),
        new TypeElement(checkoutPage.TEXTBOX_CARDNUMBER,'5245655855'),
        new TypeElement(checkoutPage.TEXTBOX_CARDCVC,'123'),
        new TypeElement(checkoutPage.TEXTBOX_CARDEXP,'02'),
        new TypeElement(checkoutPage.TEXTBOX_CARDYEAR,'2020'),
    );
});

When("Click Pay and Confirm Order button", () => {
    actor.perform(new ClickElement(checkoutPage.BTN_PAY));
});

Then("Verify success message {string}", (label: string) => {
    actor.asksFor(new IsEqual(checkoutPage.LABEL_SUCCESS)).then((isEqual: string)=>{
        expect(isEqual).to.be.equal(label);
    });
});

When("Click Delete Account button", () => {
    actor.perform(new ClickElement(homePage.DELETE_ACCOUNT));
});

Then("Verify Account Delete! {string} and click Continue button", (label: string) => {
    actor.asksFor(new IsEqual(homePage.LABEL_ACCOUNT_DELETED)).then((isEqual: string) =>{
        expect(isEqual).to.be.equal(label);
    });
    actor.perform(new ClickElement(homePage.BTN_CONTINUE));
});

