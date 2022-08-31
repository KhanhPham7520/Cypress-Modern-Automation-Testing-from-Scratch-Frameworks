
//Cypress - Spec
describe('My First Test Suite For Search With Character [CA]', function(){
    it("My First Test Case Of KhanhPPN", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

       // cy.get('.search-keyword').type("ca");
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("ca");
        cy.get("input[class=search-keyword]").type("Ra");
        cy.wait(2000)
        cy.get('div[class=product]').should('have.length',4);
    })

    // it("My Second Test Case Of KhanhPPN", function () {
    //     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    // })

    // it("Navigate to Facebook website", function () {
    //     cy.visit("https://www.facebook.com/");
    // })
});