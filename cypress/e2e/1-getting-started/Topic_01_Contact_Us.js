describe('Test Contact Us Form Via Unit', () => {
    it('Should navigate to WebDriver Uni Successfully', () => {
        // cypress code
        cy.visit("http://www.webdriveruniversity.com/");
        cy.document().should('have.property','charset').and('eq','UTF-8')
    });


    it('Should be able to submit a successful submission via contact us form as all field was required', () => {
        // cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.get("input[name='first_name']").type("Nhat Khanh");
        cy.get("input[name='last_name']").type("pham phan");
        cy.get("[name='email']").type("phamphan@gmail.com");
        cy.get("[name='message']").type("Note description");
        cy.get(".contact_button").contains("SUBMIT").click();
        cy.get("#contact_reply > h1").contains("Thank You for your Message!").should("be.visible");
    });

    it('Should be able to submit a successful submission via contact us form as all field was invalid', () => {
        // cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.get("input[name='first_name']").type("Nhat Khanh");
        cy.get("input[name='last_name']").type("pham phan");
        cy.get("[name='message']").type("Note description");
        cy.get(".contact_button").contains("SUBMIT").click();
        cy.get("body").contains("Error: all fields are required");
        cy.log("Test has complete")
    });
});