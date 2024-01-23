import Acordeon from "../Acordion";

function DudasFrecuentes() {

    const dudas = [
        {
            pregunta: '¿Cómo puedo inscribirme para tomar clases de piano o guitarra con vos?',
            texto: 'Puedes inscribirte fácilmente haciendo click en la sección "Contacto" de la página principal. Allí podras consultarme lo que quieras y reservar tu clase. Te atenderé personalmente lo antes posible'
        },
        {
            pregunta: '¿Qué nivel de habilidad debo tener para comenzar las clases?',
            texto: '¡No te preocupes! Mis clases están diseñadas para estudiantes de todos los niveles, desde principales hasta avanzados. Adaptaré las lecciones según tu nivel de habilidad y experiencia musical.'
        },
        {
            pregunta: '¿Necesito tener mi propio piano o guitarra para las clases?',
            texto: 'Es recomendable tener tu propio instrumento para practicar entre clases. Sim embargo, si eres principiante y aún no tienes uno, puedo proporcionarte orientación sobre cómo elegir el intrumento adecuado.'
        },
        {
            pregunta: '¿Cuál es la duración típica de una lección?',
            texto: 'Las lecciones suelen tener una duración estándar de 60 minutos, pero también ofrezco opciones de lecciones más cortas para adaptarme a tu horario y preferencias. Podemos discutir la duración ideal durante la primera sesión'
        },
        {
            pregunta: '¿Cómo son las clase en línea y que plataformas utilizas?',
            texto: 'Ofrezco clases en línea a través de plataformas populars como Zoom, Skype o Meet. Antes de la primera lección, te proporcionaré instrucciones detalladas sobre como unirte a la sesión virtual y asegurarme de que tengas una experiencia de aprendizaje sin problemas.'
        },
        {
            pregunta: '¿Ofreces clases de teoría musical además de lecciones prácticas?',
            texto: 'Si, las clases de teoría musical son parte integral de mi enfoque educativo. Aprenderás conceptos fundamentales de teoría musical que mejorarán tu comprensión y habilidades en el piano o la guitarra.'
        },
        {
            pregunta: '¿Ofreces clases grupales o solo individuales?',
            texto: 'Principalmente ofrezco clases individuales para garantizar una atención personalizada. Sim embargo, puedo organizar clases grupales si hay un intrés común entre los estudiantes.'
        },
        {
            pregunta: '¿Cuáles son tus tarifas y métodos de pago?',
            texto: 'Las tarfias varían según la duración de las lecciones y la frecuencia. Puedes encontrar información detallada sobre las tarifas en la sección "Presupuesto" de la página web, dentro de "Clases". Acepto pagos en efectivo, transferencia bancarias u otras formas de pago electrónico en cualquier moneda.'
        },
        {
            pregunta: '¿Cómo puedo cancelar o reprogramar una lección?',
            texto: 'Si necestias cancelar o reprogramar una lección, comunícate conmigo con al menos 24 horas de antelación. De esta manera, podremos encontrar una nueva fecha y hora que funcione para ambos.'
        },
        {
            pregunta: '¿Cuánto tiempo voy a tardar en aprender?',
            texto: 'Es una pregunta imposible de contestar. Todo depende del tiempo de práctica que le dediques a tu instrumento, los objetivos que tengas y que tan disciplinado y paciente seas. Nunca prometo plazos, pero puedo asegurarte que cualquiera puede aprender con constancia, dedicación y amor por la música.'
        },
        {
            pregunta: '¿Le dan clases a gente de todas las edades?',
            texto: 'Si, doy clases a gente de todas las edades.'
        },
        {
            pregunta: '¿Puedo aprender piano y guitarra a la vez?',
            texto: 'Si, se puede. En caso de que te interesen ambos instrumentos, elaboraremos un plan 100% personalizado para que tengas un aprendizaje de calidad sin descuidar ningún instrumento.'
        },
        

    ]

    return (
        <section id="dudasFrecuentes">
            <h1 className='text-6xl font-bold text-[#303030]'>Dudas frecuentes</h1>

            <p className='text-[#303030] text-sm pt-5 w-3/4'>En esta sección vas a poder informarte acerca de las dudas más frecuentes que suelen tener los alumnos o las personas interesadas en tomar clases de guitarra y/o piano.</p>

            <div className="contenedorAcordeones flex column w-2/4 justify-center gap-5 py-12">
                {
                    dudas.map((duda, index) => {
                        return(
                            <Acordeon key={index}  
                            texto={duda.texto}
                            pregunta={duda.pregunta}
                            />
                        )
                    })
                }
            </div>


        </section>
    );
}

export default DudasFrecuentes;