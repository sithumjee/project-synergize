import { reducerCases } from "./constants"; // Importing action type constants

// Initial state of the application
export const initialState = {
  userInfo: undefined, // User information
  showLoginModal: false, // Flag to show/hide login modal
  showSignupModal: false, // Flag to show/hide signup modal
  isSeller: false, // Flag to indicate if the user is a seller
  gigData: undefined, // Data related to gigs
  hasOrdered: false, // Flag to indicate if the user has ordered a gig
  reloadReviews: false, // Flag to reload reviews
};

// Reducer function to handle state changes based on action types
const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER: // Action to set user information
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.TOGGLE_LOGIN_MODAL: // Action to toggle login modal visibility
      return {
        ...state,
        showLoginModal: action.showLoginModal,
      };
    case reducerCases.TOGGLE_SIGNUP_MODAL: // Action to toggle signup modal visibility
      return {
        ...state,
        showSignupModal: action.showSignupModal,
      };
    case reducerCases.CLOSE_AUTH_MODAL: // Action to close both login and signup modals
      return {
        ...state,
        showSignupModal: false,
        showLoginModal: false,
      };
    case reducerCases.SWITCH_MODE: // Action to switch between buyer and seller mode
      return {
        ...state,
        isSeller: !state.isSeller,
      };
    case reducerCases.SET_GIG_DATA: // Action to set gig data
      return {
        ...state,
        gigData: action.gigData,
      };
    case reducerCases.HAS_USER_ORDERED_GIG: // Action to set the hasOrdered flag
      return {
        ...state,
        hasOrdered: action.hasOrdered,
      };
    case reducerCases.ADD_REVIEW: // Action to add a new review to the gig data
      return {
        ...state,
        gigData: {
          ...state.gigData,
          reviews: [...state.gigData.reviews, action.newReview],
        },
      };
    default: // Default case to return the current state if action type is not matched
      return state;
  }
};

export default reducer; // Exporting the reducer function as default