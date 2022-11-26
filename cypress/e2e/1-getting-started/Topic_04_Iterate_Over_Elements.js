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

    it.only('Go to detail of the product [BeneFit Girl Meets Pearl]',()=>{
            cy.visit("https://automationteststore.com/");
            cy.get(".prdocutname").contains("BeneFit Girl Meets Pearl").click();

            cy.get('.side_prd_list > li > .productname').each(($el, index) => {
                cy.log("Index : "+index+ " : " + $el.text());
            });
    });

});