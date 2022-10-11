const initialState = {
  firstName: "",
  surname: "",
  occupation: "developer",
  gender: "male",
  dateOfBirth: new Date("12/31/2004"),
  favouriteColour: "#f44336",
  done: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_firstName":
      return {
        ...state,
        firstName: action.payload,
      };

    case "set_surname":
      return {
        ...state,
        surname: action.payload,
      };

    case "set_occupation":
      return {
        ...state,
        occupation: action.payload,
      };

    case "set_gender":
      return {
        ...state,
        gender: action.payload,
      };

    case "set_dateOfBirth":
      return {
        ...state,
        dateOfBirth: action.payload,
      };

    case "set_favouriteColour":
      return {
        ...state,
        favouriteColour: action.payload,
      };

    case "set_done":
      return {
        ...state,
        done: true,
      };

    default:
      return state;
  }
};

export { reducer, initialState };
