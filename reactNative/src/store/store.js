import { AsyncStorage, Alert } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducers";
import thunk from "redux-thunk";

// Middleware: Redux Persist Config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userReducer"],
  blacklist: ["apiReducer"]
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export { store, persistor };
