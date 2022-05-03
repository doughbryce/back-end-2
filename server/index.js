const express = require(`express`);
const cors = require(`cors`);

const app = express();

app.use(express.json());
app.use(cors());

const {getHouses, createHouse, updateHouse, deleteHouse} = require(`./controller.js`);

app.get(`/api/houses`, getHouses);
app.post(`/api/houses`, createHouse);
app.put(`/api/houses/:id`, updateHouse);
app.delete(`/api/houses/:id`, deleteHouse);


let SERVER_PORT = 4004;

app.listen(SERVER_PORT, () => console.log(`server running on port 4004`))