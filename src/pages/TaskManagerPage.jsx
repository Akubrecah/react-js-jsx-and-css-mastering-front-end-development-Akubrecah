import { useState, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';
import { Plus, Trash2 } from 'react-feather';

const TaskManagerPage = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

          <form onSubmit={handleAddTask} className="flex gap-4 mb-6">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" variant="primary" size="md">
              <Plus size={20} />
            </Button>
          </form>

          <div className="flex justify-center gap-2 mb-6">
            {['All', 'Active', 'Completed'].map(f => (
              <Button
                key={f}
                variant={filter === f ? 'primary' : 'secondary'}
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>

          <ul className="space-y-4">
            {filteredTasks.map(task => (
              <li
                key={task.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                  <span className={`text-lg ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
                    {task.text}
                  </span>
                </div>
                <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                  <Trash2 size={16} />
                </Button>
              </li>
            ))}
          </ul>

          {tasks.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
              No tasks yet. Add one above!
            </p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default TaskManagerPage;