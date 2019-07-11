let mysql = require("mysql")
let connection= mysql.createConnection
let config =require("../config/config.js")
function getall(req, res){
  let connection=mysql.createConnection(config)
  let sql="call scurso()";
  connection.query(sql,true,(error,results,fields)=>{
  if (error){
  res.send(error.message);
  }else{
   res.json(results[0]);
 }
 connection.end();
});
}

function eliminar(req, res){
  res.json({message:"elimiar", usuarios:[{usuario:'hola', clave:'1234'}]});
} 
function crear(req, res){
    const {nombre,apellido,usuario,estado,contra} = req.body;

    let connection=mysql.createConnection(config)
    let sql="CALL ICURSO('"+nombre+"','"+apellido+"','"+usuario+"','"+estado+"','"+contra+"')";
    connection.query(sql,true,(error,results,fields)=>{
    if (error){
    res.send(error.message);
    }else{
     res.status(200).json(results);
   }
   connection.end();
  });
} 
function editar(req, res){
  res.json({message:"editar", usuarios:[{usuario:'hola', clave:'1234'}]});
} 
module.exports = {
  getall, eliminar,crear,editar
};
    