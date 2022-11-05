/// <reference types = "Cypress"/>

describe("Test Contact US for via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
       // cy.get('#contact-us').click({force : true})
       // cy.get("input[placeholder='First Name']").type("Pham Phan")
       cy.get("[name='first_name']").type("Pham Phan")
       cy.get("[name='last_name']").type("Nhat Khanh")
       cy.get("[name='email']").type("khanh@gmail.com")
       cy.get("[name='message']").type("Automation Testing Note")
       cy.get("[value='SUBMIT']").click()
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get("[name='first_name']").type("Pham Phan")
        cy.get("[value='SUBMIT']").click()
        
    })
})