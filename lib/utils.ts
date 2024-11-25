export function formatAmount(amount: number) {
  const amountStr = amount.toString();

  const [integerPart, decimalPart] = amountStr.split('.');

  const formattedInteger = integerPart.replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}
