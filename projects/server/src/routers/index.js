// const usersRouter = require("./usersRouter");
const router = require('express').Router();

// Type router here ⬇️
// EXAMPLE : router.use("/users", usersRouter);

// APKG1-4 
const authRouter = require('./auth');
const userRouter = require('./user');
// APKG1-20
const categoryRouter = require('./category');
const rajaongkirRouter = require('./rajaOngkir');
// APKG1-32
const transactionRouter = require('./transaction')

const cartRouter = require('./cart')

router.use('/rajaongkir', rajaongkirRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use("/category", categoryRouter);
router.use("/transaction", transactionRouter);
router.use('/cart', cartRouter)

// APKG1-21
const productRouter = require('./product');
router.use("/product", productRouter);


module.exports = router;