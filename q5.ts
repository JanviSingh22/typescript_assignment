type EmailTask = {type: "email"; address:string};
type LogTask = { type: "log"; message:string};

type Task = EmailTask | LogTask;


const tasks: Task[] = [
  { type: "email", address: "test@test.com" },
  { type: "log", message: "User logged in" }
];

function processTask(task: Task): string {
  if (task.type === "email") {
    return `Sent email to ${task.address}`;
  } 
  else if (task.type === "log") {
    return `Log: ${task.message}`;
  }
  else{
    throw new Error("Unhandled task type");
  }
}
for (const task of tasks){
console.log(processTask(task));

}