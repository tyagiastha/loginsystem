const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/loginsystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`DB connection successful`);
}).catch((err) => {
    console.log(`DB connection failed ${err}`);
});