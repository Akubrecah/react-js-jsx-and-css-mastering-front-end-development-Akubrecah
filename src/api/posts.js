// A simple function to fetch posts from JSONPlaceholder
export const fetchPosts = async (page = 1, limit = 12) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    return { data, totalCount: Number(totalCount) };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};