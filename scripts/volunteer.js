const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;


    if (!name ||!email ||!phone) {
        alert("Please fill in all fields.");
        return;
    } else {
        window.location.href = "thank-you.html"
    }
})