var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
var terminal_content = document.getElementById("terminal_content");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;
    if(!COMMANDS.hasOwnProperty(input)){
        output += `<div><span class="command">No such command: </span>${input} </div>`;
    }
    else{
        output += `<div>${COMMANDS[input]} </div>`;
    }
    
    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML+output}`;
    terminal_content.scrollTop = terminal_content.scrollHeight;

    if(input == "github"){
        setTimeout(() => {window.open("https://github.com/jjp6315", "_blank");}, 2000);
    }
}

function key(e){
    const input = user_input.value;

    if(e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }

    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress", key);

const COMMANDS = 
{
    help:
    'Supported commands: <span class="command-keyword">"about"</span>, <span class="command-keyword">"experience"</span>, <span class="command-keyword">"education"</span>, <span class="command-keyword">"skills"</span>, <span class="command-keyword">"contact"</span>,  <span class="command-keyword">"github"</span>',
    about:
        'Hello my name is Ji Woong',
    experience:
        'here is my resume',
    education:
        'Junior at psu',
    skills:
        'I like to code',
    contact:
        '4847166292',
    github:
        'opening my GitHub page...'        
};