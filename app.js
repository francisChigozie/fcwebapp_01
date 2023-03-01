const app = require("express")();

const PORT = process.env.PORT || 4001;

app.get("", (req, res) => {
    res.send("Hello world and welcome now!");
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});