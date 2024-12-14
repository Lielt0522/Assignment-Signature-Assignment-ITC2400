const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const payment = document.getElementById("payment").value;


    if (!name ||!email ||!amount ||!payment) {
        alert("Please fill in all fields.");
        return;
    } else {
        window.location.href = "thank-you.html"
    }
})