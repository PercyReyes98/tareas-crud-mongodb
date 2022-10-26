import { Router } from "express";
import {
    addTask, 
    deleteTask, 
    editTask, 
    editTaskPropertyCondition, 
    renderTask, 
    saveEditTask } from '../controllers/task.index'

const routes = Router();
routes.get("/", renderTask);
routes.get("/tasks/:id/edit", editTask );
routes.post("/tasks/add", addTask);
routes.post("/tasks/:id/edit", saveEditTask);
routes.get("/tasks/:id/delete", deleteTask);
routes.get("/tasks/:id/toggleDone", editTaskPropertyCondition);
export default routes;
