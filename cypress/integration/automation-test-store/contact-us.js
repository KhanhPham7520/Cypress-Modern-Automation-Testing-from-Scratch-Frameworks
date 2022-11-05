/// <reference types = "Cypress"/>

let firstNameMsgError = "First name: is required field! Name must be between 3 and 32 characters!"

describe("Test Contact US for via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.document().should("have.property","charset").and('eq','UTF-8')
        cy.get('a').contains("Contact Us").click();
        cy.get("input[id='ContactUsFrm_first_name']").type("Pham Phan Nhat Khanh")
        cy.get("input[id='ContactUsFrm_email']").type("a@gmail.com")
        cy.get("textarea[id='ContactUsFrm_enquiry']").type("Do you send me accout for paid order ?")
        cy.get("button[title='Submit']").click();
        cy.get("p").contains("Your enquiry has been successfully sent to the store owner!")
        .should('have.text','Your enquiry has been successfully sent to the store owner!')
    });

    it("Should not be able to submit a successful submission via contact us form", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('a').contains("Contact Us").click();
        cy.get("button[title='Submit']").click();

        cy.get("div").contains(firstNameMsgError).should("have.text",
        firstNameMsgError)
    })
})



