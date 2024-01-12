function Acordeon() {
    return (
        <>
            <article className="collapse collapse-arrow bg-[#fafafa] w-2/4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    <h5 className="text-[#303030] font-bold text-sm">¿Hace falta tener guitarra?</h5>
                </div>
                <div className="collapse-content">
                    <p className="text-[#303030] text-xs">No, no hace falta tener guitarra para empezar.</p>
                </div>
            </article>
        </>
    );
}

export default Acordeon;