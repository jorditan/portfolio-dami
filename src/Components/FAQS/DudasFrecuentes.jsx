import Acordeon from "../Acordion";

function DudasFrecuentes() {
    return (
        <section id="dudasFrecuentes">
            <h1 className='text-6xl font-bold text-[#303030]'>Dudas frecuentes</h1>

            <p className='text-[#303030] text-sm pt-5 w-3/4'>En esta sección vas a poder informarte acerca de las dudas más frecuentes que suelen tener los alumnos o las personas interesadas en tomar clases de guitarra y/o piano.</p>

            <div className="contenedorAcordeones flex column w-2/4 gap-5 pt-6">
                <Acordeon/>
                <Acordeon/>
                <Acordeon/>
            </div>


        </section>
    );
}

export default DudasFrecuentes;