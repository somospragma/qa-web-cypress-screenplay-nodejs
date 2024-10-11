export const cartPage = {
    BREAKCRUM: ()=> cy.get('.active'),
    BTN_CHEKOUT: ()=> cy.get('.col-sm-6 > .btn'),
    LINK_REGISTER: ()=> cy.get('.modal-body > :nth-child(2) > a > u')
}


/*
class CartPage {
    getBreadcrumb() {
        return cy.get('.active');
    }
}

export const cartPage = new CartPage();
*/