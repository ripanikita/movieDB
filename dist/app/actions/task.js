"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function taskHasErrored(err) {
    return {
        type: "TASK_HAS_ERRORED",
        error: err
    };
}
exports.taskHasErrored = taskHasErrored;
function taskIsLoading(bool) {
    return {
        type: "TASK_IS_LOADING",
        isLoading: bool
    };
}
exports.taskIsLoading = taskIsLoading;
function taskFetchDataSuccess(task) {
    return {
        type: "TASK_FETCH_DATA_SUCCESS",
        task: task
    };
}
exports.taskFetchDataSuccess = taskFetchDataSuccess;
//# sourceMappingURL=task.js.map