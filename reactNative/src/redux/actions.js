import { GET_acciones, GET_accion, GET_USER } from "./reducer";

export function listarAcciones() {
  return {
    type: GET_acciones,
    payload: {
      request: {
        url: `/acciones/lista`
      }
    }
  };
}

export function getAccion(id) {
  return {
    type: GET_accion,
    payload: {
      request: {
        url: `/acciones/detalle?id=${id}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/acciones/nueva`
      }
    }
  };
}
