let express= require("express");
let app = express();
var port= process.env.PORT || 3000;
let cors= require("cors");
let rusuario= require("./src/routes/rusuario.js");
let rlogin= require("./src/routes/rlogin.js");
let rcurso= require("./src/routes/rcurso.js");
let morgan =  require("morgan");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use('/api', rusuario);
app.use('/api', rlogin);
app.use('/api', rcurso);
app.listen(port,()=>{
console.log("El servidor esta corriendo en el puerto: "+port);
});
module.exports = app;
