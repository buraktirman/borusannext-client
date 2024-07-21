import React, { useEffect, useState } from "react";
import toDoService from "../../services/toDoService";
import { ToDoModel } from "../../models/toDoModel";
import { useNavigate } from "react-router-dom";

type Props = {};

const Homepage = (props: Props) => {
  const [todoList, setTodoList] = useState<ToDoModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await toDoService.fetchAll();
    setTodoList(response.data);
  };

  // Component

  // React Router'da parametre okuma url'edn
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-12">
        {todoList.map((todo) => {
          return (
            <div className="col-span-3 mb-3 mr-3">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{todo.title}</div>
                  <p className="text-gray-700 text-base">{todo.id}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {todo.completed ? (
                      <span className="text-green-500">Tamamlandı</span>
                    ) : (
                      <span className="text-red-500">Tamamlanmadı</span>
                    )}
                  </span>
                  <span>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => navigate(`/todo/${todo.id}`)}
                    >
                      Detaya Git
                    </button>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
