
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-6">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {currentYear} PLP Task Manager. All Rights Reserved.</p>
        <p className="mt-2">Created with 💙 using React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;