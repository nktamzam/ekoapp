const initialState = { completadas: 6, nivel: 0 };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "prueba":
      return Object.assign({}, state, {
        nivel: state.nivel + 1
      });
    case "suma":
      return Object.assign({}, state, {
        nivel: state.nivel + 5
      });
    default:
      return state;
  }
}
