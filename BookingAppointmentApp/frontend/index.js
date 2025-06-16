const handleSubmit = async (event) => {
  event.preventDefault();

  const data = {
    name: event.target.username.value,
    email: event.target.email.value,
    phoneNo: event.target.phoneNo.value,
  };

  try {
    const response = await axios.post("http://localhost:4000/api/users", data);
    console.log("User Added:", response.data);
  } catch (error) {
    console.error("Error adding user:", error.response?.data || error.message);
  }

  event.target.username.value = " ";
  event.target.email.value = " ";
  event.target.phoneNo.value = " ";
  initialize();
};

const display = async (users) => {
  const ul = document.querySelector("ul");

  users.forEach((element) => {
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerText = "Delete";

    del.addEventListener("click", async () => {
      const id = element.id;

      const response = await axios.delete(
        `http://localhost:4000/api/users/${id}`
      );
      console.log(response);
      initialize();
    });

    const edit = document.createElement("button");
    edit.innerText = "Edit";

    li.innerText = `${element.name}-${element.email}-${element.phoneNo}`;
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);
  });
};

const initialize = async () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  try {
    const response = await axios.get("http://localhost:4000/api/users");
    console.log("User Added:", response.data);

    display(response.data);
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

initialize();
