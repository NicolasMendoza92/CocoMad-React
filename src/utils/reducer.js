export const initialState = {
    shippingData: {},
    contactData: {}, 
    purchaseData: {},
  };

  export const actionTypes = {
    SET_CONTACTDATA: "SET_CONTACTDATA",
    SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
    SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
    SET_BUYDATA: "SET_BUYDATA",
  };

  
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_SHIPPINGDATA":
        return {
          ...state,
          shippingData: action.shippingData,
        };
        case "SET_CONTACTDATA":
          return {
            ...state,
            contactData: action.contactData,
          };
      case "SET_PAYMENT_MESSAGE":
        return {
          ...state,
          paymentMessage: action.paymentMessage,
        };
        case "SET_BUYDATA":
          return {
            ...state,
            purchaseData: action.purchaseData,
          };
      default:
        return state;
    }
  };
  
  export default reducer;