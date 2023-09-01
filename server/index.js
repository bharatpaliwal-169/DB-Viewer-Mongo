import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';
import fs from 'fs';
import http2 from 'http2';
import http2Express from 'http2-express-bridge';

import dbRoutes from './routes/index.js'
//base
// const app = express();
const app = http2Express(express);
const options = {
  key: fs.readFileSync('./keys/key.pem'),
  cert: fs.readFileSync('./keys/cert.pem'),
  allowHTTP1: true
}


app.use(bodyParser.json({limit: "50mb",extended : true}));
app.use(bodyParser.urlencoded({limit: "50mb",extended : true}));
app.use(cors());

dotenv.config();
//DB
const PORT = process.env.MY_PORT|| process.env.PORT;
const DB_SERVER_URL = process.env.DB_URL;

// Cluster setup
process.env.UV_THREADPOOL_SIZE = os.cpus().length;
const noOfCPUs = os.cpus().length;

if (cluster.isPrimary) {
  // primary cluster handles orther slave thread
  for (let i = 0; i < noOfCPUs; i++) {
    //cluster is making slave thread
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork(); // if dead then remake a new thread
  });
}else{

  //DB_CONNECT
  mongoose.connect(DB_SERVER_URL)
    .then(() => 
      // app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
      http2.createSecureServer(options,app).listen(PORT,()=> console.log(`Server Running on Port: https://localhost:${PORT}`))
      )
    .catch((error) => console.error(`${error} did not connect`));
  
  
  app.get('/',(req, res) => {
    res.send("App is UP n RUNNING");
  });
  app.use('/',dbRoutes);
}
