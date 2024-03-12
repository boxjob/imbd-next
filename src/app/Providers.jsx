'use client'

import { ThemeProvider } from 'next-themes'

const Providers = ({ children }) => {
    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <div className='text-gray-700 bg-gray-200 dark:text-gray-200 dark:bg-gray-700 w-full min-h-screen select-none transition-colors duration-300'>
                { children }
            </div>
        </ThemeProvider>
    );
}
 
export default Providers;