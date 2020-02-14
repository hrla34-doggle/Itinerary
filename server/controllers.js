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
    // This is the one I'm working on
    deleteOne: (req, res) => {
        models.deleteOne(req.params.id)
        .then(()=>{res.status(200).send(`Deleted item with id: ${req.params.id}`)})
        .catch((err)=> {res.status(400).send(err)})
    },
    getOne: (req, res) => {
        models.getOne(req.params.id)
        .then(val => {
            console.log(Array.isArray(val.cities));
            console.log(val);
            res.status(200).send(val)
        })
        .catch(err => res.status(400).send(err))
    }
}

module.exports = controllers;