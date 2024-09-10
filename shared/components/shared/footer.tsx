export default function Footer() {
    return (
        <footer className="bg-primary-100">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h1 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Следите за нами в соцсетях
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <a href="https://twitter.com/">
                            <div className="mx-3 bg-white rounded-full p-3">
                                <Twitter />
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}