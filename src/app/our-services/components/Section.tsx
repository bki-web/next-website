const Section = ({id, className = "", children}: { id?: string; className?: string; children: React.ReactNode }) => (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
);

export default Section; 