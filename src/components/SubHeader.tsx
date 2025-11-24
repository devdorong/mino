import { Plus } from 'lucide-react';
import PageItem from './PageItem';

function SubHeader() {
  return (
    <div className="w-[280px] fixed left-0 top-16 h-full border-r border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
      <div className="p-4">
        <button className="bg-indigo-500 hover:bg-opacity-90 w-full px-4 py-3 text-white rounded-lg flex items-center ">
          <Plus size={16} />
          <span className="ml-3 text-md">New Page</span>
        </button>
      </div>
      <div className="px-4 pb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <PageItem key={i} />
        ))}
      </div>
    </div>
  );
}

export default SubHeader;
