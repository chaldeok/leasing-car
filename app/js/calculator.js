const carPriceInput = document.getElementById("car-price");
const carPriceRange = document.getElementById("range-car-price");
const initialFeeInput = document.getElementById("initial-fee");
const initialFeeRange = document.getElementById("range-fee");
const initialFeePercent = document.querySelector(".fee-percent");
const leaseTermInput = document.getElementById("lease-term");
const leaseTermRange = document.getElementById("rang-term");

const leasingSumInput = document.getElementById("leasing-sum");
const monthlyPaymentInput = document.getElementById("monthly-payment");

const inputs = document.querySelectorAll(".input-group__input");

const minCarPrice = 1000000;
const maxCarPrice = 6000000;
const minInitFeePercent = 10;
const maxInitFeePercent = 60;
const minTerm = 1;
const maxTerm = 60;
const startCarPrice = 3200000;
let initialFee = "330 000";

carPriceInput.value = 3300000;

reset();

function reset() {
  carPriceInput.value = minCarPrice;
  initialFeePercent.textContent = `${minInitFeePercent}%`;
  leaseTermInput.value = minTerm;
  initialFeeInput.value = Math.floor(carPriceInput.value * parseInt(initialFeePercent.textContent) / 100);
}

function calcMonthlyFee(price, initFee, ) {

}

function calcTotalSum() {}

function showLeasingConditions() {

}

inputs.forEach( (input) => {
  input.addEventListener("focus", () => {
    input.classList.add("active");
  })

  input.addEventListener("blur", () => {
    input.classList.remove("active");
  })
})
