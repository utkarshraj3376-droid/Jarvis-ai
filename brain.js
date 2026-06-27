// =========================================
// NOVA AI v1.0
// brain.js - Part 1
// Master Brain Controller
// =========================================

console.log("Brain Engine Started...");

// ===============================
// AI Information
// ===============================

const NOVA = {

    owner: "Ankush",

    name: "NOVA",

    version: "1.0",

    mode: "NOVA",

    status: "ONLINE"

};

// ===============================
// Change AI Mode
// ===============================

function changeMode(mode){

    NOVA.mode = mode;

    if(mode === "NOVA"){

        console.log("NOVA Mode Activated");

        if(typeof modeText !== "undefined"){

            modeText.innerHTML =
            "😊 Friendly Mode Active";

        }

    }

    if(mode === "JARVIS"){

        console.log("Jarvis Mode Activated");

        if(typeof modeText !== "undefined"){

            modeText.innerHTML =
            "⚙️ Command Mode Active";

        }

    }

}

// ===============================
// Command Router
// ===============================

function processCommand(command){

    command = command.toLowerCase();

    console.log("User :", command);

    // Change Modes

    if(command.includes("nova mode")){

        changeMode("NOVA");

        addMessage(
            "nova",
            "😊 NOVA Mode Activated."
        );

        speak("NOVA mode activated.");

        return;

    }

    if(command.includes("jarvis mode")){

        changeMode("JARVIS");

        addMessage(
            "nova",
            "⚙️ Command Mode Activated."
        );

        speak("Command mode activated.");

        return;

    }

    // Search Request

    if(command.includes("search")){

        addMessage(
            "nova",
            "🌐 Searching..."
        );

        return;

    }

    // Music

    if(command.includes("music")){

        addMessage(
            "nova",
            "🎵 Opening Music Player..."
        );

        return;

    }

    // Call

    if(command.includes("call")){

        addMessage(
            "nova",
            "📞 Opening Call Module..."
        );

        return;

    }

    // Default

    replyAI(command);

}

// ===============================
// AI Startup
// ===============================

window.addEventListener("load",()=>{

    console.log("Brain Ready");

    addMessage(

        "nova",

        "🧠 Brain Engine Online."

    );

});
