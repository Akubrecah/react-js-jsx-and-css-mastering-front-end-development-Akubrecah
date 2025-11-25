// A simple function to fetch todos from dummyjson.com
export const fetchTodos = async (page = 1, limit = 12) => {
  try {
    const skip = (page - 1) * limit;
    const response = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    // The data is in the `todos` property, and the total count is in `total`
    return { data: result.todos, totalCount: result.total };
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error;
  }
};