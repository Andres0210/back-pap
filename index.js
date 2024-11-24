const server = require("./src/app");
const { sequelize } = require("./src/DB_connection");
const port = process.env.PORT || 3001;

sequelize.sync({alter:true}).then(async()=>{
    console.log("connected database, master");
    server.listen(port, ()=>{
        console.log("listening on port " + port);
        
    })
    
}

)