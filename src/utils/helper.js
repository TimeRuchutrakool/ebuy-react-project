export function formatCurrency(value) {
  return new Intl.NumberFormat("th", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(value);
}

export function formatDate(value) {
  return new Intl.DateTimeFormat("th", {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(value);
}
