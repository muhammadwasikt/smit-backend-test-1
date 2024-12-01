import express from "express";
import dotenv from "dotenv";
import combineRoutes from "./routes/combineRoutes.js";





const app = express()
dotenv.config();



combineRoutes.map((item)=> {
    return (
        app.use(item.path, item.element)
    )
});


// app.use('/post', postRoutes);








const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


