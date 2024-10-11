export const homePage = {
    LOGO: () => cy.get('a > img'),
    BTN_HOME: () => cy.get('.shop-menu > .nav > :nth-child(1) > a'),
    BTN_CARD: () => cy.get('.shop-menu > .nav > :nth-child(3) > a'),
    PRODUCT_CARD1: () => cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products'),
    ADD_CART_PROD1: () =>cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'),
    PRODUCT_ADDED: () => cy.get('.modal-footer > .btn'),
    LOGGED_USERNAME: () => cy.get('b'),
    DELETE_ACCOUNT: () => cy.get(':nth-child(5) > a'),
    LABEL_ACCOUNT_DELETED: () => cy.get('[data-qa="account-deleted"]>b'),
    BTN_CONTINUE: () => cy.get('[data-qa="continue-button"]')
}