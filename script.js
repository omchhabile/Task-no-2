// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("formMsg");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
    } 
    else if (!emailPattern.test(email)) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid email!";
    } 
    else {
        msg.style.color = "green";
        msg.innerText = "Form submitted successfully!";
    }
});
// TO-DO LIST
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskInput.value;

    li.onclick = function () {
        taskList.removeChild(li);
    };

    taskList.appendChild(li);
    taskInput.value = "";
}

