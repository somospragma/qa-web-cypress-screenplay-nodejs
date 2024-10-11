export const checkoutPage = {
    CONTENEDOR_DELIVERY_ADDRESS: ()=> cy.get('#address_delivery'),
    CONTENEDOR_BILLING_ADDRESS: ()=> cy.get('#address_invoice'),
    CONTENEDOR_YOUR_ORDER: ()=> cy.get('#cart_info'),
    TEXT_AREA_COMENTARIO: ()=> cy.get('.form-control'),
    BTN_PLACE_ORDER: ()=> cy.get(':nth-child(7) > .btn'),
    TEXTBOX_NAMECARD: ()=> cy.get('[data-qa="name-on-card"]'),
    TEXTBOX_CARDNUMBER: ()=> cy.get('[data-qa="card-number"]'),
    TEXTBOX_CARDCVC: ()=> cy.get('[data-qa="cvc"]'),
    TEXTBOX_CARDEXP: ()=> cy.get('[data-qa="expiry-month"]'),
    TEXTBOX_CARDYEAR: ()=> cy.get('[data-qa="expiry-year"]'),
    BTN_PAY: ()=> cy.get('[data-qa="pay-button"]'),
    LABEL_SUCCESS: ()=>  cy.get('.col-sm-9 > p')
}


/*
class CartPage {
    getBreadcrumb() {
        return cy.get('.active');
    }
}

export const cartPage = new CartPage();
*/