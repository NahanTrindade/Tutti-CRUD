import express from "express";
import morgan from "morgan";
import router from "./app/config/router/router";
import { engine } from "express-handlebars";
const PORT = 3000

const app = express();

app.use(morgan("short"));

app.engine("handlebars", engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: "main",
    helpers: require(`${__dirname}/views/helpers/helpers.js`),
}));

app.set("view engine", "handlebars");
app.set("views", __dirname + '/views');

app.use("/css", express.static(__dirname + '/src/public/css'));
app.use("/js", express.static(__dirname + '/src/public/js'));

app.use(router);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
})