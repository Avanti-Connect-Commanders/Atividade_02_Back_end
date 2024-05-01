import express, {request, response} from "express"
import { routes } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(routes)

routes.post

app.listen(3000, () => {
    console.log("Running server")
})