const express = require(`express`);
const cors = require(`cors`);

const app = express();

app.use(express.json());
app.use(cors());



let SERVER_PORT = 4004;

app.listen(SERVER_PORT, () => console.log(`server running on port 4004`))