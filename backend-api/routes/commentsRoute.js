import express from "express";
import commentsData from "../modules/commentsData.js";


const commentsRoutes = express.Router()



commentsRoutes.get('/', (req, res) => {
    res.status(200).send(
        {
            status: 200,
            message: 'success',
            data: commentsData
        })
})



export default commentsRoutes;