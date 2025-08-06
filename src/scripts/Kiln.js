export const firePottery = (potteryObject, firingTemperature) => {
  potteryObject.fired = true;
  if (firingTemperature > 2200) {
    potteryObject.cracked = true;
  } else {
    potteryObject.cracked = false;
  }
  return potteryObject;
};
