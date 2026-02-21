document.querySelector('.createeacc').addEventListener('click', function(event) {
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

const userData =  {
    name: username,
    email: email,
    pass: password,
    favoriteDimension: dimension,
    interests: theInterests
};

localStorage.setItem('minecraftUser', JSON.stringify(userData));
alert("You've successfully created your account! Welcome " + username);
window.location.href = "Profile.html";

});
