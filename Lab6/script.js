document.getElementById("registrationForm").addEventListener("submit", (event) => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const group = document.getElementById("group").value;

    if (password !== confirmPassword) {
        alert("Паролі не співпадають!");
        event.preventDefault();
    }

    if (group === "") {
        alert("Будь ласка, оберіть групу!");
        event.preventDefault();
    }
});