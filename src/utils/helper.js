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

export function removeDuplicates(duplicate) {
  const flag = {};
  const unique = [];
  duplicate.forEach((elem) => {
    if (!flag[elem.id]) {
      flag[elem.id] = true;
      unique.push(elem);
    }
  });
  return unique;
}
