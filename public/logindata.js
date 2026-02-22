document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

const inputtedUsername = document.getElementById('loginUsername').value;
const inputtedPassword = document.getElementById('loginPassword').value;

const players = JSON.parse(localStorage.getItem('minecraftPlayers')) || [];
const foundPlayer = players.find(p => p.name === inputtedUsername && p.pass === inputtedPassword);

if (foundPlayer) {
    localStorage.setItem('minecraftUser', JSON.stringify(foundPlayer));
    alert("Welcome, " + foundPlayer.name);
    window.location.href = "Profile.html";
} else {
    alert("Incorrect username or password");
}
});

