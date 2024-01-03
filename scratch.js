console.log(process)

try{

}catch(error){
    console.log("-----", error.message, "------")
    res.status(400).send("error, read logs for details")
}