import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
 console.log(`Listening on: http://localhost:${PORT}`);
//request, response를 추가하여 callback을 만든다
const handleHome = (req, res) => 
res.send('Hello from home');

const handleProfile = (req,res) => 
res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log('Between');
    next();
};

app.use(betweenHome); //middleware

app.get("/", betweenHome, handleHome); // "/"으로 접속 시 handleHome실행

app.get("/profile", handleProfile); // "/profile"로 접속 시 handleProfile실행

app.listen(PORT, handleListening);