export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // Remove after finish develop
  token:
    "BQAqZrhHPhi7tC7aQDYL28rcqi5-GKjE7q0l65DFA9i4lXInk6v3RmduPrZfj8HErpGJN_tbDpLLJKanzJpS2oWPu795PYw2m7RCN8OuG4NuASioQyexb8stH_DR25YL0xX2r-oqeSWkvEELPPcldNlu5l5E1kTcT7Bt1fdpqbGpKT5O51hc",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
