const models = require('../database/models');

const controllers = {
    get: (req, res) => {
        models.get()
        .then((results)=>{
            res.status(200).send(results);
        })
        .catch((err)=>{
            res.status(400).send(err);
        })
    },
    post: (req, res) => {
        models.post(req.body)
        .then(()=>{
            res.status(200).send('Posted')
        })
        .catch((err)=>{
            res.status(400).send(err)
        })
    },
    delete: (req, res) => {
        models.delete(req.body)
        .then(()=>{res.status(200).send('deleted all')})
        .catch((err)=> {res.status(400).send(err)})
    },
    getOne: (req, res) => {
        var one = req.params;
        console.log(one)
        models.get({})
    }
}

module.exports = controllers;