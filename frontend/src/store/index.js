import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Importe o redux-thunk
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
