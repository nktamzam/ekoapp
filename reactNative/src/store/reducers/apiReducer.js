export const GET_accion = "ekoapp/accion/INFO";
export const GET_REPO_INFO_SUCCESS = "ekoapp/accion/INFO_SUCCESS";
export const GET_REPO_INFO_FAIL = "ekoapp/accion/INFO_FAIL";

const initialState = { acciones: [], accion: {}, user: {} };

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case "ekoapp/acciones/LOAD":
      return { ...state, loading: true };
    case "ekoapp/acciones/LOAD_SUCCESS":
      return { ...state, loading: false, acciones: action.payload.data };
    case "ekoapp/acciones/LOAD_FAIL":
      return {
        ...state,
        loading: false,
        error: "No se puede mostrar la lista"
      };
    case "ekoapp/accion/INFO":
      return { ...state, loadingInfo: true };
    case "ekoapp/accion/INFO_SUCCESS":
      return { ...state, loadingInfo: false, accion: action.payload.data };
    case "ekoapp/accion/INFO_FAIL":
      return {
        ...state,
        loadingInfo: false,
        errorInfo: "Error al consultar la acción"
      };
    default:
      return state;
  }
}
