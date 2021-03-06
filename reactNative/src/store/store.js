import { AsyncStorage, Alert } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// Middleware: Redux Persist Config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["localReducer"],
  blacklist: ["apiReducer"]
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export { store, persistor };
