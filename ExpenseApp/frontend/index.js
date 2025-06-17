//ExpenseTracker App

function reload() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  window.addEventListener("DOMContentLoaded", initialize());
}

reload();

async function initialize() {
  try {
    const expenses = await axios.get("http://localhost:4000/api/expense");
    console.log(expenses.data.expense);
    const items = expenses.data.expense;
    items.map((item) => {
      display(item);
    });
  } catch (error) {
    console.log(error);
  }

  // sessionStorage.removeItem("itemId");
}

async function deleteItem(item, li) {
  try {
    const items = await axios.delete(
      `http://localhost:4000/api/expense/${item.id}`
    );
    reload();
  } catch (error) {
    console.log(error);
  }
}

function display(item) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const del = document.createElement("button");
  const edit = document.createElement("button");

  li.textContent =
    item.expenseAmount + "-" + item.description + "-" + item.category + "   ";

  del.textContent = "Delete" + "    ";
  edit.textContent = "Edit" + "     ";

  del.addEventListener("click", () => {
    deleteItem(item, li);
  });

  edit.addEventListener("click", () => {
    let btn = document.getElementById("btn");

    console.log(btn);

    btn.textContent = "Update";
    EditItem(item);
    deleteItem(item);
  });

  li.appendChild(del);
  li.appendChild(edit);

  ul.appendChild(li);
}

function EditItem(item) {
  sessionStorage.setItem("itemId", item.id);
  localStorage.setItem("item", JSON.stringify(item));

  document.getElementById("Exp").value = item.expenseAmount;

  document.getElementById("desc").value = item.description;

  const category = (document.getElementById("category").value = item.category);
}

async function handleForm(event) {
  event.preventDefault();

  console.log(event.target.ExpAmount.value);

  const amount = event.target.ExpAmount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const data = {
    expenseAmount: amount,
    description: description,
    category: category,
  };

  try {
    const response = await axios.post(
      "http://localhost:4000/api/expense/add",
      data
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  event.target.ExpAmount.value = "";
  event.target.description.value = "";
  event.target.category.value = "";

  reload();
}
