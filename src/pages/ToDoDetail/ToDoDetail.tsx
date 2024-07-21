import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toDoService from "../../services/toDoService";
import { ToDoModel } from "../../models/toDoModel";

const ToDoDetail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<ToDoModel>();

  useEffect(() => {
    fetchTodoDetails();
  }, [id]);

  const fetchTodoDetails = async () => {
    try {
      const response = await toDoService.fetchById(Number(id));
      setTodo(response.data);
    } catch (error) {
      console.error("Error fetching todo details:", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{todo?.title}</div>
          <p className="text-gray-700">ID: {todo?.id}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
              todo?.completed
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
          >
            {todo?.completed ? "Tamamlandı" : "Tamamlanmadı"}
          </span>
          <button
            onClick={() => {
              window.history.back(); // Optional: Go back using browser history
            }}
            className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block"
          >
            Geri Git
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoDetail;
