function analyze() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let symptoms = document.getElementById("symptoms").value;

    if (name === "" || age === "" || symptoms === "") {
        alert("Please fill all the details!");
        return;
    }

    let message = "";

    if (symptoms.includes("fever")) {
        message = "It may be normal viral fever. Drink more water and monitor temperature.";
    } 
    else if (symptoms.includes("cold")) {
        message = "Cold symptoms detected. Take steam and drink warm fluids.";
    }
    else if (symptoms.includes("headache")) {
        message = "Possible stress-related headache. Take rest & stay hydrated.";
    }
    else {
        message = "Based on symptoms, no serious issue detected. If discomfort continues, consult a doctor.";
    }

    document.getElementById("result").innerHTML = `
        <h3>Hi ${name},</h3>
        <p>${message}</p>
    `;
}
