    export const inicio = {
        CARD_ELEMENTS: () => cy.get('.category-cards > :nth-child(1) > :nth-child(1)'),
        CARD_BOOK_STORE: () => cy.get('.category-cards > :nth-child(6) > :nth-child(1)')
    }

    export const elements = {
        LABEL_ELEMENT: () => cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-text')
    }

    export const bookStore = {
        ITEM_LOGIN: () => cy.get(':nth-child(6) > .element-list > .menu-list > #item-0'),
        TEXTBOX_USERNAME: () => cy.get('#userName'),
        TEXTBOX_PASSWORD: () => cy.get('#password'),
        BTN_LOGIN: () => cy.get('#login')
    }
