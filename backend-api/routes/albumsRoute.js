import express from "express";
import albumsData from "../modules/albumsData.js";


const albumsRoutes = express.Router()



albumsRoutes.get('/', (req, res) => {
    res.status(200).send(
        {
            status: 200,
            message: 'success',
            data: albumsData
        })
})




export default albumsRoutes;