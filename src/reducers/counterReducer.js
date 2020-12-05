const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_COUNTER_AMOUNT":
      const { incrementAmount } = action.payload;
      return {
        ...state,
        count: state.count + incrementAmount,
      };

    default:
      return state;
  }
}
