const initialState = {
  count: 0,
};

interface IAction {
  type: string;
  payload: {
    incrementAmount: number;
  };
}

export default function (state = initialState, action: IAction) {
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
