document.querySelector('form').addEventListener('submit', function(event) { // This checks for the submit event on the form on the signup page //
    event.preventDefault();

// These next 4 lines of code get text from the input fields
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const dimension = document.getElementById('dimension').value;

const theInterests = []; // An array for storing the user's preferred interests
const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
checkboxes.forEach((checkbox) => {
    theInterests.push(checkbox.value);
});

const players = JSON.parse(localStorage.getItem('minecraftPlayers')) || [];
const doesUsernameExist = players.some(player => player.name === username);
const doesEmailExist = players.some(player => player.email === email);

if (doesUsernameExist) { // This if statement checks if a username already exists in the database
    alert("This username is already taken");
    return;
} else if (doesEmailExist) {
    alert("This email address is already in use");
} else {
    const userData = {
        name: username,
        email: email,
        pass: password,
        favoriteDimension: dimension,
        interests: theInterests
    };

    players.push(userData); // Adds a new user object to the list of players //
    localStorage.setItem('minecraftPlayers', JSON.stringify(players));
    localStorage.setItem('minecraftUser', JSON.stringify(userData));
    alert("Account created successfully! Welcome, " + username);
    window.location.href = "Profile.html";

}
});
