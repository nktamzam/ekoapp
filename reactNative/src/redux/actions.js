import { GET_acciones, GET_accion, GET_USER } from "./reducer";

export function listarAcciones() {
  return {
    type: GET_acciones,
    payload: {
      request: {
        url: `/product/read.php`
      }
    }
  };
}

export function getAccion(id) {
  return {
    type: GET_accion,
    payload: {
      request: {
        url: `/product/read_one.php?id=${id}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/product/create.php`
      }
    }
  };
}
