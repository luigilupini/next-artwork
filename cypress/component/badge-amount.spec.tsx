import BadgeAmount from "@/components/common/badge-amount"
import { mount } from "cypress/react18"

describe("BadgeAmount Component", () => {
  it("should render correctly with amount", () => {
    mount(<BadgeAmount amount={5} />)
    cy.get(".bg-primary.text-primary-foreground")
      .should("exist")
      .and("contain.text", "5")
  })

  it("should not render with zero amount", () => {
    mount(<BadgeAmount amount={0} />)
    cy.get(".bg-primary.text-primary-foreground").should("not.exist")
  })

  it("should animate correctly", () => {
    mount(<BadgeAmount amount={5} />)
    cy.get(".bg-primary.text-primary-foreground").should(
      "have.css",
      "transform",
    )
  })
})
