const initialState = { completadas: 6, nivel: 0 };

export default function localReducer(state = initialState, action) {
  switch (action.type) {
    case "prueba":
      return { ...state, nivel: state.nivel + 1 };

    case "suma":
      return { ...state, nivel: state.nivel + 5 };
    default:
      return state;
  }
}
