const houses = require(`./db.json`);
let globalId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
        // console.log(req.params)
    },
    deleteHouse: (req, res) => {

        // we need to use findIndex because the index != the id
        let index = houses.findIndex((house) => {
            return house.id === +req.params.id;
        })

        houses.splice(index, 1);
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {

    },
    updateHouse: (req, res) => {

    }
}