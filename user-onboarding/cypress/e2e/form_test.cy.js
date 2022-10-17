describe('Form Test', () => {
    it('Visit Form Page', () => {
        cy.visit("localhost:3000")
        
    });

    it("Test first name", () => {
        cy.get("#fName")
            .type("Manuel")
            .should("have.value", "Manuel");
        
    })

    it("Test last name", () => {
        cy.get("#lName")
            .type("Canas")
            .should("have.value", "Canas");
        
    })

    it("Test email", () => {
        cy.get("#email")
            .type("canasmh@nmsu.edu")
            .should("have.value", "canasmh@nmsu.edu");
    })

    it("Test password", () => {
        cy.get("#password")
            .type("this-is_my-elaborate&password")
            .should("have.value", "this-is_my-elaborate&password");
    })

    it("Test Agreement", () => {
        cy.get("#agree")
            .click().should("be.checked")
    })

    it("Test submit button", () => {
        cy.contains("Submit")
            .click();
    })

    it("Test submission", () => {
        cy.contains("Manuel Canas")
    })
});