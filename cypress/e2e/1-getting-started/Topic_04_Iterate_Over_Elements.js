describe('Test Contact Us Form Via Unit', () => {
    it.only('Navigate to specific product page', () => {
        // cypress code
        cy.visit("https://automationteststore.com/");
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
                cy.log("Index : "+index+ " : " + $el.text());
          });
        });

});