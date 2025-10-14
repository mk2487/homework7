console.log("Hello World! JavaScript is connected properly.");
const name = "Marcell Kapas";  
let hasDownloadedResume = false; 

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function timeBasedGreeting(name) {
    const hour = new Date().getHours();
    let greetingPrefix = "";

    if (hour < 12) {
        greetingPrefix = "Good Morning, ";
    } else if (hour < 18) {
        greetingPrefix = "Good Afternoon, ";
    } else {
        greetingPrefix = "Good Evening, ";
    }

    return `${greetingPrefix}my name is ${name}! Welcome to my portfolio!`;
}

const greetingElement = document.getElementById("greetingMessage");
if (greetingElement) {
    greetingElement.textContent = timeBasedGreeting(name); 
}

const resumeButton = document.querySelector('footer a.btn-light');
if (resumeButton) {
    resumeButton.addEventListener("click", function() {
        if (!hasDownloadedResume) { 
            hasDownloadedResume = true;
            setTimeout(() => {
                alert("The resume has downloaded successfully!");
            }, 2000);
        }
    });
}

function daysUntilDeadline(deadlineDate) {
    const currentDate = new Date();
    const deadline = new Date(deadlineDate);
    const timeDifference = deadline - currentDate; 
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
    return daysRemaining;
}

const projectDeadline = "2025-12-10"; // YYYY-MM-DD format
const remainingDays = daysUntilDeadline(projectDeadline);

console.log("Days until project deadline:", remainingDays);


const deadlineText = document.getElementById("deadlineText");
if (deadlineText) {
    if (remainingDays > 0) {
        deadlineText.textContent = `Deadline: ${projectDeadline} (Remaining: ${remainingDays} days)`;
    } else {
        deadlineText.textContent = "This project deadline has passed.";
    }
}
