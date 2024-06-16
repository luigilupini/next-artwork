describe("navigation test", () => {
  it("passes", () => {
    cy.visit("/")
    cy.get('[data-id="open-sidebar-button"]').wait(1000)
    cy.get('[data-id="open-sidebar-button"]').click()
    cy.get('[data-id="open-sidebar-content"]').should("be.visible")
    cy.get('[data-id="close-sidebar-button"]').click()
    cy.get('[data-id="open-sidebar-content"]').should("not.visible")
    cy.get('[data-id="theme-toggle"]').should("be.visible")
    cy.get('[data-id="theme-toggle"]').click()
    cy.get('[data-id="theme-toggle"]').wait(1000)
    cy.get('[data-id="theme-toggle"]').should("be.visible")
    cy.get('[data-id="theme-toggle"]').click()
  })
})
