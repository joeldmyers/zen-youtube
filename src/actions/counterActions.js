export const updateCounterAmount = (incrementAmount) => {
  console.log("fired update counter", incrementAmount);
  return {
    type: "UPDATE_COUNTER_AMOUNT",
    payload: {
      incrementAmount,
    },
  };
};
