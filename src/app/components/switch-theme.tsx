import React, { useContext, useState } from 'react';

import { APP_THEMES, ThemeContext } from '@/context/theme-context';

export default function SwitchTheme() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const [toggle, setToggle] = useState(() => {
        return theme === APP_THEMES.DARK;
    });

    const handleToggleTheme = () => {
        setToggle(!toggle);
        changeTheme(!toggle ? 'dark' : 'light');
    };

    return (
        <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" defaultChecked={toggle} className="peer sr-only" onChange={handleToggleTheme} />
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
    );
}
