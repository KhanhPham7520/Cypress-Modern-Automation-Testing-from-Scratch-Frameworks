describe("Assertion For Search With Specific Character", function(){

    it("1. Search Character With Character [Ra]", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[class=search-keyword]").type("Ra");
        cy.wait(2000)
        cy.get("div[class=product]").should("have.length",5);
    });

    it("2. Search Characte With Character [Or]", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[class=search-keyword]").type("Or");
        cy.get("div[class=product]").should("have.length",2);
     });

});