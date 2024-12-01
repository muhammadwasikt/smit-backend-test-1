import express from "express";
import photosData from "../modules/photosData.js";


const photosRoutes = express.Router()



photosRoutes.get('/', (req, res) => {
       res.status(200).send(
           {
               status: 200,
               message: 'success',
               data: photosData
           })
   })




export default photosRoutes;