const initialState = { completadas: [], nivel: 0 };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "prueba":
      return { nivel: state.nivel + 1 };
    case "suma":
      return { nivel: state.nivel + 5 };
    case "add":
      return { completadas: [...state.completadas, action.id] };
  }
  return state;
}
