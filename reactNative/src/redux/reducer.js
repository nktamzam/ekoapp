export const GET_acciones = "ekoapp/acciones/LOAD";
export const GET_REPOS_SUCCESS = "ekoapp/acciones/LOAD_SUCCESS";
export const GET_REPOS_FAIL = "ekoapp/acciones/LOAD_FAIL";

export const GET_accion = "ekoapp/accion/INFO";
export const GET_REPO_INFO_SUCCESS = "ekoapp/accion/INFO_SUCCESS";
export const GET_REPO_INFO_FAIL = "ekoapp/accion/INFO_FAIL";

const initialState = { acciones: [], accion: {}, user: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_acciones:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, acciones: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: "No se puede mostrar la lista"
      };
    case GET_accion:
      return { ...state, loadingInfo: true };
    case GET_REPO_INFO_SUCCESS:
      return { ...state, loadingInfo: false, accion: action.payload.data };
    case GET_REPO_INFO_FAIL:
      return {
        ...state,
        loadingInfo: false,
        errorInfo: "Error al consultar la acción"
      };
    default:
      return state;
  }
}
