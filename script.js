const rightContainers = document.querySelectorAll(".container");
const steps = document.querySelectorAll(".step");
const stepOneInput = document.querySelectorAll(".container_right_one input")
const pickPlan = document.querySelectorAll(".pick_plan")
const switcher = document.querySelector(".switch");
const addons = document.querySelector(".add_on");
const totalPrice = document.querySelector(".total");
const planPrice = document.querySelector(".plan_price");
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".previous");
const nextStepBtn = document.querySelector("#next_step_btn")

// let time;
// let currentContainer = 1;
// let currentStep = 0;

// if(prevBtn) {
// prevBtn.addEventListener("click", () => {
//     document.querySelector(`.step-${currentContainer}`).style.display = "none";
//     currentContainer--;  
//     document.querySelector(`.step-${currentContainer}`).style.display = "flex";
//     steps [currentStep].classList.remove("active")
// })}