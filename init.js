import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
 console.log(`Listening on: http://localhost:${PORT}`);
//request, response를 추가하여 callback을 만든다


/* middleware */
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
    res.send('not happening');
};


app.get("/", middleware, handleHome); // "/"으로 접속 시 handleHome실행

app.get("/profile", handleProfile); // "/profile"로 접속 시 handleProfile실행

export default app;