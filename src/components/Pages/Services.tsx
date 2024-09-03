function Services() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <div className="relative bg-cover overflow-hidden w-full h-[650px] -mt-20">
                <img
                    src="./images/dent 15.jpg"
                    className="w-full h-full object-cover"
                    alt="Dentist"
                />
                <h1 className="absolute text-center inset-[50%] flex flex-col justify-center items-center md:text-7xl text-5xl text-white font-bold ">
                    SERVICES
                </h1>
            </div>
            <div className="myContainer">
                <div className="flex flex-col items-center my-10">
                    <h1 className="font-bold text-2xl py-5 font-[Georgia]">SERVICES AVAILABLE</h1>
                    <ul className="text-xl bg-blue-100 space-y-5 py-14 w-full pl-10 font-[Georgia]">
                        <li>▪️ Diagnostic & Preventative Exam</li>
                        <li>▪️ Diagnostic & Preventative Xrays and Intra-Oral Images</li>
                        <li>▪️ Preventative Routine Cleanings</li>
                        <li>▪️ Full Mouth Gum Therapy/ Scaling and Root Planing</li>
                        <li>▪️ Periodontal Maintenance</li>
                        <li>▪️ Simple & Surgical Extractions (case by case wisdom teeth removal)</li>
                        <li>▪️ Composite White Fillings</li>
                        <li>▪️ Ceramic Crowns</li>
                        <li>▪️ Root Canal Therapy</li>
                        <li>▪️ Bridges</li>
                        <li>▪️ Partial & Full Mouth Dentures</li>
                        <li>▪️ Veneers</li>
                        <li>▪️ Invisalign Orthodontics</li>
                        <li>▪️ At home whitening with custom trays</li>
                        <li>▪️ Implants</li>
                        <li>▪️ Oral Sedation</li>
                    </ul>
                </div>
                <div className="my-10">
                    <h1 className="pb-5 text-center text-2xl font-bold font-[Georgia]">DENTAL IMPLANTS</h1>
                    <p className="text-center font-[Georgia]">Do you have dentures but HATE wearing them. Maybe they slide around, maybe you are tired of not being able to taste food, or are tired of worrying about your dentures falling out around other people.</p>
                </div>
                <div className="my-10">
                    <h1 className="font-[Georgia] text-center text-2xl font-bold">BEFORE AND AFTER:</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-5">
                        <img src="./images/dent 16.jpeg" className="w-full h-full" />
                        <img src="./images/dent 17.jpeg" className="w-full h-full" />
                        <img src="./images/dent 18.jpeg" className="w-full h-full" />
                        <img src="./images/dent 19.jpeg" className="w-full h-full" />
                        <img src="./images/dent 20.png" className="w-full h-full" />
                        <img src="./images/dent 21.jpeg" className="w-full h-full" />
                        <img src="./images/dent 22.jpg" className="w-full h-full" />
                        <img src="./images/dent 23.jpeg" className="w-full h-full" />
                    </div>
                </div>
                <div className="my-10">
                    <h1 className="text-center text-2xl font-bold font-[Georgia]">REAL RESULTS</h1>
                    <p className="py-5 text-center font-[Georgia]">“I was looking for a new dentist and had tried probably five others.…When I came here, it was thumb’s up right away.… I needed three big procedures, so I wanted to make sure I was getting the right doctors and dentists, and I got that here.The doctors here, you can trust them. If they say everything’s going to be okay, it will be. I had never had an implant, and I had heard people say it wasn’t a good procedure. But they made it very comfortable. They walked me through the procedure, and I was very comfortable and very happy.”</p>
                    <p className="text-center text-xl italic font-[Georgia] font-bold opacity-50">— John</p>
                    <p className="py-5 text-center font-[Georgia]">“I’ve had anxiety with dental procedures for some time, and I let my teeth go. I actually had two places where teeth were missing. I had a phobia with needles, so I explained that to Dr. Dersley and he said no problem. He explained everything we were going to do, and he was spot on.I thought it was going to be pretty invasive, but after we went through the procedure it was pretty much a noninvasive event—no pain whatsoever. The recovery was minimal, and the implant was very easy. I didn’t feel anything.…I don’t feel any difference; it feels like a normal tooth. I can’t tell a difference.Before implants, I wasn’t able to eat certain types of foods, meats and such. Now I can eat on both sides. I was worried about pain and anxiety, but I had to make that step. When I came in, the doctor pretty much told me there wasn’t going to be any pain, and I said, “Let’s see.” And he was spot on. There wasn’t. I did not have any pain.”</p>
                    <p className="text-center text-xl italic font-[Georgia] font-bold opacity-50">— Mark</p>
                    <p className="py-5 text-center font-[Georgia]">“People here are friendly. They respect my time, they want to get me in and get me out, and they’re very professional. They do everything from cleaning to implants, and everything in between. It’s a one-stop shop.I’ve had a number of dental procedures. I needed an implant, which is what led me here. Since then, I’ve had two implants, which brings it up to a total of seven. It’s been very easy, very painless.I was going through the process from having fillings to having crowns, then root canals, and then that crown breaking down, so I decided to get implants. I wanted the longevity of the teeth, and I only wanted to pay once for the process!Dr. Dersley is very patient, very outgoing, and told me exactly what was going to happen and what to expect. There weren’t any surprises, no regrets at all. I’d rather have the teeth than the money in my pocket!”</p>
                    <p className="text-center text-xl italic font-[Georgia] font-bold opacity-50">— Shahmar</p>                </div>
            </div>
            <div className="text-center text-3xl my-10">
                <button onClick={handleClick} className="button-55 font-bold">Top of Page</button>
            </div>
        </div >
    )
}
export default Services