import { useEffect, useState } from "react";

function Toogle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
      <div className="flex items-center absolute right-2 top-2 gap-3">
        <span className="text-xs font-medium">DARK</span>

        {/* Switch Toggle */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <div className="w-10 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-indigo-500 transition-colors duration-300" />
          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-4" />
        </label>

        <span className="text-xs font-medium">LIGHT</span>
      </div>
  );
}

export default Toogle;
