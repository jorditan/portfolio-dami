import Main from '../Components/Home/Main'
import About from '../Components/Home/About'
import '../CSS/index.css'

function Home() {
     return (
          <>
               <main className='bg-gradient-to-l from-[#5e5e5e] to-[#dfdfdf] dark:from-[#303030] dark:to-[#5e5e5e]'>
                    <Main />
                    <About />
               </main>
          </>
     );
}

export default Home;