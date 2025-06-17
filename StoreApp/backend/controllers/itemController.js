const Item = require("../models/itemModel");

const getAllItem = async (req, res) => {
  try {
    const items = await Item.findAll();

    res.status(201).json(items);
  } catch (error) {
    res.status(201).json(error);
  }
};

const addItem = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const item = await Item.create({
      itemName: data.itemName,
      itemDesc: data.itemDesc,
      itemPrice: data.itemPrice,
      itemQyt: data.itemQyt,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(201).json(error);
  }
};

const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    if (item.itemQyt < data.itemQyt) {
      res.status(500).json({ msg: "Update failed", error: error.message });
    }
    await Item.update({ itemQyt: data.itemQyt }, { where: { id: id } });

    const updatedItem = await Item.findByPk(id);

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ msg: "Update failed", error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;

    const item = await Item.findByPk(id);

    if (item) {
      await Item.destroy({
        where: {
          id: id,
        },
      });
    }

    res.status(201).json(item);
  } catch (error) {
    res.status(201).json(error);
  }
};

module.exports = { getAllItem, addItem, updateItem, deleteItem };
