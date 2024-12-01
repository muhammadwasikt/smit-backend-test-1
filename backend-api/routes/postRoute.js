import express from "express";
import postData from "../modules/postData.js";


const postRoutes = express.Router()



postRoutes.get('/', (req, res) => {
       res.status(200).send(
           {
               status: 200,
               message: 'success',
               data: postData
           })
   })




export default postRoutes;