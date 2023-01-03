export function increDecre(num, incrementOr) {
  return incrementOr ? num + 1 : num - 1;
}
export function caclDescount(price, descount) {
  return price - ((price * descount) / 100).toString();
}
export function calcPriceTotal(price, count) {
  const result = parseFloat(price) * parseInt(count);
  return result.toFixed(2);
}
