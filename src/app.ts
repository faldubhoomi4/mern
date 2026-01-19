import Express from "express";
const app = Express();
app.get ("/", (req, res) => {
    res.send ("welcome to the server");
}); 


export default app;
 