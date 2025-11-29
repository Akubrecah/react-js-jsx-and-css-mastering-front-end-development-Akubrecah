import { Mail, GitHub, Linkedin, Phone } from 'react-feather';
import Card from '../components/Card';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-2 mb-8">Powel Mwenesi</p>
          </div>
          <div className="space-y-6 text-lg">
            <a href="mailto:poweldayck@gmail.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Mail className="text-blue-500" size={24} />
              <span>poweldayck@gmail.com</span>
            </a>
            <a href="https://github.com/Akubrecah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <GitHub className="text-blue-500" size={24} />
              <span>Akubrecah</span>
            </a>
            <a href="https://www.linkedin.com/in/powelmwenesi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Linkedin className="text-blue-500" size={24} />
              <span>powelmwenesi</span>
            </a>
            <div className="flex items-center gap-4 p-4">
              <Phone className="text-blue-500" size={24} />
              <span>+254 719 299 900 / +254 791 497 858</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;