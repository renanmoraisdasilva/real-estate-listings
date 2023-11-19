/**
 * Format a number as currency.
 *
 * @param {number} value - The number to format as currency.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format a date string.
 *
 * @param {string} inputDate - The date string to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(inputDate: string) {
  const date = new Date(inputDate)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }
  return date.toLocaleDateString("en-US", options)
}
