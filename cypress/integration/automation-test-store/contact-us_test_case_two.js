/// <reference types = "Cypress"/>

let firstNameMsgError = "First name: is required field! Name must be between 3 and 32 characters!"

describe("Test Contact US for via Automation Test Store", () => {
    it("Verify [Skinsheen Bronzer Stick] displayed successfully after navigate from home page ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').contains("Skinsheen Bronzer Stick").click();
        cy.get(".productname").find(".bgnone").should("have.text","Skinsheen Bronzer Stick");
        cy.get(".productname").find(".bgnone").should("include.text","Skinsheen Bronzer Stick");

    });

    it("Verify [Skinsheen Bronzer Stick] displayed successfully after navigate from home page ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').contains("BeneFit Girl Meets Pearl").click();
        cy.get(".productname").find(".bgnone").should("have.text","BeneFit Girl Meets Pearl");
        cy.get(".productname").find(".bgnone").should("include.text","BeneFit Girl Meets Pearl");
        cy.get(".productpagecart").find(".nostock").should("have.text","Out of Stock");
        cy.log("Ok I here")
    });

    it("Verify [Benefit Bella Bamba] displayed successfully after navigate from home page ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').contains("BeneFit Girl Meets Pearl").click();
        

        cy.get('.productname').find(".bgnone").then(($headerText)=>{
            const headerText = $headerText.text();
            cy.log("Found header text : "+headerText)
        });
    });
})



