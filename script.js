// =====================
// JARVIS v1.0 Script
// =====================

// Live Clock
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();

    const date = now.toDateString();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

setInterval(updateClock, 1000);
updateClock();

// Chat Box
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");

function addMessage(text, sender) {

    const msg = document.createElement("div");
    msg.className = "message " + sender;

    msg.innerHTML = `
        <div class="avatar">${sender==="bot" ? "🤖":"🧑"}</div>
        <div class="text">${text}</div>
    `;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function speak(text){

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";

    speechSynthesis.speak(speech);
}

function processCommand(command){

    command = command.toLowerCase();

    if(command.includes("google")){

        const search = command.replace("google","");
        window.open("https://www.google.com/search?q="+encodeURIComponent(search));

        addMessage("Searching Google...", "bot");
        speak("Searching Google");

    }

    else if(command.includes("youtube")){

        const search = command.replace("youtube","");
        window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(search));

        addMessage("Opening YouTube...", "bot");
        speak("Opening YouTube");

    }

    else if(command.includes("time")){

        const t = new Date().toLocaleTimeString();

        addMessage("Current time is " + t,"bot");
        speak("Current time is " + t);

    }

    else if(command.includes("hello")){

        addMessage("Hello Ankush! Nice to see you.","bot");
        speak("Hello Ankush");

    }

    else{

        addMessage("Sorry, I don't understand that command yet.","bot");
        speak("Sorry, I don't understand.");
    }

}

sendBtn.onclick = ()=>{

    const text = input.value.trim();

    if(text==="") return;

    addMessage(text,"user");

    processCommand(text);

    input.value="";
}

// Voice Recognition

if('webkitSpeechRecognition' in window){

const recognition = new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.continuous=false;

recognition.onresult=(event)=>{

const command=event.results[0][0].transcript;

input.value=command;

addMessage(command,"user");

processCommand(command);

};

micBtn.onclick=()=>{

recognition.start();

};

}else{

micBtn.disabled=true;

}
