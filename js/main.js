let loginBtn = document.querySelector('#loginBtn');
let loginform = document.querySelector('#login_form');
let crossbtn = document.querySelector('#cross_btn');



loginBtn.addEventListener("click", function () {
        loginform.style.display = "flex";
    })

function showForm() {
    loginform.style.display = "block";
}
setTimeout(showForm, 3000);

crossbtn.addEventListener("click", function() {
    loginform.style.display = "none";
});

crossbtn.addEventListener("click", function(event) {
    event.preventDefault();
});


