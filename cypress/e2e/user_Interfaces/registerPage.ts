export const registerPage = {
    RADIOBTN_MR: () => cy.get('#id_gender1'),
    TEXTBOX_PASSW: () => cy.get('[data-qa="password"]'),
    LISTBOX_DAY: () => cy.get('[data-qa="days"]'),
    LISTBOX_MONTH: () => cy.get('[data-qa="months"]'),
    LISTBOX_YEAR: () => cy.get('[data-qa="years"]'),
    TEXTBOX_FIRSTNAME: () => cy.get('[data-qa="first_name"]'),
    TEXTBOX_LASTNAME: () => cy.get('[data-qa="last_name"]'),
    TEXTBOX_COMPANY: () => cy.get('[data-qa="company"]'),
    TEXTBOX_ADDRESS: () => cy.get('[data-qa="address"]'),
    LISTBOX_COUNTRY: () => cy.get('[data-qa="country"]'),
    TEXTBOX_STATE: () => cy.get('[data-qa="state"]'),
    TEXTBOX_CITY: () => cy.get('[data-qa="city"]'),
    TEXTBOX_ZIPCODE: () => cy.get('[data-qa="zipcode"]'),
    TEXTBOX_MOBILENUMBER: () => cy.get('[data-qa="mobile_number"]'),
    BTN_CREATEACCOUNT: () => cy.get('[data-qa="create-account"]'),
    LABEL_ACCOUNT_CREATED: () => cy.get('[data-qa="account-created"]>b'),
    BTN_CONTINUE: () => cy.get('[data-qa="continue-button"]')
}