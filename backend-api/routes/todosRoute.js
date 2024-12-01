import express from "express";
import todosData from "../modules/todosData.js";


const todosRoutes = express.Router()



todosRoutes.get('/', (req, res) => {
    res.status(200).send(
        {
            status: 200,
            message: 'success',
            data: todosData
        })
})




export default todosRoutes;