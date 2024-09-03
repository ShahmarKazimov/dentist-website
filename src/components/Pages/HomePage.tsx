import "../button.scss"
function HomePage() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <div className="relative bg-cover overflow-hidden w-full h-[650px] -mt-20">
                <img
                    src="./images/dent.png"
                    className="w-full h-full object-cover"
                    alt="dentist"
                />
                <div className="absolute text-center inset-[50%] flex flex-col justify-center items-center">
                    <h2 className="md:text-3xl text-2xl text-white italic whitespace-nowrap">Welcome to</h2>
                    <h1 className="md:text-7xl text-5xl text-white font-extrabold">
                        SMILECRAFT DENTAL
                    </h1>
                </div>
            </div>
            <div className=" flex gap-10 flex-col myContainer my-10">
                <div className="  ">
                    <img src="./images/dent 2.jpeg" className="w-full h-full " />
                </div>
                <div className="flex gap-5">
                    <div>
                        <img src="./images/dent 3.jpg" className="w-full h-full " />
                    </div>
                    <div>
                        <img src="./images/dent 4.jpg" className="w-full h-full " />
                    </div>
                </div>
                <div>
                    <p className="text-center text-7xl text-gray-400 font-[Georgia]">“</p>
                    <h1 className="text-xl pb-10 font-['Georgia'] text-center">
                        We believe that with a healthy smile, life is better. We also see so many people living a life that isn’t their best, because of pain, because of fear and because for so long, they’ve been afraid to smile. Every day in our practice, we meet patients who are afraid or embarrassed to smile. We also see patients who have just never liked the appearance of their teeth, or felt confident in their smile. We want you to know that when you can smile with confidence, chew comfortably and have a healthy mouth, life is better. If your smile is holding you back from the life you want, if you’ve been putting off going to the dentist because of fear or anxiety, or if you’re simply looking for the perfect dental home for yourself and your family, you’ve come to the right place. We promise no lectures or judgments ever, no matter how long it has been, or the condition of your mouth.
                    </h1>
                    <p className="text-4xl text-center text-gray-400 font-[Georgia]">Dr. Dersley</p>
                </div>
                <div className="flex-col flex items-center">
                    <div>
                        <h1 className="text-3xl font-bold font-['Georgia'] text-center">Dentistry like you’ve never experienced before!</h1>
                        <h2 className="text-xl font-['Georgia'] text-center py-10">You will be more than pleased with the level of service our team provides. Our top priority is to care for each patient as an individual. We get to know each of you personally, and not in a distant manner as if you were another set of teeth, a chart, or just another patient. Every patient at every appointment will have our competent and attentive team giving you the best dental care in a warm and friendly manner. From your very first visit, you will notice the difference.</h2>
                    </div>
                    <div>
                        <img src="./images/dent 5.jpeg" className="w-full h-full " />
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={handleClick} className="button-55">Top of Page</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;



