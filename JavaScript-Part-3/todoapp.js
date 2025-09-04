let todo = [];
let req = prompt("Please enter your request :");
while(true) {
    if (req==="quit") {
        console.log("Quitting App!");
        break;
    }

    else if (req=== "list") {
        for (let i=0; i<todo.length; i++) {
            console.log(i,todo[i]);
        }
    }
    else if (req==="add") {
        let task = prompt("Enter task yo want to add ");
        todo.push(task);
        console.log("task added :" + task);
    }
    else if (req === "delete") {
        let idx = prompt("Please enter the task index you want to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong task");
    }
        req = prompt("Please enter your request :");

}
