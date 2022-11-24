describe('Test Contact Us Form Via Unit', () => {
    it('Should navigate to Automation Test Store Successfully', () => {
        // cypress code
        cy.visit("https://automationteststore.com/");
        cy.document().should('have.property','charset').and('eq','UTF-8')
    });

    it('Go to detail of the product [Skinsheen Bronzer Stick]', () => {
        // cypress code
        cy.visit("https://automationteststore.com/");
        cy.get('a').contains('Skinsheen Bronzer Stick').click().then(function (itemHeader) {
            cy.log("Selected the following item: "+ itemHeader.text());
        });
    });

});