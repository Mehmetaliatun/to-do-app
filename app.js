//* ======================================================
//*                     TODO APP
//* ======================================================

//? Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

// todos dizisini localStorage'daki verile ile guncelle
//! eger localStorage tofos adinda bir item bulunmaz ise
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos);

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};

renderSavedTodos();

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new to-do");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };

    //! yeni bir lielementi olusturup bunu DOM'a bas
    createListElement(newTodo);

    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);
    todoInput.value = "";
  }
});

function createListElement(newTodo) {
  const { id, completed, text } = newTodo; //! destroy

  //? yeni bir li element olustur ve bu elemente obje icersindeki id degerini ve comp. class ata.
  const li = document.createElement("li");
  //   li.id = newTodo.id;
  li.setAttribute("id", id);
  //! yukaridaki 2 yontem ile girilen degeri id'ye aktardik.

  //! altta yazan her iki kod ayni islevi goruyor.
  //   newTodo.completed ? li.classList.add("completed") : "";
  completed && li.classList.add("completed");

  //? okey ikonu olustur ve li elementine bagla
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? todo basligi icin bir p elementi ve yazi serisi olustur ve li'ye bagla.
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(text);
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
}
//! ul elementinin cocuklarindan herhangi birisinden bir event gelirse bunu tespit et ve gerekeni yap(capturing)
todoUl.addEventListener("click", (e) => {
  console.log(e.target);
  //! event bir delete butonundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  //! event bir oket butonundan geldi ise
  if (e.target.classList.contains("fa-check")) {
    //? ilgili li elementinden checked adinda bir class varsa bunu sil aksi takdirde ekle (DOM)
    e.target.parentElement.classList.toggle("completed");
  }
});

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
