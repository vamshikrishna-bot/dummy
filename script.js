function analyzeMood() {

    const mood = document.getElementById("mood").value;
    const result = document.getElementById("result");

    let productivity = 0;
    let suggestion = "";
    let bgColor = "";

    if(mood === "happy"){
        productivity = 92;
        suggestion = "Perfect time for coding and learning new AI concepts.";
        bgColor = "#1abc9c";
    }

    else if(mood === "focused"){
        productivity = 98;
        suggestion = "Deep work mode activated. Build projects now.";
        bgColor = "#3498db";
    }

    else if(mood === "tired"){
        productivity = 45;
        suggestion = "Take short breaks and avoid difficult tasks.";
        bgColor = "#f39c12";
    }

    else if(mood === "stressed"){
        productivity = 35;
        suggestion = "Practice mindfulness and reduce workload.";
        bgColor = "#e74c3c";
    }

    else{
        result.innerHTML = "Please select a mood.";
        return;
    }

    document.body.style.background = bgColor;

    result.innerHTML = `
        <h3>AI Analysis Result</h3>
        <p><strong>Productivity Score:</strong> ${productivity}%</p>
        <p><strong>Suggestion:</strong> ${suggestion}</p>
    `;
}

