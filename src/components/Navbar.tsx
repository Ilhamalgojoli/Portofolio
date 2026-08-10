type NavbarClass = {
    className: string
}

export default function Navbar({ className }: NavbarClass) {
    return (
        <>
            <section className={`${className ?? ""}`}>
                <div>
                    <></>
                </div>
                <div className="flex gap-8">
                    <a>HOME</a>
                    <a>PROJECT</a>
                    <a>ABILITY</a>
                </div>
            </section>
        </>
    )
}