import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";

const app = express();

//request, response를 추가하여 callback을 만든다
const handleHome = (req, res) => 
res.send('Hello from home');

const handleProfile = (req,res) => 
res.send("You are on my profile");

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

app.use("/user", userRouter); //use를 사용하면 router의 해당 라우터를 다 사용하겠다.

export default app;