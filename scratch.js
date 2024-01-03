// console.log(process)

try{

}catch(error){
    console.log("-----", error.message, "------")
    res.status(400).send("error, read logs for details")
}

// expression ? true : false


// asyncAct1.then((thing1) => {
//     asyncAct2().then((thing2) => {

//     })
// })

// const thing1 = await asyncAct1()
// const thing2 = await asyncAct12()


const cheese = 1 > 2 ? "gouda" : (1 === 1 ? "munster" : "cheddar")
console.log(cheese)