const openBtn = document.querySelector("#open-btn"),
home = document.querySelector(".home"),
form_container = document.querySelector(".form-container"),
formClose = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw-hide");


openBtn.addEventListener("click", () => home.classList.add("show"))
formClose.addEventListener("click", () => home.classList.remove("show"));


signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form_container.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form_container.classList.remove("active");
});

// clc
function calculateSalary() {
    const name = document.getElementById('name').value;
    const level = document.getElementById('level').value;
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const da = parseFloat(document.getElementById('da').value);
    const ta = parseFloat(document.getElementById('ta').value);
    const hra = parseFloat(document.getElementById('hra').value);

    const totalSalary = basicSalary + da + ta + hra;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Salary Details for ${name}</h3>
                           <p>Level of CPC: ${level}</p>
                           <p>Basic Salary: ${basicSalary}</p>
                           <p>DA: ${da}</p>
                           <p>TA: ${ta}</p>
                           <p>HRA: ${hra}</p>
                           <p>Total Salary: ${totalSalary}</p>`;
}
