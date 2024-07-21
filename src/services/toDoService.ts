import axios, { AxiosResponse } from "axios";
import { ToDoModel } from "../models/toDoModel";

class ToDoService {
	fetchAll(): Promise<AxiosResponse<ToDoModel[], any>> {
		return axios.get<ToDoModel[]>("https://jsonplaceholder.typicode.com/todos");
	}

	fetchById(id: number): Promise<AxiosResponse<ToDoModel, any>> {
		return axios.get<ToDoModel>(`${"https://jsonplaceholder.typicode.com"}/todos/${id}`);
	}
}

export default new ToDoService();
