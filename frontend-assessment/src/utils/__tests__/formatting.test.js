// Import necessary functions from vitest
import { describe, it, expect } from "vitest"
import { formatCurrency, formatDate } from "../formatting"

describe("Utility Functions", () => {
  it("formats currency correctly", () => {
    const result = formatCurrency(1000)
    expect(result).toBe("$1,000")
  })

  it("formats date correctly", () => {
    const result = formatDate("2023-11-19 10:00:00")
    expect(result).toBe("Nov 19, 2023")
  })
})
