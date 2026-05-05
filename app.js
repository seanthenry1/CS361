const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;

// Handlebars setup
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

const locations = [
    {
        id: 1,
        name: "Berkeley Marina",
        wind: "8 mph",
        surf: "1.5 ft",
        waterTemp: "58°F",
        uvIndex: "Moderate",
        safety: "Safe",
        advisory: false
    },
    {
        id: 2,
        name: "Alameda Marina",
        wind: "14 mph",
        surf: "2.5 ft",
        waterTemp: "57°F",
        uvIndex: "High",
        safety: "Use Caution",
        advisory: false
    },
    {
        id: 3,
        name: "Sausalito",
        wind: "22 mph",
        surf: "4 ft",
        waterTemp: "55°F",
        uvIndex: "High",
        safety: "Dangerous",
        advisory: true
    }
];

app.get("/locations", (req, res) => {
    res.render("locations", { locations });
});

app.get("/conditions", (req, res) => {
    const location = locations.find(
        loc => loc.id === parseInt(req.query.id)
    );

    res.render("conditions", { location });
});


let favorites = [];

app.post("/favorites/:id", (req, res) => {
    const location = locations.find(
        loc => loc.id === parseInt(req.params.id)
    );

    const alreadySaved = favorites.find(
        fav => fav.id === location.id
    );

    if (!alreadySaved) {
        favorites.push(location);
    }

    res.redirect("/favorites");
});

app.get("/favorites", (req, res) => {
    res.render("favorites", { favorites });
});

// ADD THIS
app.post("/favorites/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);

    favorites = favorites.filter(
        fav => fav.id !== id
    );

    res.redirect("/favorites");
});


app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});


