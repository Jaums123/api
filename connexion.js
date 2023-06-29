const mysql=require('mysql')
const myconnect=require("express-myconnection")
const config={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.BD_PASSWORD,
    port:process.env.BD_PORTS,
    database:process.env.BD_DB,
    // host:"localhost",
    // user:"root",
    // password:"",
    // port:3306,
    // database:"notes"
}

module.exports={
    myconnect,mysql,config
}