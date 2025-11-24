import { FileText } from 'lucide-react';

function PageItem() {
  return (
    <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer mt-1">
      <FileText size={14} className="text-gray-700 dark:text-gray-300" />
      <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">페이지 명</span>
    </div>
  );
}

export default PageItem;
