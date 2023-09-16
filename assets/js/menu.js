document.addEventListener("DOMContentLoaded", (event) => {
  let navAll = document.querySelector(".navbar__item-all");
  let navActive = document.querySelector(".navbar__item-active");
  let navCompleted = document.querySelector(".navbar__item-completed");

  let itemAll = document.querySelector(".item__all");
  let itemActive = document.querySelector(".item__active");
  let itemCompleted = document.querySelector(".item__completed");

  let layoutAll = document.querySelector(".layout__first");
  let layoutActive = document.querySelector(".layout__second");
  let layoutCompleted = document.querySelector(".layout__third");

  let addButton = document.querySelector(".add-bar__btn");
  let addButtonActive = document.querySelector(".add-bar__btn-active");

  let removeButton = document.querySelector(".button__btn");

  navAll.addEventListener("click", (event) => {
    let visible = navAll.querySelector(".item--active");
    if (!visible) {
      /* NAVBAR */
      itemAll.classList.add("item--active");
      itemActive.classList.remove("item--active");
      itemCompleted.classList.remove("item--active");

      /* LAYOUT */
      layoutAll.classList.add("layout__element--active");
      layoutActive.classList.remove("layout__element--active");
      layoutCompleted.classList.remove("layout__element--active");
    }
  });

  navActive.addEventListener("click", (event) => {
    let visible = navActive.querySelector(".item--active");
    if (!visible) {
      /* NAVBAR */
      itemAll.classList.remove("item--active");
      itemActive.classList.add("item--active");
      itemCompleted.classList.remove("item--active");

      /* LAYOUT */
      layoutAll.classList.remove("layout__element--active");
      layoutActive.classList.add("layout__element--active");
      layoutCompleted.classList.remove("layout__element--active");
    }
  });

  navCompleted.addEventListener("click", (event) => {
    let visible = navCompleted.querySelector(".item--active");
    if (!visible) {
      /* NAVBAR */
      itemAll.classList.remove("item--active");
      itemActive.classList.remove("item--active");
      itemCompleted.classList.add("item--active");

      /* LAYOUT */
      layoutAll.classList.remove("layout__element--active");
      layoutActive.classList.remove("layout__element--active");
      layoutCompleted.classList.add("layout__element--active");
    }
  });

  const initialData = [
    { id: 0, task: "Do coding challenges", completed: false },
    { id: 1, task: "Learn JavaScript", completed: true },
  ];

  // Guardar los datos iniciales en localStorage
  localStorage.setItem("tasks", JSON.stringify(initialData));

  tasks = JSON.parse(localStorage.getItem("tasks"));

  const list = document.querySelector(".first__list");

  // LAYOUT - TODOS
  tasks.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("first__item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.classList.add("first__item-checkbox");

    const label = document.createElement("label");
    label.classList.add("first__item-label");
    label.textContent = item.task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    list.appendChild(listItem);
  });

  //LAYOUT - ACTIVOS
  const list2 = document.querySelector(".second__list");
  let dataActive = [];
  let dataCompleted = [];

  tasks.forEach((item) => {
    if (!item.completed) {
      dataActive.push(item);
    } else {
      dataCompleted.push(item);
    }
  });

  dataActive.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("second__item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.classList.add("second__item-checkbox");

    const label = document.createElement("label");
    label.classList.add("second__item-label");
    label.textContent = item.task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    list2.appendChild(listItem);
  });

  //LAYOUT - COMPLETADOS
  let list3 = document.querySelector(".third__list");
  dataCompleted.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("third__item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.classList.add("third__item-checkbox");

    const label = document.createElement("label");
    label.classList.add("third__item-label");
    label.textContent = item.task;

    const button = document.createElement("button");
    button.classList.add("material-symbols-outlined");
    button.classList.add("third__item-delete-icon");
    button.textContent = "delete";
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(button);
    list3.appendChild(listItem);
  });

  

  // AGREGAR - TAB TODOS
  addButton.addEventListener("click", (event) => {
    let inputAdd = document.querySelector(".add-bar__input");

    let nextId = 0;
    let tasks = [];

    if (localStorage.getItem("tasks").length > 0) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      nextId = tasks.length;
    }

    let element = {
      id: nextId,
      task: inputAdd.value,
      completed: false,
    };

    tasks.push(element);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    /* TAB DE TODOS */
    const list = document.querySelector(".first__list");

    const listItem = document.createElement("li");
    listItem.classList.add("first__item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("first__item-checkbox");

    const label = document.createElement("label");
    label.classList.add("first__item-label");
    label.textContent = element.task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    list.appendChild(listItem);

    /* TAB DE ACTIVOS */
    const list2 = document.querySelector(".second__list");

    const listItem2 = document.createElement("li");
    listItem2.classList.add("second__item");

    const checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.classList.add("second__item-checkbox");

    const label2 = document.createElement("label");
    label2.classList.add("second__item-label");
    label2.textContent = element.task;

    listItem2.appendChild(checkbox2);
    listItem2.appendChild(label2);
    list2.appendChild(listItem2);
  });

  // AGREGAR - TAB ACTIVOS
  addButtonActive.addEventListener("click", (event) => {
    let inputAdd = document.querySelector(".add-bar__input-active");

    let nextId = 0;
    let tasks = [];

    if (localStorage.getItem("tasks").length > 0) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      nextId = tasks.length;
    }

    let element = {
      id: nextId,
      task: inputAdd.value,
      completed: false,
    };

    tasks.push(element);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    /* TAB DE TODOS */
    const list = document.querySelector(".first__list");

    const listItem = document.createElement("li");
    listItem.classList.add("first__item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("first__item-checkbox");

    const label = document.createElement("label");
    label.classList.add("first__item-label");
    label.textContent = element.task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    list.appendChild(listItem);

    /* TAB DE ACTIVOS */
    const list2 = document.querySelector(".second__list");

    const listItem2 = document.createElement("li");
    listItem2.classList.add("second__item");

    const checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.classList.add("second__item-checkbox");

    const label2 = document.createElement("label");
    label2.classList.add("second__item-label");
    label2.textContent = element.task;

    listItem2.appendChild(checkbox2);
    listItem2.appendChild(label2);
    list2.appendChild(listItem2);

  });

  // Eliminar todos - TAB DE COMPLETADOS
  removeButton.addEventListener("click", () => {
    localStorage.setItem("tasks", []);

    const list_1 = document.querySelector(".first__list");
    const list_2 = document.querySelector(".second__list");
    const list_3 = document.querySelector(".third__list");

    while (list_1.firstChild) {
      list_1.removeChild(list_1.firstChild);
    }
    while (list_2.firstChild) {
      list_2.removeChild(list_2.firstChild);
    }
    while (list_3.firstChild) {
      list_3.removeChild(list_3.firstChild);
    }
  });

/* MOVER TASKS DE ACTIVOS -> COMPLETADOS  DESDE EL TAB */
const checkboxes = document.querySelectorAll(".second__item-checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const listItem = checkbox.closest("li");
    const allItem = listItem.querySelector(".second__item-label");
    const labelText = allItem.textContent;

    const ul = listItem.parentElement;
    ul.removeChild(listItem);

    const listCompleted = document.querySelector(".third__list");

    const itemCompleted = document.createElement("li");
    itemCompleted.classList.add("third__item");

    const input = document.createElement("input");
    input.classList.add("third__item-checkbox");
    input.type = "checkbox";
    input.checked = true;

    const label = document.createElement("label");
    label.classList.add("third__item-label");
    label.textContent = labelText;

    const button = document.createElement("button");
    button.classList.add("material-symbols-outlined");
    button.classList.add("third__item-delete-icon");
    button.textContent = "delete";

    itemCompleted.appendChild(input);
    itemCompleted.appendChild(label);
    itemCompleted.appendChild(button);
    listCompleted.appendChild(itemCompleted);

  });
});

/* Eliminar solo uno - TAB DE COMPLETADOS */
let deleteButtons = document.querySelectorAll(".third__item-delete-icon");

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", (event) => {

    let completedItem = deleteButton.closest("li");
    const label = completedItem.querySelector(".third__item-label");
    const labelText = label.textContent;

    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter((task) => task.task !== labelText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    completedItem.remove();

    const ul = document.querySelector(".first__list");
    const allItems = layoutAll.querySelectorAll("li");
    for (let item of allItems) {
      if (item.textContent === labelText) {
        ul.removeChild(item);
        break;
      }
    }
  });
});


});
