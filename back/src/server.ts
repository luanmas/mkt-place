import router from "./routes/seuNegocio";
import express from 'express'

const app = express();

app.use("/api" , express.json() , router);

app.listen(3333, () => console.log('server running on port 3333'));