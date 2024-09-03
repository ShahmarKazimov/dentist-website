import "../button.scss"
function About() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <div className="relative bg-cover overflow-hidden w-full h-[650px] -mt-20">
                <img
                    src="./images/dent 6.jpg"
                    className="w-full h-full object-cover"
                    alt="Dentist"
                />
                <h1 className="absolute text-center inset-[50%] flex flex-col justify-center items-center md:text-7xl text-5xl text-white font-bold ">
                    MEET THE DOCTOR
                </h1>
            </div>
            <div className="myContainer ">
                <div className="my-10">
                    <h1 className="text-2xl font-bold font-['Georgia'] text-center">OUR MISSION</h1>
                    <h2 className="py-5 font-['Georgia'] text-center">Our mission here at Churton Dental Care is to provide you and your family with the best dental care in a comfortable setting. You will be treated professionally and courteously at all times. We are here to provide you with a caring touch and the smile you deserve!</h2>
                </div>
                <div className="my-10">
                    <div className="flex-col flex md:flex-row items-center gap-5 ">
                        <div className="md:w-[50%]">
                            <img src="./images/dent 7.jpg" className="w-full h-full rounded-r-[100px] rounded-l-[400px]" />
                        </div>
                        <div className="md:w-[50%]">
                            <h1 className="text-center text-3xl font-bold font-['Georgia']">Dr. Ariz Derlsey</h1>
                            <h2 className="text-center font-['Georgia']  py-5">As a dental specialist, Dr. Dersley is one of Maryland’s top experts in helping patients with major dental problems. He has helped his patients overcome such problems as: embarrassment with their teeth, severe dental anxiety, social problems due to not being able to eat a meal comfortably, and chronic dental pain due to unhealthy teeth.</h2>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <h1 className="text-center text-2xl font-bold py-10 font-['Georgia']">TECHNOLOGY</h1>
                    <div className="gap-10 flex-col flex md:flex-row ">
                        <div className="h-full w-full">
                            <div>
                                <img src="./images/dent 8.png" className="w-full h-full" />
                            </div>
                            <div>
                                <h1 className="py-5 text-center font-bold font-[Georgia]">3-D CT SCANNER</h1>
                                <h2 className="font-[Georgia] text-center">
                                    Our practice is proud to be one of the first practices in the region to use 3-D cone beam CT digital imaging technology. This is essentially a three-dimensional X-ray providing FAR more accurate images than traditional X-rays. A great advantage of ultra cone beam images in determining diagnoses and evaluating treatment options is our doctors ability to clearly see your anatomy in 3-D, instead of flat, two-dimensional images.</h2>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <div>
                                <img src="./images/dent 9.jpg" className="w-full h-full " />
                            </div>
                            <div>
                                <h1 className="py-5 text-center font-bold font-[Georgia]">DIGITAL XRAYS</h1>
                                <h2 className="font-[Georgia] text-center">
                                    With digital technology, it is easy to have a panoramic view of your upper and lower jaws in just one shot. A sensor is placed in your mouth, and immediately, we can view your teeth on our computer screen. This advanced technology also results in 75% less radiation than the nondigital method. No chemicals are used, which makes it a pollution-free process.</h2>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <div>
                                <img src="./images/dent 10.jpg" className="w-full h-full " />
                            </div>
                            <div>
                                <h1 className="py-5 text-center font-bold font-[Georgia]">INTRA-ORAL CAMERA</h1>
                                <h2 className="font-[Georgia] text-center">
                                    With the intra-oral camera, you can have a clear, close-up picture of your teeth. This miniature video camera lets you see for yourself what teeth need treatment and those that are just fine. You will be satisfied as a full participant in your dental health care.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <div>
                        <h1 className="text-2xl font-bold font-['Georgia'] text-center">TOUR THE OFFICE</h1>
                        <h2 className="py-5 font-['Georgia'] text-center">“We wanted our office to be a place where everyone felt comfortable and had a sense of home. From plush sofas and chairs to a coffee station and water fridge we hope you’ll feel welcome and at ease” <br />-Dr. Chris Wolf</h2>
                    </div>
                    <div className=" grid grid-rows-2 md:grid-cols-2 gap-5 py-5">
                        <div>
                            <img src="./images/dent 11.jpg" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="./images/dent 12.jpg" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="./images/dent 13.jpg" className="w-full h-full" />
                        </div>
                        <div>
                            <img src="./images/dent 14.png" className="w-full h-full" />
                        </div>
                    </div>
                </div>
                <div className="text-center text-3xl my-10">
                    <button onClick={handleClick} className="button-55 font-bold">Top of Page</button>
                </div>
            </div>
        </div >
    )
}
export default About