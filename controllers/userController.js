const User = require("../models/userinfo");

const bcrypt = require("bcryptjs");

const BurgerInfo = require("../models/burger");

const friesInfo = require("../models/fries");

const Cold = require("../models/coldDrinks");

const Cart = require("../models/Cart");
const Add = require("../models/Addresses");
const { response } = require("express");

const Card = require("../models/card");

// const Add = require('../models/addAllAdresses')

const sendData = async (req, res) => {
  try {
    console.log(req.body);

    const { name, phone, email, password } = req.body;

    const userexist = await User.findOne({ email });

    console.log("dsvsdvsd", userexist);

    if (userexist) {
      return;
      res.status(400).json({ msg: "email exist" });
    }

    const hash_pass = await bcrypt.hash(password, 15);

    let user = new User({
      name: name,
      phone: phone,
      email: email,
      password: hash_pass,
    });

    user
      .save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).json({ msg: "Data store succesfully" });
  } catch (error) {
    console.log(error);
  }
};

const loginData = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    const userexist = await User.findOne({ email });

    if (!userexist) {
      return;
      res.status(400).json({ msg: "Invalid Credentials" });
    }

    const compare = await bcrypt.compare(password, userexist.password);

    console.log(compare);

    if (compare) {
      res.status(200).json({ msg: "user details matched..." });
    } else {
      res.status(400).json({ msg: "user details are not matched..." });
    }
  } catch (error) {
    console.log(error);
  }
};

const BurgerData = async (req, res) => {
  try {
    const responce = await BurgerInfo.find();

    // console.log(responce);

    if (!responce) {
      return;

      res.status(400).json({ msg: "Data is not Fetch" });
    }

    res.status(200).json({ msg: responce });
  } catch (error) {
    console.log(error);
  }
};

const FriesData = async (req, res) => {
  try {
    const response = await friesInfo.find();

    if (!response) {
      return;
      res.status(400).json({ msg: "data is not fetched" });
    }

    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

const ColdDrinkData = async (req, res) => {
  try {
    const response = await Cold.find();
    // console.log("dfgerg");
    // console.log(response);
    if (!response) {
      return res.status(400).json({ msg: "data is not fetched" });
    }
    res.status(200).json({ msg: response });
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const addCartData = async (req, res) => {
  try {
    const { title, price } = req.body;

    const cart = new Cart({
      title: title,
      price: price,
    });
    console.log(cart);

    cart
      .save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    res.status(200).json({ msg: "data is saved" });
  } catch (error) {
    console.log(error);
  }
};

const getCartData = async (req, res) => {
  const response = await Cart.aggregate([
    {
      $group: {
        _id: { title: "$title", price: "$price" },
        quantity: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        title: "$_id.title",
        price: "$_id.price",
        quantity: 1,
      },
    },
  ]);

  if (!response) {
    return res.status(400).json({ msg: "data not found" });
  }
  res.status(200).json({ msg: response });
};

const deleteCartFoodData = async (req, res) => {
  console.log(req.body);

  const { title } = req.body;

  const result = await Cart.findOneAndDelete({ title: title });

  if (result) {
    return res.status(200).json({ msg: "data is delete" });
  }
};

const addressPostData = async (req, res) => {
  try {
    console.log(req.body);

    const { address, number } = req.body;

    let useradd = new Add({
      address: address,
      number: number,
    });

    useradd
      .save()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

const getAddressData = async (req, res) => {
  try {
    let response = await Add.find();

    if (!response) {
      return;
      res.status(400).json({ msg: "data not fetched.." });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

const deleteAddressData = async (req, res) => {
  try {
    const { _id } = req.body;

    const result = await Add.deleteOne({ _id: _id });

    if (result) {
      res.status(200).json({ msg: "done..." });
    }
  } catch (error) {
    console.log(error);
  }
};

const userData = async (req, res) => {
  try {
    console.log(req.body);

    const { email } = req.body;

    const user = await User.findOne({ email });

    console.log(user);

    res.status(200).json({ msg: user });
  } catch (error) {
    console.log(error);
  }
};


const profileData = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, old_email } = req.body;

    const user = await User.updateOne(
      { email: old_email },
      {
        $set: {
          email: email,
          name: name,
        },
      }
    );
    console.log("uuuuuuuuuu", user);

    res.status(200).json({ msg: "data updated" });
  } catch (error) {
    console.log(error);
  }
};

const getCardData = async (req, res) => {
  try {
    const response = await Card.find();

    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendData,
  loginData,
  BurgerData,
  FriesData,
  ColdDrinkData,
  addCartData,
  getCartData,
  deleteCartFoodData,
  addressPostData,
  getAddressData,
  deleteAddressData,
  userData,
  profileData,
  getCardData,
};
