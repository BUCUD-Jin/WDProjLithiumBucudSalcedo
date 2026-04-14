document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const dimension = document.getElementById('dimension').value;

const theInterests = [];
const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
checkboxes.forEach((checkbox) => {
    theInterests.push(checkbox.value);
});

const players = JSON.parse(localStorage.getItem('minecraftPlayers')) || [];
const doesUsernameExist = players.some(player => player.name === username);
const doesEmailExist = players.some(player => player.email === email);

if (doesUsernameExist) {
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

    players.push(userData);
    localStorage.setItem('minecraftPlayers', JSON.stringify(players));
    localStorage.setItem('minecraftUser', JSON.stringify(userData));
    alert("Account created successfully! Welcome, " + username);
    window.location.href = "Profile.html";

}
});
