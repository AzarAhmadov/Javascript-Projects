function slider() {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const listImg = document.querySelectorAll(".list-img");

  let i = 0;

  nextBtn.addEventListener("click", () => {
    i++;
    if (listImg.length - 1 < i) {
      i = 0;
    }
    listImg.forEach((item) => {
      item.classList.remove("active");
    });
    listImg[i].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    i--;
    if (0 >= i) {
      i = 0;
    }
    listImg.forEach((item) => {
      item.classList.remove("active");
    });
    listImg[i].classList.add("active");
  });
}

slider();
