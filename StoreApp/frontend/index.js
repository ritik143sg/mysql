const handleSubmit = async (event) => {
  event.preventDefault();

  const itemName = event.target.name.value;
  const itemDesc = event.target.desc.value;
  const itemPrice = event.target.price.value;
  const itemQyt = event.target.qty.value;

  const item = {
    itemName: itemName,
    itemDesc: itemDesc,
    itemPrice: itemPrice,
    itemQyt: itemQyt,
  };

  try {
    const items = await axios.post("http://localhost:4000/api/item/add", item);
    console.log(items);
  } catch (error) {
    console.log(error);
  }

  event.target.name.value = "";
  event.target.desc.value = "";
  event.target.price.value = "";
  event.target.qty.value = "";
  initialize();
};

const display = async (items) => {
  const ul = document.querySelector("ul");

  items.forEach((item) => {
    const li = document.createElement("li");
    const del = document.createElement("button");
    del.innerText = "Delete";

    del.addEventListener("click", async () => {
      const id = item.id;

      const response = await axios.delete(
        `http://localhost:4000/api/item/${id}`
      );
      console.log(response);
      initialize();
    });

    const edit1 = document.createElement("button");
    edit1.innerText = "Buy 1";
    edit1.addEventListener("click", async () => {
      const id = item.id;

      const response = await axios.patch(
        `http://localhost:4000/api/item/${id}`,
        { itemQyt: item.itemQyt - 1, operation: "Sub" }
      );
      console.log(response);
      initialize();
    });
    const edit2 = document.createElement("button");
    edit2.innerText = "Buy 2";
    edit2.addEventListener("click", async () => {
      const id = item.id;

      const response = await axios.patch(
        `http://localhost:4000/api/item/${id}`,
        { itemQyt: item.itemQyt - 2, operation: "Sub" }
      );
      console.log(response);
      initialize();
    });
    const edit3 = document.createElement("button");
    edit3.innerText = "Buy 3";
    edit3.addEventListener("click", async () => {
      const id = item.id;

      const response = await axios.patch(
        `http://localhost:4000/api/item/${id}`,
        { itemQyt: item.itemQyt - 3, operation: "Sub" }
      );
      console.log(response);
      initialize();
    });

    const edit4 = document.createElement("button");
    edit4.innerText = "Add 10";
    edit4.addEventListener("click", async () => {
      const id = item.id;

      const response = await axios.patch(
        `http://localhost:4000/api/item/${id}`,
        { itemQyt: Number(Number(item.itemQyt) + 10), operation: "Add" }
      );
      console.log(response);
      initialize();
    });

    li.innerText = `Item: ${item.itemName} - Desc: ${item.itemDesc}-Price: ${item.itemPrice}- Qyt: ${item.itemQyt}`;

    li.appendChild(edit1);
    li.appendChild(edit2);
    li.appendChild(edit3);
    li.appendChild(del);
    li.appendChild(edit4);
    ul.appendChild(li);
  });
};

const initialize = async () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  try {
    const response = await axios.get("http://localhost:4000/api/item");
    console.log("User Added:", response.data);

    display(response.data);
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

initialize();
