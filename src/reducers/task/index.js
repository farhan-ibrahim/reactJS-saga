import { combineReducers } from "redux";

import getAll from "./getAll";
import getCompleted from "./getCompleted";
import create from "./create";
import deleteTask from "./deleteTask";
import update from "./update";


export default combineReducers({
    getAll,
    getCompleted,
    create,
    deleteTask,
    update,
});
