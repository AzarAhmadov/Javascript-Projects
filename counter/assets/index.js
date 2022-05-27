let counter_value = document.querySelector(".counter-value");
const dec_btn = document.querySelector(".dec-btn");
const inc_btn = document.querySelector(".inc-btn");

dec_btn.addEventListener("click", () => {
  let counValue = Number(counter_value.textContent) + 1;
  counter_value.textContent = counValue;
});

inc_btn.addEventListener("click", () => {
  let counValue = Number(counter_value.textContent) - 1;
  counter_value.textContent = counValue;
  let finish = 0;
  if (counValue == -1) {
    counter_value.textContent = finish;
  }
});
