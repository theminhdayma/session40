document
.getElementById("name")
.addEventListener("input", updateInformation);
document
.getElementById("age")
.addEventListener("input", updateInformation);
document
.getElementById("email")
.addEventListener("input", updateInformation);

function updateInformation() {
let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let email = document.getElementById("email").value;

let information = {
    name: name,
    age: age,
    email: email,
};

// Lưu lên local storage
localStorage.setItem("information", JSON.stringify(information));

// Hiển thị thông tin đã lưu trên màn hình
document.getElementById("displayInformation").innerHTML =
    JSON.stringify(information);
}