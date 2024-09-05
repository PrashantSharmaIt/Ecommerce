import express from "express";
import colors  from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoute.js'
import cors from "cors";
import productRoutes from './routes/productRoute.js'
//import path from 'path'

//config env
dotenv.config();

//databse config
connectDb();

//rest object
const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
//app.use(express.static(path.join(__dirname, './client/build')));

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use("/api/v1/product",productRoutes)

app.get('/',(req,res)=>{
  res.send("<h1>Welcome To Ecommerce Website</h1>")
});
// app.use('*',function(req,res){
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// })

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
  console.log(`Server Running on ${PORT}`);
});