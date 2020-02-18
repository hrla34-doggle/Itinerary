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
        var input = {
            id: res.body.id,
            name: res.body.name,
            location: res.body.location,
            days: res.body.days,
            cities: JSON.stringify(res.body.cities.split),
            mapPic: res.body.mapPic,
            schedule: JSON.stringify(res.body.schedule),
            coordinates: JSON.stringify(res.body.coordinates)
        }

        models.post(input)
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
            var output = {
                id: val.id,
                name: val.name,
                location: val.location,
                days: val.days,
                cities: val.cities.split(','),
                mapPic: val.mapPic,
                schedule: JSON.parse(val.schedule),
                coordinates: JSON.parse(val.coordinates)
            };

            res.status(200).send(output);
        })
        .catch(err => res.status(400).send(err))
    }
}

module.exports = controllers;