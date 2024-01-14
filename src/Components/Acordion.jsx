function Acordeon({texto, pregunta}) {
    return (
        <>
            <article className="collapse collapse-arrow bg-[#fafafa] w-full">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    <h5 className="text-[#303030] font-bold text-sm">{pregunta}</h5>
                </div>
                <div className="collapse-content">
                    <p className="text-[#303030] text-xs">{texto}</p>
                </div>
            </article>
        </>
    );
}

export default Acordeon;