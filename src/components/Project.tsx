import { Icon } from "@iconify/react"

export default function Project() {
    return (
        <>
            <section className='flex h-screen text-2xl text-white justify-center items-center'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <h1>PROJECT</h1>
                    <div className='w-full flex flex-row gap-4 justify-center text-center'>
                        <Icon
                            icon="pixelarticons:chevron-left"
                            className="size-18 shrink-0 text-white"
                        />
                        <div className='w-full border border-white rounded-2xl'>
                            <p>
                                1
                            </p>
                        </div>
                        <div className='w-full border border-white rounded-2xl'>
                            <p className='text-center'>
                                2
                            </p>
                        </div>
                        <div className='w-full border border-white rounded-2xl'>
                            <p>
                                3
                            </p>
                        </div>
                        <Icon
                            icon="pixelarticons:chevron-right"
                            className="size-18 shrink-0 text-white"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}