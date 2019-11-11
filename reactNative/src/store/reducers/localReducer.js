const initialState = {
  completadas: { 0: { co2: 0, res: 0, dif: 0 } },
  nivel: 0
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
          parseInt(state.nivel) +
          parseInt(action.co2) +
          parseInt(action.res) +
          parseInt(action.dif)
      };
    case "mevuelvo":
      const { [action.id]: value, ...nuevoArray } = state.completadas;
      return {
        ...state,
        completadas: {
          ...nuevoArray
        },
        nivel: state.nivel - action.co2 - action.res - action.dif
      };
    default:
      return state;
  }
}
