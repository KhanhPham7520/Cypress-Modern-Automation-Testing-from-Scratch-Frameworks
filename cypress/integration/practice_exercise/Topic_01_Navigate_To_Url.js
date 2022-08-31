describe("My First Test Case", function(){
    it("Navigate to ZingVN website test case", function(){
            cy.visit("https://zingnews.vn/");
    });

    it("Navigate to VnExpress successfully", function(){
        cy.visit("https://vnexpress.net/");
    });
});