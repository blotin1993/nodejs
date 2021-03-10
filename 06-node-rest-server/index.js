require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.get('/users', (req, res) => {

  res.json(users)
})
app.post('/users', (req, res) => {
    const user = req.body
    user.id = 434
    res.status(201).json(user)
})
app.put('/users/:id', (req, res) => {
    const user = req.body
    user.id = 422
    const result = {
        message: 'User updated.',
        user
    }
    res.status(201).json(result)
})
app.patch('/users', (req, res) => {
    const result = {
        message: 'User updated with patch.'
    }
    res.status(201).json(result)
})
app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    // const id = req.params.id
    const result = {
        message: `User with ${id} deleted.`
    }
    res.status(201).json(result)
})
 
app.listen(port, () =>{
    console.log(`Server started in port: ${port}`)
})