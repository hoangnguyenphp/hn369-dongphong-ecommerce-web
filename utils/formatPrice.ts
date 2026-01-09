export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  }).format(price);
