import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { items } from "./items";
import { movieInfo } from "./movie";
import { searchStr } from "./search";
import { favorites } from "./favorite";

export default combineReducers({
    routing: routerReducer,
    items, movieInfo, searchStr, favorites
}
)