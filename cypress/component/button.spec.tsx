import { Button } from "@/components/common/button"

// Cypress Component Test
describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button>Click Me!</Button>)
    cy.get("button").should("exist")
    cy.get("button").click()
  })
})
