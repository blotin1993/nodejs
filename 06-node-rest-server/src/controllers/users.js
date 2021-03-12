const express = require('express')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req = Request, res) => {
    const users = [
        {
            id:1,
            name: 'Fernando'
        },
        {
            id:2,
            name: 'Juan'
        }
    ]
   
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = (req, res) => {

    res.json(users)
  }
  const updateUser = (req, res) => {
    const user = req.body
      user.id = 434
      res.status(201).json(user)
  }

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePartialUser = (req, res) => {
    const user = req.body
      user.id = 434
      res.status(201).json(user)
  }
  
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deleteUser = (req, res) => {
      const user = req.body
      user.id = 422
      const result = {
          message: 'User updated.',
          user
      }
      res.status(201).json(result)
  }

   
module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}
  