require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3001;





app.listen(PORT, ()=>{
    console.log(`SERVER: listening on port http://localhost${PORT}`);
})