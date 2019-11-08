const initialState = {
  completadas: { 0: { co2: 0, res: 0, dif: 0 } },
  nivel: 0,
  total: 0
};

export default function localReducer(state = initialState, action) {
  switch (action.type) {
    case "mepaso":
      return {
        ...state,
        completadas: {
          ...state.completadas,
          [action.id]: {
            co2: action.co2,
            res: action.res,
            dif: action.dif
          }
        },
        nivel:
          ((action.co2 + action.res + action.dif) / (action.total * 9)) * 100,

        total: action.total
      };
    case "mevuelvo":
      const { [action.id]: value, ...nuevoArray } = state.completadas;
      return {
        ...state,
        completadas: {
          ...nuevoArray
        },
        nivel:
          ((action.co2 + action.res + action.dif) / (action.total * 9)) * 100
      };
    default:
      return state;
  }
}
