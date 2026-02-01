const btnEl = document.querySelector(".generate-btn");
const passwordEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
})

copyIconEl.addEventListener("click", () => {
    if(passwordEl.value){
        copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 2000);
    }

})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
}
    passwordEl.value = password;
    alertContainerEl.innerHTML = password + " copied!";

}

function copyPassword() {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(passwordEl.value); 
}