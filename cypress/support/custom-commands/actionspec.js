let selector
before(() => {


    cy.fixture('element').then((attri) => {
        selector = attri.userElement

    })
})

Cypress.Commands.add('clickAnElement', (element) => {
    cy.get(element).should('be.visible').and('exist').click()
})

Cypress.Commands.add('typeAText', (textField, text) => {
    cy.get(textField).should('be.visible').type(text)
})

Cypress.Commands.add('progressBar', () => {
    cy.get(selector.progressbarLink).click()
    cy.get(selector.startButton).click()
    cy.get(selector.progressBar)
        .should('have.attr', 'aria-valuenow', '75')
        .invoke('attr', 'aria-valuenow')
        .then((value) => {
            expect(parseInt(value)).to.eq(75);

            cy.get(selector.stopButton).click()
        })
})