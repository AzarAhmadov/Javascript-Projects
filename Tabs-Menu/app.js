const tab_header = document.querySelectorAll('.tab_header');
const tab_item = document.querySelectorAll('.tab_item');

tab_header.forEach((tab, index) => tab.addEventListener('click', () => {

    const activeTab = document.querySelector('.tab_header.active');
    const activeTabItem = document.querySelector('.tab_item.active');

    if (activeTab) {
        activeTab.classList.remove('active');
    }

    if (activeTabItem) {
        activeTabItem.classList.remove('active')
    }

    tab_item[index].classList.add('active')
    tab.classList.add('active');
}));