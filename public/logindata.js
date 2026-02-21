document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

const inputtedUsername = document.getElementById('loginUsername').value;
const inputtedPassword = document.getElementById('loginPassword').value;
const savedData = JSON.parse(localStorage.getItem('minecraftUser'));

if (!savedData) {
    alert("Account not found");
    return;
}

if (inputtedUsername === savedData.name && inputtedPassword === savedData.pass) {
    alert("Welcome, " + savedData.name);
    window.location.href = "Profile.html";
} else {
    alert("Incorrect username or password");
}
});