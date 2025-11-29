import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to the Ultimate Task Manager</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Organize your life, one task at a time.</p>
        <Link to="/task-manager">
          <Button variant="primary" size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;