import Cookies from "js-cookie";

const findCookie = (cookieName, defaultValue) => {
  const found = Cookies.get(cookieName);
  return found ? found : defaultValue;
};

export const initialState = {
  firstName: findCookie("firstName", ""),
  surname: findCookie("surname", ""),
  occupation: findCookie("occupation", "developer"),
  gender: findCookie("gender", "male"),
  dateOfBirth: new Date("12/31/2004"),
  favouriteColour: findCookie("favouriteColour", "#f44336"),
  done: Boolean(findCookie("done", false)),
};

const logout = () => {
  Cookies.remove("firstName");
  Cookies.remove("surname");
  Cookies.remove("occupation");
  Cookies.remove("gender");
  Cookies.remove("favouriteColour");
  Cookies.remove("done");

  return { ...initialState };
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "set_firstName": {
      Cookies.set("firstName", payload);

      return {
        ...state,
        firstName: payload,
      };
    }

    case "set_surname": {
      Cookies.set("surname", payload);

      return {
        ...state,
        surname: payload,
      };
    }

    case "set_occupation": {
      Cookies.set("occupation", payload);

      return {
        ...state,
        occupation: payload,
      };
    }

    case "set_gender": {
      Cookies.set("gender", payload);

      return {
        ...state,
        gender: payload,
      };
    }

    case "set_dateOfBirth": {
      return {
        ...state,
        dateOfBirth: payload,
      };
    }

    case "set_favouriteColour": {
      Cookies.set("favouriteColour", payload);

      return {
        ...state,
        favouriteColour: payload,
      };
    }

    case "set_done": {
      Cookies.set("done", payload);

      return {
        ...state,
        done: payload,
      };
    }

    case "set_logout": {
      return logout();
    }

    default:
      return state;
  }
};
