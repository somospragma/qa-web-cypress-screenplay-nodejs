class Demoqa {

    inicio = {
        BNT_ELEMENTS: ()=> cy.get('.category-cards > :nth-child(1) > :nth-child(1)')
    }

    elements = {
        LABEL_ELEMENT: ()=> cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-text')
    }

}

export default new Demoqa();
