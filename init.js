import app from "./app";

const PORT = 4000;

const handleListening = () =>
 console.log(`Listening on: http://localhost:${PORT}`);
//request, response를 추가하여 callback을 만든다


app.listen(PORT, handleListening);