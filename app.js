//* ======================================================
//*                     TODO APP
//* ======================================================

//? Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new to-do");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);
    todoInput.value = "";
  }
});

const createListElement = (newTodo) => {
  //? yeni bir li element olustur ve bu elemente obje icersindeki id degerini ve comp. class ata.
  const li = document.createElement("li");
  //   li.id = newTodo.id;
  li.setAttribute("id", newTodo.id);
  //! yukaridaki 2 yontem ile girilen degeri id'ye aktardik.

  //? okey ikonu olustur ve li elementine bagla
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? todo basligi icin bir p elementi ve yazi serisi olustur ve li'ye bagla.
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(newTodo.text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  //? delete ikonu olustur ve li elementine bagla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //?meydana gelen li elementini ul'ye child olarak ata
  todoUl.appendChild(li);

  console.log(li);

  todoUl.appendChild(li);
};

//? enter tusu ile ekleme mumkun olsun
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});
//? baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};

// fa-solid fa-xmark wrong ignore
