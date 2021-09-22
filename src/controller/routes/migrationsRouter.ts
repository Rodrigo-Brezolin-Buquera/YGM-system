import express from "express";
import { Migrations } from "../../data/Migrations";


export const migrationRouter = express.Router()

const migrations = new Migrations()

migrationRouter.post("/start", migrations.start )
migrationRouter.post("/authUser", migrations.createAuthorizedUsers )
migrationRouter.post("/populate", migrations.populate )