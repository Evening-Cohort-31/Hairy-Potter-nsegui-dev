let potteryToSell = [];

export const toSellOrNotToSell = (potteryObject) => {
  if (!potteryObject.cracked) {
    if (potteryObject.weight >= 6) {
      potteryObject.price = 40;
    } else {
      potteryObject.price = 20;
    }
    potteryToSell.push(potteryObject);
  }
  return potteryObject;
};

export const usePottery = () => {
  return structuredClone(potteryToSell);
};
