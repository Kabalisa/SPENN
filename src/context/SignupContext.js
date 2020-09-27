import createDatacontext from "./createDataContext";

const initialState = {
  user: {
    phonenumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    PIN: "",
  },
  location: { active: true, done: false },
  name: { active: false, done: false },
  security: { active: false, done: false },
};

const signupReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return {
        ...state,
        user: { ...state.user, phonenumber: action.payload },
        location: { active: false, done: true },
        name: { active: true, done: false },
      };
    case "ADD_NAMES":
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload.firstName,
          middleName: action.payload.middleName,
          lastName: action.payload.lastName,
        },
        name: { active: false, done: true },
        security: { active: true, done: false },
      };
    case "RESET_SIGNUP_STATE":
      return { ...initialState };
    default:
      return state;
  }
};

const addLocation = (dispatch) => async (phoneNumber, callback) => {
  await dispatch({ type: "ADD_LOCATION", payload: phoneNumber });
  callback();
};

const addNames = (dispatch) => async (names, callback) => {
  await dispatch({
    type: "ADD_NAMES",
    payload: {
      firstName: names.firstName,
      middleName: names.middleName,
      lastName: names.lastName,
    },
  });
  callback();
};

const resetSignupState = (dispatch) => () =>
  dispatch({ type: "RESET_SIGNUP_STATE" });

export const { Context, Provider } = createDatacontext(
  signupReducer,
  { addLocation, addNames, resetSignupState },
  {
    ...initialState,
  }
);
