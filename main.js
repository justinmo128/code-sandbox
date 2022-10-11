// COMMAND SELECTION
document.getElementById("command-selection").addEventListener("click", commandSelection);

let cmd1 = document.getElementById("cmd1");
let cmd2 = document.getElementById("cmd2");
let cmd3 = document.getElementById("cmd3");
let cmd4 = document.getElementById("cmd4");

let spellArray = ["Sizz", "Sizzle", "Bang", "Kaboom", "Snooze", "Flame Slash", "Kacrackle Slash", "Metal Slash", "Hatchet Man", "Whack", "Thwack", "Magic Burst", "Kamikazee", "Psyche Up", "Oomph", "Acceleratle", "Kaclang", "Bounce", "Heal", "Zoom", "Hocus Pocus"];

function commandSelection() {
    let commands = [];
    commands[0] = Math.floor(Math.random() * 21);
    commands[1] = Math.floor(Math.random() * 21);
    commands[2] = Math.floor(Math.random() * 21);
    commands[3] = Math.floor(Math.random() * 21);
    let idName = "cmdname";
    if (notEqual(commands) && typeCheck(commands)) {
        commandName(commands, spellArray, idName);
    } else {
        commandSelection();
    }
}

function notEqual(array) {
    array.sort();
    for (let i = 1; i < array.length; i++) {
        if (array[i] == array[i - 1]) {
            return false;
        }
    }
    return true;
}

function typeCheck(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == 0 || array[i] == 2 || array[i] == 9) {
            for (j = 0; j < array.length; j++) {
                if (array[j] == array[i] + 1) {return false;}
            }
        }
    }
    return true;
}

// USED IN BOTH COMMAND SELECTION AND MAGIC 8 BALL
function commandName(array, arrayNames, idName) {
    for (i = 0; i < arrayNames.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] == i) {
                document.getElementById(idName+j).innerHTML = arrayNames[i];
            }
        }
    }
}

// MAGIC 8-BALL
document.getElementById("eightball").addEventListener("click", magicEight);

let ballOutArray = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]

function magicEight() {
    let input = document.getElementById("eighttext").value.toLowerCase();
    let randNum = []
    randNum[0] = Math.floor(Math.random() * 20);
    let idReal = document.getElementById("eightout0");
    let idName = "eightout";
    if (input == "") {
        idReal.innerHTML = "Please input a question.";
    } else if (input == "hi" || input == "jellobj") {
        idReal.innerHTML = "Hello!";
    } else if (input == "do you love me?" || input == "does anybody love me?") {
        idReal.innerHTML = "lol";
    } else if (input == "my husband is walter white, yo?") {
        idReal.innerHTML = "He told me everything.<br>Seriously?<br>That's right.<br>And just so you know my brother-in-law is a DEA agent.<br>And I will not hesitate to call him.<br>Not if I have to. Understood?<br>This is your one and only warning. Do not sell marijuana to my husband.<br>Okay?<br>I mean it. Don't call our house again.<br>You stay way from him or you'll be one sorry individual.<br>You got me?<br>I think so, yeah. No more marijuana. I can dig it.<br>You can dig it. Wonderful.<br>(Skyler starts to leave)<br>Not that it's any of my business, but you might wanna consider a different line of work.<br>Okay."
    } else {
        commandName(randNum, ballOutArray, idName);
    }
}