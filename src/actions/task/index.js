import * as getAll from "./getAll";
import * as getCompleted from "./getCompleted";
import * as create from "./create";
import * as deleteTask from "./deleteTask";
import * as update from "./update";

export default {
    ...getAll,
    ...getCompleted,
    ...create,
    ...deleteTask,
    ...update,
};
