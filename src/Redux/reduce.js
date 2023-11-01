import {
  CREATE_NEW_DRIVER,
  DELETE_DRIVER,
  FILTER_BY_ORIGEN,
  FILTER_BY_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_PRUEBA,
  GET_TEAMS,
  ORDER_ALFABETICAMENTE,
  ORDER_FECHA_NACIMIENTO,
  REINICIAR_DETAIL,
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
} from "./action-type";

const initialState = {
  drivers: [],
  allDrivers: [],
  detail: [],
  driverForName: [],
  teams: [],
  pruebaDrivers: []
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        allDrivers: action.payload,
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case ORDER_ALFABETICAMENTE:
      const copyDrivers = [...state.drivers];
      return {
        ...state,
        drivers:
          action.payload === "nombreAscendente"
            ? copyDrivers.sort(
                (a, b) =>
                  a.name.toLowerCase().charCodeAt(0) -
                  b.name.toLowerCase().charCodeAt(0)
              )
            : copyDrivers.sort(
                (a, b) =>
                  b.name.toLowerCase().charCodeAt(0) -
                  a.name.toLowerCase().charCodeAt(0)
              ),
      };
    case ORDER_FECHA_NACIMIENTO:
      const copyDriversNacimiento = [...state.drivers];

      const compararFechasNacimiento = (a, b) => {
        const fechaA = new Date(a.dob);
        const fechaB = new Date(b.dob);

        if (fechaA < fechaB) {
          return 1;
        } else if (fechaA > fechaB) {
          return -1;
        } else return 0;
      };

      return {
        ...state,
        drivers:
          action.payload === "fechaAscendente"
            ? copyDriversNacimiento.sort(compararFechasNacimiento)
            : copyDriversNacimiento.sort(compararFechasNacimiento).reverse(),
      };
    case FILTER_BY_TEAMS:
      let copyDriver = state.allDrivers;
      let filtrados = copyDriver.filter((e) =>
        e.teams?.includes(action.payload)
      );

      return {
        ...state,
        drivers: filtrados,
      };
    case FILTER_BY_ORIGEN:
      let copyDriver2 = state.allDrivers;
      let filterCopy;
      if (action.payload === "API") {
        filterCopy = copyDriver2.filter((e) => typeof e.image !== "string");
      } else if (action.payload === "creados") {
        filterCopy = copyDriver2.filter((e) => typeof e.image !== "object");
      } else filterCopy = state.allDrivers;

      return {
        ...state,
        drivers: filterCopy,
      };

    case CREATE_NEW_DRIVER:
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
        allDrivers: [...state.allDrivers, action.payload],
      };

    case DELETE_DRIVER:
      return {
        ...state,
        drivers: [...state.drivers.filter((e) => e.id !== action.payload.id)],
        allDrivers: action.payload,
      };
    case REINICIAR_DETAIL:
      return { ...state, detail: {} };

case GET_DRIVER_PRUEBA:
  console.log(action.payload);
  console.log("entr");
  return {
    ...state,
    pruebaDrivers: action.payload

  }

      default:
      return { ...state };
  }
};

export default reduce;
