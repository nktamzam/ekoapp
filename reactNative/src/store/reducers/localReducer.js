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
            res: action.residuos,
            dif: action.dificultad
          }
        },
        nivel: state.nivel + 1
      };
    case "mevuelvo":
      const { [action.id]: value, ...withoutFirst } = state.completadas;

      // asi funciona:
      // const { [9]: value, ...withoutFirst } = state.completadas;
      return {
        ...state,
        completadas: {
          ...withoutFirst
        },
        nivel: state.nivel - 1
      };
    default:
      return state;
  }
}
