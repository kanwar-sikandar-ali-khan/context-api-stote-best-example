
const switchReducer = (state, action) => {
    switch (action.type) {
      case "changeNumber":
        return { ...state, number: action.numberInc };
    }
  };

  export default switchReducer