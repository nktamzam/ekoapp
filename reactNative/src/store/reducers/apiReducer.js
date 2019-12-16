const initialState = {
  acciones: [],
  accion: {},
  loading: true,
  errorMessage: ""
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ACCIONES":
      return { ...state, loading: action.payload };
    case "GET_ACCIONES_COMPLETADO":
      return { ...state, acciones: action.payload, loading: action.loading };
    case "GET_ACCIONES_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    case "GET_ACCION":
      return { ...state, loading: action.payload };
    case "GET_ACCION_COMPLETADO":
      return { ...state, accion: action.payload, loading: action.loading };
    case "GET_ACCION_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    case "POST_ACCION":
      return { ...state, loading: action.payload };
    case "POST_ACCION_COMPLETADO":
      return { ...state, accion: action.payload, loading: action.loading };
    case "POST_ACCION_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    default:
      return state;
  }
}
