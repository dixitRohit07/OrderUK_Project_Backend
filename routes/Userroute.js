const express = require ("express");
const auth = require("../controllers/userController");

const router = express.Router();


router.post("/register",auth.sendData);
router.post("/signin",auth.loginData);

router.get("/productInfo",auth.BurgerData);

router.get("/friesDetails",auth.FriesData);

router.get("/coldDrinksDetails",auth.ColdDrinkData);

router.post("/addCartInfo",auth.addCartData)

router.get("/getCartInfo",auth.getCartData)

router.delete("/deleteCartFood",auth.deleteCartFoodData)

router.post("/addressPost",auth.addressPostData)


router.get("/getAddress",auth.getAddressData)

router.delete("/deleteadd",auth.deleteAddressData)

router.post("/userData",auth.userData)

router.put("/profileData",auth.profileData)

router.get("/getCardData",auth.getCardData)













module.exports=router;