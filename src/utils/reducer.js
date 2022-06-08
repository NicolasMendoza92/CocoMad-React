export const initialState = {
    shippingData: [],
  };

  export const actionTypes = {
    SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
    SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
  };

  
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_SHIPPINGDATA":
        return {
          ...state,
          shippingData: action.shippingData,
        };
      case "SET_PAYMENT_MESSAGE":
        return {
          ...state,
          paymentMessage: action.paymentMessage,
        };
      default:
        return state;
    }
  };
  
  export default reducer;