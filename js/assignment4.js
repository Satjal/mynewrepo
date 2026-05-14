document.getElementById("formulario").addEventListener("submit", function(e) {

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let postal = document.getElementById("postal").value.trim();
    let province = document.getElementById("province").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let postalRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    
    if (!fname || !lname || !email || !postal || !province || !age || !password || !confirm) {
        e.preventDefault();
        alert("All fields are required.");
        return;
    }

    if (!postalRegex.test(postal)) {
        e.preventDefault();
        alert("Postal code must be in format A0A0A0.");
        return;
    }

    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("Enter a valid email.");
        return;
    }

    if (age < 18) {
        e.preventDefault();
        alert("You must be at least 18 years old.");
        return;
    }

    let validProvinces = ["QC", "ON", "MN", "SK", "AB", "BC"];
    if (!validProvinces.includes(province)) {
        e.preventDefault();
        alert("Select a valid province.");
        return;
    }

    if (!passwordRegex.test(password)) {
        e.preventDefault();
        alert("Password must have at least 6 characters, one uppercase letter, and one number.");
        return;
    }

    if (password !== confirm) {
        e.preventDefault();
        alert("Passwords do not match.");
        return;
    }

   
    alert("Form valid! Submitting...");
});


const params = new URLSearchParams(window.location.search);

const fnameParam = params.get("fname");
const emailParam = params.get("email");

if (fnameParam) {

    console.log("Name:", fnameParam);
    console.log("Email:", emailParam);

   
    document.cookie = "fname=" + fnameParam + "; path=/";

    console.log("Cookie:", document.cookie);

    
    localStorage.setItem("fname", fnameParam);
    localStorage.setItem("email", emailParam);

    console.log("LocalStorage:", localStorage.getItem("fname"));
}