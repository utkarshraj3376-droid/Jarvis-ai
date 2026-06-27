// ==========================================
// NOVA AI v1.0
// voice.js - Part 1
// Voice Engine
// ==========================================

console.log("Voice Engine Loading...");

// =============================
// Voice Settings
// =============================

const VOICE = {

    mode: "NOVA",

    language: "en-US",

    rate: 1,

    pitch: 1.1,

    volume: 1,

    listening: false

};

// =============================
// Speak Function
// =============================

function speak(text){

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance();

    speech.text = text;

    speech.lang = VOICE.language;

    speech.rate = VOICE.rate;

    speech.pitch = VOICE.pitch;

    speech.volume = VOICE.volume;

    window.speechSynthesis.speak(speech);

}

// =============================
// Change Voice Mode
// =============================

function setVoiceMode(mode){

    VOICE.mode = mode;

    if(mode === "JARVIS"){

        VOICE.pitch = 0.8;
        VOICE.rate = 0.9;

    }else{

        VOICE.pitch = 1.2;
        VOICE.rate = 1;

    }

}

// =============================
// Start Voice Engine
// =============================

function startVoice(){

    VOICE.listening = true;

    console.log("Voice Engine Started");

    speak("Voice engine activated.");

}

// =============================
// Stop Voice Engine
// =============================

function stopVoice(){

    VOICE.listening = false;

    window.speechSynthesis.cancel();

    console.log("Voice Engine Stopped");

}

// =============================
// Voice Status
// =============================

function voiceStatus(){

    console.log("Voice Mode :",VOICE.mode);

    console.log("Listening :",VOICE.listening);

}

voiceStatus();

console.log("Voice Engine Ready");
// ==========================================
// NOVA AI v1.0
// voice.js - Part 2
// Voice Recognition System
// ==========================================

console.log("Loading Speech Recognition...");

// =============================
// Speech Recognition
// =============================

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

let recognition = null;

if(SpeechRecognition){

    recognition = new SpeechRecognition();

    recognition.lang = VOICE.language;

    recognition.continuous = false;

    recognition.interimResults = false;

}

// =============================
// Start Listening
// =============================

function startListening(){

    if(!recognition){

        alert("Speech Recognition Not Supported");

        return;

    }

    recognition.start();

    VOICE.listening = true;

    console.log("Listening...");

}

// =============================
// Stop Listening
// =============================

function stopListening(){

    if(recognition){

        recognition.stop();

    }

    VOICE.listening = false;

}

// =============================
// Voice Result
// =============================

if(recognition){

recognition.onresult=function(event){

const
  // ==========================================
// NOVA AI v1.0
// voice.js - Part 3
// Wake Word & Voice Response
// ==========================================

console.log("Wake Word Engine Loading...");

// ==========================================
// Wake Words
// ==========================================

const WAKE_WORDS = [

    "hey nova",
    "nova",
    "jarvis"

];

// ==========================================
// Check Wake Word
// ==========================================

function detectWakeWord(text){

    text = text.toLowerCase();

    for(let word of WAKE_WORDS){

        if(text
           // ==========================================
// NOVA AI v1.0
// voice.js - Part 4
// Voice Manager
// ==========================================

console.log("Voice Manager Loaded");

// =============================
// Voice Queue
// =============================

let voiceQueue = [];

// =============================
// Add To Queue
// =============================

function queueSpeak(text){

    voiceQueue.push(text);

    if(voiceQueue.length === 1){

        playQueue();

    }

}

// =============================
// Play Queue
// =============================

function playQueue(){

    if(voiceQueue.length === 0){

        return;

    }

    const speech = new SpeechSynthesisUtterance();

    speech.text = voiceQueue[0];

    speech.lang = VOICE.language;

    speech.rate = VOICE.rate;

    speech.pitch = VOICE.pitch;

    speech.volume = VOICE.volume;

    speech.onend = function(){

        voiceQueue.shift();

       // ==========================================
// NOVA AI v1.0
// voice.js - Part 5 (Final)
// Final Voice Engine
// ==========================================

console.log("Final Voice Engine Initializing...");

// ==========================================
// Voice Visualizer
// ==========================================

function voiceVisualizer(){

    const orb = document.querySelector(".core");

    if(!orb) return;

    orb.animate([

        {
            transform:"translate(-50%,-50%) scale(1)"
        },

        {
            transform:"translate(-50%,-50%) scale(1.15)"
        },

        {
            transform:"translate(-50%,-50%)
              
