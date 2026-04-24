document.getElementById('loginForm').addEventListener('submit', function(event) { // This event listener handles the submit event //
    event.preventDefault();

const inputtedUsername = document.getElementById('loginUsername').value;
const inputtedPassword = document.getElementById('loginPassword').value;

const players = JSON.parse(localStorage.getItem('minecraftPlayers')) || []; // This gets the array of players from local storage or default to an empty array if nothing exists //
const foundPlayer = players.find(p => p.name === inputtedUsername && p.pass === inputtedPassword); // This searches the array for a player whose username and password match the user's input //

if (foundPlayer) { // This if statement happens if a matching player is found within the database //
    localStorage.setItem('minecraftUser', JSON.stringify(foundPlayer));
    alert("Welcome, " + foundPlayer.name);
    window.location.href = "Profile.html";
} else {
    alert("Incorrect username or password");
}
});

