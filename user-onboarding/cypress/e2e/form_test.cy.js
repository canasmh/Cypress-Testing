describe('Form Test', () => {
    it('Visit Form Page', () => {
        cy.visit("localhost:3000")
        
    });

    it("Test first name", () => {
        cy.get("#fName")
            .type("Manuel")
            .should("have.value", "Manuel");
    })
});