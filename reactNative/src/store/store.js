import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducer";

const client = axios.create({
  baseURL: "http://ekoapp.online",
  responseType: "json"
});

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["userReducer"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["apiReducer"]
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(axiosMiddleware(client))
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export { store, persistor };
