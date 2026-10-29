let name = ""
let repeatedName = "";
let tasks = [];

function getReply(command) {
    let name = command.split("Hello my name is ")[1];
    if (name === repeatedName) {
        return "Really?  Do you have amnesia? You already told me your name is " + name;
    } else if (command && name) {
        repeatedName = name;
        return `Nice to meet you ${name}`;
    }
    if (command === "What is my name?") {
        if (repeatedName !== "") {
            return `Your name is ${repeatedName}`;
        } else {
            return "Why do you want to know your name? I don't like you. I don't want to know your name. I don't care about you. I don't want to know your name.";
        }
    }

    let task = command.split("Add ")[1];

    if (task) {
        task = task.split(" to my todo")[0];
        tasks.push(task);

        return `${task} added to your todo. You have ${tasks.length} tasks in your todo: ${tasks}`;
    }

    let removeTask = command.split("Remove ")[1];
    if (removeTask) {
        removeTask = removeTask.split(" from my todo")[0];
        tasks = tasks.filter(t => t !== removeTask);
        return `${removeTask} removed from your todo. You have ${tasks.length} tasks in your todo: ${tasks}`;
    }
    if (command === "What is on my todo?") {
        if (tasks.length === 0) {
            return "Your todo is empty.";
        }
        return `You have ${tasks.length} tasks in your todo: ${tasks}`;
    }

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    let monthName = months[date.getMonth()];
    if (command === "What day is it today?") {
        return `Today is ${day}. of ${monthName} ${year}`;
    }

    let commandParts = command.split(" ");
    let numberOne = Number(commandParts[2]);
    let numberTwo = Number(commandParts[4]);
    let operator = commandParts[3];
    if (command === "What is " + numberOne + " " + operator + " " + numberTwo) {
        if (numberOne && numberTwo) {
            if (operator === "+") {
                let sum = numberOne + numberTwo;
                return `Result is ${sum}`;
            }
            if (operator === "-") {
                let difference = numberOne - numberTwo;
                return `Result is ${difference}`;
            }
            if (operator === "*") {
                let product = numberOne * numberTwo;
                return `Result is ${product}`;
            }
            if (operator === "/") {
                let quotient = numberOne / numberTwo;
                return `Result is ${quotient}`;
            }
        } else {
            return "Give me Two numbers to calculate! How should I know what do you want???? I am not a mind reader! what do you think about me? I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator! I am not a calculator!";
        }
    }

    let timerTime = command.split("Set a timer for ")[1];

    if (timerTime) {
        timerTime = Number(timerTime.split(" minutes")[0]);

        setTimeout(function() {
            console.log("Ding Ding! Your timer for " + timerTime + " minutes is up! Stop! Nobody moves!");
        }, timerTime * 60 * 1000);

        return `Timer set for ${timerTime} minutes`;
    }

    else {
        return "I don't understand the command. I gave you the commands that I can understand. I am not a mind reader! what do you think about me? Are you stupid???? Am I stupid???? Wait for me! I will kill you!! :D";
    }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add swimming to my todo"));
console.log(getReply("Add reading to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 4"));
console.log(getReply("What is 8 - 2"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("What is 20 / 4"));
console.log(getReply("What is 20 0"));
console.log(getReply("Set a timer for 1 minutes"));