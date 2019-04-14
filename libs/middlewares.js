const bodyParser = require('body-parser');
const express = require('express');
import cors from "cors";
import morgan from "morgan";
import logger from "./logger.js";


module.eports = app => {
  app.set("json spaces",4);
  app.use(morgan("common",{
    stream: {
      write:(message) => {
        logger.info(message);
      }
    }
  }));
  app.use(cors({
    origin: ["http://localhost:3001"],
    method: ["GET","POST","PUT","DELETE"],
    allowHeaders: ["Content-Type","Authorization"]
  }));
  app.use(bodyParser.json());
  app.use(app.auth.initialize());
  app.use((req,res,next) =>{
    delete req.body.id;
    next();
  });
  app.use(express.static("public"));
};
