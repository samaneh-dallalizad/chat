const Sequelize = require('sequelize')
const sequelize = require('../db')

const Product = sequelize.define('products', {

  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    field: ' phone',
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    field: 'address',
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'products',
  
})



module.exports = Product

