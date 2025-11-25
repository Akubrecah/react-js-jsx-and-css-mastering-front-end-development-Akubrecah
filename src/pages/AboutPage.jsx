import React from 'react';
import Card from '../components/Card';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About This Application</h1>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              This tool helps you stay organized by capturing all your tasks in one place, keeping your mind clear and focused. It allows you to quickly turn ideas into an organized to-do list.
            </p>
            <p>
              You can access and manage your tasks from anywhere, as they are saved directly in your browser.
            </p>
            <h2 className="text-2xl font-bold pt-6 pb-2">Key Features Implemented:</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>A fully functional Task Manager to add, complete, delete, and filter tasks.</li>
              <li>Data persistence using the browser's local storage via a custom `useLocalStorage` hook.</li>
              <li>Integration with a public API to fetch, display, search, and paginate data.</li>
              <li>A responsive design that works on mobile, tablet, and desktop screens.</li>
              <li>A theme switcher for light and dark mode using React Context.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;