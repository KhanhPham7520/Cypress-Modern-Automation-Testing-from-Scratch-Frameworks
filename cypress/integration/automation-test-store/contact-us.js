/// <reference types = "Cypress"/>

describe("Test Contact US for via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a').contains("Contact Us").click();
        cy.get("input[id='ContactUsFrm_first_name']").type("Pham Phan Nhat Khanh")
        cy.get("input[id='ContactUsFrm_email']").type("a@gmail.com")
        cy.get("textarea[id='ContactUsFrm_enquiry']").type("Do you send me accout for paid order ?")
        cy.get("button[title='Submit']").click();
    });
})

