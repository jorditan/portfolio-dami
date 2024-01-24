import { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

function BotonSwitch() {

     const conseguirTheme = () => {
          return JSON.parse(localStorage.getItem('dark-mode'))
     }

     const [theme, setTheme] = useState(conseguirTheme());

     useEffect(() => {
          localStorage.setItem('dark-mode', JSON.stringify(theme));
          const bodyElement = document.querySelector('body');
          if (theme === 'dark') {
               bodyElement.classList.add('dark');
          } else {
               bodyElement.classList.remove('dark');
          }
     }, [theme]);

     console.log(theme)



     const handleTheme = () => {
          setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light');
     }


     return (
          <button className="text-[#303030] dark:text-[#fafafa] pl-10 text-2xl" onClick={handleTheme}>
               {
                    theme == 'light' ? <FaRegSun /> : <IoMdMoon />
               }
          </button>
     );
}

export default BotonSwitch;
