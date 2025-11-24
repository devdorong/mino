import { Ellipsis, Share2, Star } from 'lucide-react';
import { useState } from 'react';

function PageHeader() {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  return (
    <div className="flex w-full h-[69px] items-center justify-between p-4 border-b border-gray-200 bg-white dark:bg-gray-900">
      <div className="flex items-center ">
        <h1 className="text-xl font-semibold">페이지 제목</h1>
        <div className="flex items-center text-sm text-gray-500 ml-4">
          <span>•</span>
          <span className="ml-2">283 words</span>
          <span className="ml-2">•</span>
          <span className="ml-2">Just now</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className=" w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer">
          <Share2 size={16} />
        </div>
        <div className="ml-3 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer">
          <Star size={16} />
        </div>
        <div className="ml-3 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer">
          <Ellipsis size={16} />
        </div>
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-2 ml-3">
          <button
            onClick={() => setMode('edit')}
            className={`px-3 py-1 text-sm font-medium rounded-lg ${
              mode === 'edit'
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setMode('preview')}
            className={`px-3 py-1 text-sm font-medium rounded-lg ${
              mode === 'preview'
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
