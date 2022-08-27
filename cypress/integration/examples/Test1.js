//Cypress - Spec
describe('My First Test Suite', function(){
    it("My First Test Case Of KhanhPPN", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
    })

    it("My Second Test Case Of KhanhPPN", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    })
});