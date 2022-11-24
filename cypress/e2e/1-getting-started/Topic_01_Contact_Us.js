describe('Test Contact Us Form Via Unit', () => {
    it('Should navigate to WebDriver Uni Successfully', () => {
        // cypress code
        cy.visit("http://www.webdriveruniversity.com/");
     
    });


    it('Should be able to submit a successful submission via contact us form as all field was required', () => {
        // cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    });
});