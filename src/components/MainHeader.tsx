import { FileText, SearchIcon, Sun, Moon } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { useState } from 'react';

const MainHeader = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false,
  );

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  };

  return (
    <div className="fixed w-screen h-16 border-b border-gray-200 bg-white dark:bg-gray-900 z-40 top-0 right-0 flex justify-between items-center pl-8 px-4">
      <div className="flex gap-2 ml-4 items-center">
        <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center rounded-full">
          <FileText color="white" width={14} height={14} strokeWidth={2} />
        </div>
        <div className="font-semibold text-lg text-gray-700 dark:text-gray-200">mino</div>
      </div>
      <div>
        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." className="min-w-80" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center border border-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={toggleDarkMode}
        >
          {isDark ? <Moon /> : <Sun />}
        </div>
        <div className="w-10 h-10 bg-indigo-500 flex items-center justify-center rounded-full text-white">
          JD
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
