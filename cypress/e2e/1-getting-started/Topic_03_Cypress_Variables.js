describe('Test Contact Us Form Via Unit', () => {
    it.only('Navigate to specific product page', () => {
        // cypress code
        cy.visit("https://automationteststore.com/");
        cy.document().should('have.property','charset').and('eq','UTF-8')

        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

        //following code will fail
        // const productName = cy.get('.productname > span');
        // cy.log(productName.text())

        cy.get('h1 .maintext').then(($headerText)=>{
         const productName = $headerText.text();
         cy.log("Found header text: "+ productName)
        })

    });

    it.only('Validate properties of the Contact Us page', ()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
        cy.contains("#ContactUsFrm","Contact Us Form").then(text => {
            const firstNameText = text.find("#field_11").text();
            expect(firstNameText).to.contain('First name');
        })
    })


});