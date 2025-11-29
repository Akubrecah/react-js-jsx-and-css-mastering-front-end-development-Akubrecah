import { useState } from 'react';
import Button from './Button';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors duration-500">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Task Manager</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-5 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-900 dark:text-white transition-all duration-300"
          />
          <Button type="submit" variant="primary" size="lg">
            Add Task
          </Button>
        </div>
      </form>

      <div className="flex justify-center gap-3 mb-6 bg-gray-100 dark:bg-gray-700/50 p-2 rounded-xl">
        <Button
          variant={filter === 'all' ? 'solid' : 'ghost'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'solid' : 'ghost'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'solid' : 'ghost'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <ul className="space-y-4">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-10">
            No tasks found. Add one above!
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-6 w-6 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600"
                />
                <span
                  className={`text-lg ${
                    task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
        <p>
          {tasks.filter((task) => !task.completed).length} of {tasks.length} tasks remaining
        </p>
      </div>
    </div>
  );
};

export default TaskManager;