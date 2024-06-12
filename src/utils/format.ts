/** 숫자 3자리 단위로 콤마 (ex. 1000 -> 1,000) */
export const formatNumber = (number: number): string => {
  return number.toLocaleString();
};
