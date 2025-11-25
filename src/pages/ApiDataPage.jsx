import React, { useState, useEffect, useMemo } from 'react';
import { fetchTodos } from '../api/todos';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiDataPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, totalCount } = await fetchTodos(page, 12);
        setTodos(data);
        setTotalPages(Math.ceil(totalCount / 12));
      } catch (err) {
        setError('Failed to fetch tasks. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, [page]);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo =>
      todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Fetched API Tasks</h1>

        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading && <p className="text-center text-lg">Loading tasks...</p>}
        {error && <p className="text-center text-lg text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTodos.map(todo => (
                <Card key={todo.id} className="flex flex-col justify-between">
                  <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{todo.todo}</h2>
                  <p className={`font-semibold ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {todo.completed ? 'Completed' : 'Pending'}
                  </p>
                </Card>
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4">
              <Button
                onClick={() => setPage(p => Math.max(p - 1, 1))}
                disabled={page === 1}
                variant="secondary"
              >
                Previous
              </Button>
              <span className="text-lg font-medium">Page {page} of {totalPages}</span>
              <Button
                onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                variant="secondary"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApiDataPage;