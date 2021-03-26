const express = require('express');
const axios = require('axios')

const CityRepository = require('../repositories/cityRepository')
const repository = new CityRepository()

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const cities = async (req, res) => {

    const response = await axios.get('https://reqres.in/api/users')

    res.json(response.data);
};

module.exports = test 