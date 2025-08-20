var tasks = [
    { type: "email", address: "test@test.com" },
    { type: "log", message: "User logged in" }
];
function processTask(task) {
    if (task.type === "email") {
        return "Sent email to ".concat(task.address);
    }
    else if (task.type === "log") {
        return "Log: ".concat(task.message);
    }
    else {
        throw new Error("Unhandled task type");
    }
}
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(processTask(task));
}
