import { createStore } from "redux";
import ItemReducer from "./ItemReducer";


const store=createStore(ItemReducer)
export default store