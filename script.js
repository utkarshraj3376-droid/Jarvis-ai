// =====================================
// NOVA AI v1.0
// JavaScript Part 1
// =====================================

console.log("NOVA AI Started");

// --------------------
// Elements
// --------------------

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const modeText = document.getElementById("modeText");
const novaBtn = document.getElementById("novaBtn");
const jarvisBtn = document.getElementById("jarvisBtn");

const dateTime = document.getElementById("dateTime");

// --------------------
// Current Mode
// --------------------

let currentMode = "NOVA";

// --------------------
// Update Date & Time
// --------------------

function updateClock(){

    const now = new Date();

    dateTime.innerHTML =
    now.toLocaleDateString() +
    " | " +
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);
updateClock();

// --------------------
// Mode Switch
// --------------------

novaBtn.onclick = function(){

    currentMode = "NOVA";

    modeText.innerHTML =
    "Friendly Mode Active 😊";

    novaBtn.classList.add("active-mode");
    jarvisBtn.classList.remove("active-mode");

}

jarvisBtn.onclick = function(){

    currentMode = "COMMAND";

    modeText.innerHTML =
    "Command Mode Active";

    jarvisBtn.classList.add("active-mode");
    novaBtn.classList.remove("active-mode");

}

// --------------------
// Add Chat Message
// --------------------

function addMessage(sender,text){

    const box = document.createElement("div");

    box.className =
    sender === "user"
    ? "message user"
    : "message nova";

    box.innerHTML = `

    <div class="text">

    <h4>${sender==="user"?"You":"NOVA"}</h4>

    <p>${text}</p>

    </div>

    `;

    chatBox.appendChild(box);

    chatBox.scrollTop =
    chatBox.scrollHeight;

}

// --------------------
// Send Button
// --------------------

sendBtn.onclick = function(){

    const text =
    userInput.value.trim();

    if(text==="") return;

    addMessage("user",text);

    userInput.value="";

    setTimeout(replyAI,700,text);

}
// =====================================
// NOVA AI v1.0
// JavaScript Part 2
// AI Reply System
// =====================================

function replyAI(userText){

let msg = userText.toLowerCase();

let reply = "";

// --------------------
// NOVA MODE
// --------------------

if(currentMode==="NOVA"){

    if(msg.includes("hello") || msg.includes("hi")){

        reply="Hi Ankush 😊<br>How can I help you today?";

    }

    else if(msg.includes("name")){

        reply="My name is NOVA 💙";

    }

    else if(msg.includes("who are you")){

        reply="I'm your personal AI Assistant created for Ankush.";

    }

    else if(msg.includes("time")){

        reply="Current Time : " +
        new Date().toLocaleTimeString();

    }

    else if(msg.includes("date")){

       // =====================================
// NOVA AI v1.0
// JavaScript Part 3
// Voice Recognition + Speech
// =====================================

// Text To Speech
function speak(text){

    const speech = new SpeechSynthesisUtterance();

    speech.text = text.replace(/<br>/g," ");

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1.1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}

// ----------------------------
// Voice Recognition
// ----------------------------

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(SpeechRecognition){

    const recognition =
    new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.continuous = false;

    recognition.interimResults = false;

    const micBtn =
    document.querySelector(".voice-btn");

    micBtn.onclick = function(){

        recognition.start();

        micBtn.innerHTML =
        '<i class="fa-solid fa-microphone"></i> Listening...';

    };

    recognition.onresult = function(event){

        const voiceText =
       // =====================================
// NOVA AI v1.0
// JavaScript Part 4
// System Status
// =====================================

// --------------------
// Battery Status
// --------------------

const batteryText =
document.getElementById("batteryLevel");

if(navigator.getBattery){

navigator.getBattery().then(function(battery){

function updateBattery(){

batteryText.innerHTML =
Math.round(battery.level*100)+"%";

}

updateBattery();

battery.addEventListener(
"levelchange",
updateBattery
);

});

}

// --------------------
// Internet Status
// --------------------

const internetCard =
document.querySelectorAll(".dashboard-card h2")[1];

function updateInternet(){

if(navigator.onLine){

internetCard.innerHTML="Connected";

}else{

internetCard.innerHTML="Offline";

}

}

window.addEventListener("online",updateInternet);
window.addEventListener("offline",updateInternet);

updateInternet();

// --------------------
// Weather Placeholder
// --------------------

const weatherText =
document.getElementById("weatherText");

weatherText.innerHTML =
"Weather API Coming Soon";

// --------------------
// Music Status
// --------------------

const musicStatus =
document.getElementById("musicStatus");

musicStatus.innerHTML =
"No Music Playing";

// --------------------
// Quick Action Cards
// --------------------

const// =====================================
// NOVA AI v1.0
// JavaScript Part 5
// Theme + Smart Commands
// =====================================

// Theme Switch

const theme = document.getElementById("theme");

if(theme){

theme.onchange = function(){

if(theme.value==="Light"){

document.body.style.background="#eef3ff";
document.body.style.color="#111";

}else{

document.body.style.background="#070b14";
document.body.style.color="#ffffff";

}

};

}

// =====================================
// AI Orb Animation
// =====================================

const orb =
document.querySelector(".core");

function pulseOrb(){

if(orb){

orb.animate([

{
transform:"translate(-50%,-50%) scale(1)"
},

{
transform:"translate(-50%,-50%) scale(1.08)"
},

{
transform:"translate(-50%,-50%) scale(1)"
}

],{

duration:1500,
iterations:1

});

}

}

// Pulse every
        // =====================================
// NOVA AI v1.0
// JavaScript Part 6
// Memory System
// =====================================

// -------- Save Settings --------

const aiModeSelect = document.getElementById("aiMode");
const voiceSelect = document.getElementById("voiceType");

if(aiModeSelect){

aiModeSelect.onchange=function(){

localStorage.setItem(
"nova_mode",
aiModeSelect.value
);

};

}

if(voiceSelect){

voiceSelect.onchange=function(){

localStorage.setItem(
"nova_voice",
voiceSelect.value
);

};

}

// -------- Load Settings --------

window.addEventListener("load",function(){

const mode=
localStorage.getItem("nova_mode");

const voice=
localStorage.getItem("nova_voice");

if(mode){

aiModeSelect.value=mode;

}

if(voice){

voiceSelect.value=voice;

}

});

// -------- Memory --------

const memory={

owner:"Ankush",

assistant:"NOVA",

version:"1.0",

city:"",

favoriteMusic:"",

favoriteColor:""

};

// -------- Save Memory --------

function saveMemory(){

localStorage.setItem(

"nova_memory",

JSON.stringify(memory)

);

}

// -------- Load Memory --------

function loadMemory(){

const data=

localStorage.getItem("nova_memory");

if(data){

Object.assign(

memory,

JSON.parse(data)

);

}

}

loadMemory();

// -------- Greeting --------

function startupGreeting(){

const hour=

new Date().getHours();

let greet="";

if(hour<12){

greet="Good Morning";

}

else if(hour<18){

greet="Good Afternoon";

}

else{

greet="Good Evening";

}

const message=

`${greet}, ${memory.owner}. NOVA AI is ready.`;

addMessage("nova",message);

speak(message);

}

setTimeout(startupGreeting,1500);

// -------- Example Commands --------

function memoryCommand(text){

text=text.toLowerCase();

if(text.includes("my name")){

addMessage(

"nova",

"Your name is "+memory.owner

);

speak(

"Your name is "+memory.owner

);

return true;

}

if(text.includes("save favourite color")){

memory.favoriteColor="Blue";

saveMemory();

addMessage(

"nova",

"I have remembered your favourite color."

);

return true;

}

return false;

}

// -------- Upgrade Reply --------

const previousReply=replyAI;

replyAI=function(text){

if(memoryCommand(text)){

return;

}

previousReply(text);

};

console.log("Memory System Loaded");
    // =====================================
// NOVA AI v1.0
// JavaScript Part 7
// Voice Control System
// =====================================

// Voice State
let isListening = false;

const voiceButtons =
document.querySelectorAll(".voice-btn");

const micButton = voiceButtons[0];
const stopButton = voiceButtons[1];

// ----------------------------
// Start Listening Animation
// ----------------------------

function startListening(){

isListening=true;

micButton.innerHTML=
'<i class="fa-solid fa-microphone-lines"></i> Listening';

micButton.style.boxShadow=
"0 0 35px #00c6ff";

pulseOrb();

}

// ----------------------------
// Stop Listening
// ----------------------------

function stopListening(){

isListening=false;

micButton.innerHTML=
'<i class="fa-solid fa-microphone"></i> Speak';

micButton.style.boxShadow="none";

window.speechSynthesis.cancel();

}

// ----------------------------
// Button Events
// ----------------------------

micButton.addEventListener(

"click",

function(){

startListening();

}

);

stopButton.addEventListener(

"click",

function(){

stopListening();

}

);

// ----------------------------
// Voice Type
// ----------------------------

function updateVoice(){

const type=

localStorage.getItem("nova_voice");

if(type==="Deep"){

console.log("Command Voice");

}else{

console.log("Female Voice");

}

}

updateVoice();

// ----------------------------
// Voice Mode

setInterval(function(){

if(isListening){

pulseOrb();

}

},2000);

// ----------------------------
// Demo Wake Word

function wakeWord(text){

text=text.toLowerCase();

if(text.includes("nova")){

addMessage(

"nova",

"Hello Ankush 😊 I'm listening."

);

speak(

"Hello Ankush. I'm listening."

);

return true;

}

if(text.includes("command mode")){

jarvisBtn.click();

addMessage(

"nova",

"Command Mode Activated."

);

speak(

"Command Mode Activated."

);

return true;

}

if(text.includes("nova mode")){

novaBtn.click();

addMessage(

"nova",

"Friendly Mode Activated."

);

speak(

"Friendly Mode Activated."

);

return true;

}

return false;

}

// ----------------------------
// Upgrade Reply

const previousAIReply=replyAI;

replyAI=function(text){

if(wakeWord(text)){

return;

}

previousAIReply(text);

};

console.log("Voice System Ready");
