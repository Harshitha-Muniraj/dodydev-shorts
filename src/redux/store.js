import { createStore } from "redux";
import { HandleFavourite } from "./reducer/HandeFavorite";

const store=createStore(HandleFavourite)

export default store;