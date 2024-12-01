import express from "express";
import usersData from "../modules/usersData.js";


const usersRoutes = express.Router()



usersRoutes.get('/', (req, res) => {
    res.status(200).send(
        {
            status: 200,
            message: 'success',
            data: usersData
        })
})




export default usersRoutes;