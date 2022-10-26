import Task from "../model/Task";


export const renderTask= async (req, res) => {
    const task = await Task.find().lean();
    res.render("index", { tasks: task });
  }

 export const editTask= async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (error) {
      console.error(error);
    }
  }

  export const addTask = async (req, res) => {
    try {
      const task = Task(req.body);
      await task.save();
      res.redirect("/");
    } catch (error) {
      console.error(error);
    }
  }

  export const saveEditTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  }

 export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  }
  export const editTaskPropertyCondition = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.pendiente = !task.pendiente;
    await task.save();
    res.redirect("/");
  }
