import { Toggle } from "keep-react";
import { useEffect, useState } from "react";

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


     const handleTheme = () => {
          setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light');
     }


     return (
          <Toggle  onClick={handleTheme} bgColor="slate" label="Toggle" size="lg" withIcon={true} className="botonSwtichs fixed bottom-10 top-16 right-4 shadow-md z-40" />
     );
}

export default BotonSwitch;
