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

inputs.forEach( (input) => {
  input.addEventListener("focus", () => {
    input.classList.add("active");
  })

  input.addEventListener("blur", () => {
    input.classList.remove("active");
  })
})
