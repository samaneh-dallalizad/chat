const Product = require('../models/products')
const { Router } = require('express')

const router = new Router()

router.get('/products',(req,res,next)=>{
  
  Product.findAll().
  then(response => res.json(response))
  .catch(error => next(error))
})


router.post('/products', (req, res, next) => {

  Product.create(req.body)
    .then(product => {
      res.status(201).json(product)
    })
    .catch(error => next(error))

})


router.get('/products/:id', (req, res, next) => {

  Product.findByPk(req.params.id)
    .then(product => {
      if (!product)
        res.status(404).json({ message: `products is not exist` })
      else
        res.json(product)
    })
    .catch(error => next(error))
})






module.exports = router;