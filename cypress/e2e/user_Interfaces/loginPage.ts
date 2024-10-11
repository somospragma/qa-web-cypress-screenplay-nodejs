export const loginPage = {
    TEXTBOX_EMAIL_ADDRESS_LOGIN: ()=> cy.get('.modal-body > :nth-child(2) > a > u'),
    TEXTBOX_PASSW: ()=> cy.get('[data-qa="login-password"]'),
    BTN_LOGIN: ()=> cy.get('[data-qa="login-button"]'),
    TEXTBOX_NAME: ()=> cy.get('[data-qa="signup-name"]'),
    TEXTBOX_EMAIL_ADDRESS_SIGNUP: ()=>cy.get('[data-qa="signup-email"]'),
    BTN_SIGNUP: ()=> cy.get('[data-qa="signup-button"]')
}