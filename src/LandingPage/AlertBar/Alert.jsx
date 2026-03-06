// components/AlertBar.jsx
import { Link } from 'react-router-dom';

const AlertBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-blue-200 dark:bg-blue-900/30 border-b border-blue-500 dark:border-blue-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="text-sm font-bold text-blue-800 dark:text-blue-400">
          <span className="material-symbols-outlined align-middle mr-1 text-lg">
            event
          </span>
          Next Event: Namanga - Saturday, Apr 15th!
        </p>
        <Link to='/upcomingevent'>
          <button className="bg-blue-800 dark:bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlertBar;