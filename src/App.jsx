import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TaskManagerPage from './pages/TaskManagerPage';
import ApiDataPage from './pages/ApiDataPage';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/task-manager" element={<TaskManagerPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;