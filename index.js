import express from "express";
const morgan = require("morgan");
import router from "./app/config/router/router";
import { engine } from "express-handlebars";
import { v4 as uuidv4 } from "uuid";
import session from 'express-session'
const PORT = 3001;

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
app.use("/img", express.static(__dirname + '/src/public/img'));
app.use("/js", express.static(__dirname + '/src/public/js'));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    genid: (req) => {
        return uuidv4()
    },
    secret: 'Hi9Cf#mK98',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:60000*30}
}));

app.use((req, res, next) => {
    app.locals.isLogged = 'uid' in req.session;
    next();
})

app.use(router);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
})