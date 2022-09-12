describe('My First Test Suite For Search With Character [CA]', function(){
    it("My First Test Case Of KhanhPPN", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

       // cy.get('.search-keyword').type("ca");
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("ca");
        cy.wait(2000)
        cy.get('div[class=product]:visible').should('have.length',4);
    })
});