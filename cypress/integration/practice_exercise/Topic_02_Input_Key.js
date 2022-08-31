
describe("Demo Test Case Input Key For Textbox", function(){
    it("Navigate to Sauce Demo Site", function(){
        cy.visit("https://saucedemo.com/");
    });

    it("Login successfull with Standard user account", function(){
        cy.get("#user-name").type("standard_user");
        cy.get("input[placeholder='Password']").type("secret_sauce");
        cy.get("#login-button").click;
    });
});