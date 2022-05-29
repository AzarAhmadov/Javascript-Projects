const filterUser = document.querySelector(".filter-user");
async function getData() {
  const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await apiUrl.json();
  data.forEach((el) => {
    filterUser.innerHTML += `
  <div class="filter-flex">
  <img src="https://picsum.photos/200/300" alt="">
  <div class="filter-column">
      <span class="name"> ${el.name} </span>
      <span class="location"> ${el.address.city} </span>
  </div>
</div>
  `;

    const inputFilter = document.querySelector("#search");
    inputFilter.addEventListener("keyup", () => {
      const filter_item = document.querySelectorAll(".filter-flex");
      const inputValue = inputFilter.value.toUpperCase();

      filter_item.forEach((item) => {
        if (item.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

getData();
