// import img from '../../assets/Illustration2.png'
{/* <img src={img}  className="absolute -rotate-80  -bottom-[164vw] w-[40vw] h-[40vw]"/> */}

const Work = () => {
    return (
        <section className="py-10 bg-[#f6f5f3] sm:py-16 lg:py-24 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-[NippoVariable] leading-tight text-black sm:text-4xl lg:text-6xl">How does it <span className="bg-[#b9ff66] rounded-xl">work?</span></h2>
                    {/* <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Get Started</h3>
                            <p className="mt-4 text-base text-gray-600">Click on Get started Where You Are Ready To Explore Content.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Explore Your Topics</h3>
                            <p className="mt-4 text-base text-gray-600">Explore Various Type Of Manual Testing Content and Scenario .</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Prepared For Manual Testing Interview</h3>
                            <p className="mt-4 text-base text-gray-600">Ready For Upcoming Interviews.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;