
// =====================================
// NOVA + JARVIS AI v2.0
// Part 1
// =====================================

console.log("NOVA AI Started");

// ========= Elements =========

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");

const novaBtn = document.getElementById("novaMode");
const jarvisBtn = document.getElementById("jarvisMode");

const assistantName = document.getElementById("assistantName");
const assistantStatus = document.getElementById("assistantStatus");

const time = document.getElementById("time");
const date = document.getElementById("date");

const notification = document.getElementById("notification");

// ========= Current Mode =========

let currentMode = "NOVA";

// ========= Clock =========

function updateClock(){

const now = new Date();

time.innerHTML = now.toLocaleTimeString();

date.innerHTML = now.toDateString();

}

setInterval(updateClock,1000);

updateClock();

// ========= Notification =========

function showNotification(text){

notification.innerHTML = text;

setTimeout(function(){

notification.innerHTML = "System Ready...";

},3000);

}

showNotification("NOVA AI Loaded Successfully");
// =====================================
// Part 2 - Chat System
// =====================================

function addMessage(sender,text){

const message=document.createElement("div");

message.className="message "+sender;

message.innerHTML=`
<div class="avatar">
${sender==="bot"?"🤖":"🧑"}
</div>

<div class="text">
${text}
</div>
`;

chatBox.appendChild(message);

chatBox.scrollTop=chatBox.scrollHeight;

}

sendBtn.onclick=function(){

const text=userInput.value.trim();

if(text==="") return;

addMessage("user",text);

userInput.value="";

processCommand(text);

};

userInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendBtn.click();

}

});
// =====================================
// Part 3 - AI Brain
// =====================================

function processCommand(command){

command=command.toLowerCase();

if(command.includes("hello") || command.includes("hi")){

addMessage("bot",
currentMode==="NOVA"
?
"👋 Hello Ankush! I'm NOVA."
:
"🤖 Hello Sir. JARVIS Ready.");

showNotification("Greeting Sent");

}

else if(command.includes("time")){

const t=new Date().toLocaleTimeString();

addMessage("bot","🕒 "+t);

}

else if(command.includes("date")){

const d=new Date().toDateString();

addMessage("bot","📅 "+d);

}

else{

addMessage("bot",
"I understood: <b>"+command+"</b><br><br>More AI features are coming soon.");

}


}
// =====================================
// Part 4 - Mode Switch
// =====================================

novaBtn.onclick=function(){

currentMode="NOVA";

assistantName.innerHTML="NOVA";

assistantStatus.innerHTML="Friendly AI Assistant";

novaBtn.classList.add("active");
jarvisBtn.classList.remove("active");

showNotification("NOVA Mode Activated");

addMessage("bot","💜 NOVA Mode Activated.");

};

jarvisBtn.onclick=function(){

currentMode="JARVIS";

assistantName.innerHTML="JARVIS";

assistantStatus.innerHTML="Command AI Assistant";

jarvisBtn.classList.add("active");
novaBtn.classList.remove("active");

showNotification("JARVIS Mode Activated");

addMessage("bot","🤖 JARVIS Mode Activated.");

};
// =====================================
// Part 5 - Voice + Smart Commands
// =====================================

function speak(text){

const speech=new SpeechSynthesisUtterance();

speech.text=text.replace(/<[^>]*>/g,"");

speech.lang="en-US";

speech.rate=1;

speech.pitch=1;

window.speechSynthesis.speak(speech);

}

// Upgrade AI

const oldProcess=processCommand;

processCommand=function(command){

const msg=command.toLowerCase();

if(msg.startsWith("google ")){

window.open(
"https://www.google.com/search?q="+
encodeURIComponent(msg.replace("google ",""))
);

addMessage("bot","🌐 Opening Google...");

speak("Opening Google");

return;

}

if(msg.startsWith("youtube ")){

window.open(
"https://www.youtube.com/results?search_query="+
encodeURIComponent(msg.replace("youtube ",""))
);

addMessage("bot","▶ Opening YouTube...");

speak("Opening YouTube");

return;

}

oldProcess(command);

};
// =====================================
// Part 6 - Voice Recognition
// =====================================

if ("webkitSpeechRecognition" in window) {

const recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

micBtn.onclick = function(){

showNotification("🎤 Listening...");

recognition.start();

};

recognition.onresult = function(event){

const text = event.results[0][0].transcript;

userInput.value = text;

addMessage("user", text);

processCommand(text);

};

recognition.onerror = function(){

showNotification("Voice Error");

};

recognition.onend = function(){

showNotification("Ready");

};

}else{

micBtn.disabled = true;

showNotification("Voice Not Supported");

}
// =====================================
// Part 7 - Quick Action Cards
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("click",function(){

const action =
this.innerText.toLowerCase();

if(action.includes("google")){

window.open("https://www.google.com");

}

else if(action.includes("youtube")){

window.open("https://youtube.com");

}

else if(action.includes("weather")){

addMessage(
"bot",
"🌤 Weather feature is coming soon."
);

}

else if(action.includes("music")){

addMessage(
"bot",
"🎵 Music Player Coming Soon."
);

}

else if(action.includes("files")){

addMessage(
"bot",
"📂 File Manager Coming Soon."
);

}

else{

addMessage(
"bot",
"🤖 AI Tools will be available soon."
);

}

});

});

showNotification("Quick Actions Loaded");

