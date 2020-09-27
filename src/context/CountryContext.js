import createDatacontext from "./createDataContext";
import { countryData } from "../utils/data/countryData";

const countryReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE":
      let newArr = [];
      let newArr2 = [];

      newArr = state.countries.map((country) => {
        if (country.id === action.payload) {
          return { ...country, active: true };
        }
        return {
          ...country,
          active: false,
          choosen: false,
          choosenCountry: null,
        };
      });

      if (state.searching) {
        newArr2 = state.searchedCountries.map((country) => {
          if (country.id === action.payload) {
            return { ...country, active: true };
          }
          return {
            ...country,
            active: false,
            choosen: false,
            choosenCountry: null,
          };
        });
      }

      return {
        ...state,
        countries: newArr,
        searchedCountries: newArr2,
        choosenCountry: null,
      };

    case "CHOOSE_COUNTRY":
      let arr = [];
      let choosenCountry;

      arr = state.countries.map((country) => {
        if (country.id === action.payload) {
          choosenCountry = { ...country, choosen: true };
          return choosenCountry;
        }
        return country;
      });
      return { countries: arr, choosenCountry, searching: false };

    case "SEARCH":
      let filteredArr = [];

      if (!action.payload) {
        return {
          ...state,
          searching: true,
          searchedCountries: state.countries,
        };
      }

      filteredArr = state.countries.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, searching: true, searchedCountries: filteredArr };

    case "CLEAR_SEARCH":
      return { ...state, searching: false };

    case "RESET_STATE":
      return {
        countries: countryData,
        choosenCountry: null,
        searching: false,
        searchedCountries: [],
      };

    case "CHOOSE_CURRENCY":
      return {
        ...state,
        choosenCountry: { ...state.choosenCountry, currency: action.payload },
      };

    default:
      return state;
  }
};

const activateCountry = (dispatch) => (id) =>
  dispatch({ type: "ACTIVATE", payload: id });

const chooseCountry = (dispatch) => async (id, callback) => {
  await dispatch({ type: "CHOOSE_COUNTRY", payload: id });
  callback();
};

const searchCountries = (dispatch) => (country) =>
  dispatch({ type: "SEARCH", payload: country });

const clearSearch = (dispatch) => () => dispatch({ type: "CLEAR_SEARCH" });

const resetState = (dispatch) => () => dispatch({ type: "RESET_STATE" });

const chooseCurrency = (dispatch) => async (currency, callback) => {
  await dispatch({ type: "CHOOSE_CURRENCY", payload: currency });
  callback();
};

export const { Context, Provider } = createDatacontext(
  countryReducer,
  {
    activateCountry,
    chooseCountry,
    searchCountries,
    clearSearch,
    resetState,
    chooseCurrency,
  },
  {
    countries: countryData,
    choosenCountry: null,
    searching: false,
    searchedCountries: [],
  }
);
