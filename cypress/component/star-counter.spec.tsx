import StarCounter from "@/components/common/star-counter"
import { mount } from "cypress/react18"

describe("StarCounter Component", () => {
  it("should render correct number of stars for a given score", () => {
    const testCases = [
      { score: 10, expectedStars: 1 },
      { score: 25, expectedStars: 2 },
      { score: 50, expectedStars: 3 },
      { score: 80, expectedStars: 4 },
      { score: 120, expectedStars: 5 },
    ]

    testCases.forEach(({ score, expectedStars }) => {
      mount(<StarCounter score={score} />)
      cy.get("svg").should("have.length", expectedStars)
    })
  })
})
