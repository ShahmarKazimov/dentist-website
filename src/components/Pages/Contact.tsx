import { useState } from "react"
import "./button2.scss"

function Request() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(name)
        alert(surname)
        alert(email)
        alert(phone)
        alert(subject)
    }

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <div className="relative bg-cover overflow-hidden w-full h-[650px] -mt-20">
                <img
                    src="./images/dent 24.jpg"
                    className="w-full h-full object-cover"
                    alt="Dentist"
                />
                <h1 className="absolute text-center inset-[50%] flex flex-col justify-center items-center md:text-7xl text-5xl text-white font-bold ">
                    CONTACT
                </h1>
            </div>
            <div className="myContainer">
                <h1 className="text-center text-2xl font-bold font-['Georgia'] py-10">CALL OR VISIT</h1>
                <div>
                    <div className="map-left-content">
                        <iframe className=' w-full h-[450px]' src="https://maps.google.com/maps?q=qabala&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>

                </div>
                <div className="md:flex-row flex flex-col gap-5 my-10">
                    <div>
                        <img src="./images/dent 25.jpeg" className="" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-1 w-full font-[Georgia] gap-1 bg-slate-100 p-2 border">
                        <h1><span className="font-bold">Adress:</span> Nariman Narimanov st</h1><br />
                        <h1><span className="font-bold">Office:</span> (994)-50-427-19-87</h1>
                        <h1><span className="font-bold">Monday:</span> 09:00 - 15:00</h1>
                        <h1><span className="font-bold">Tuesday:</span> 15:00 - 19:00</h1>
                        <h1><span className="font-bold">Wednesday:</span> 09:00 - 15:00</h1>
                        <h1><span className="font-bold">Thursday:</span> 15:00 - 19:00</h1>
                        <h1><span className="font-bold">Friday:</span> 09:00 - 15:00</h1>
                        <h1><span className="font-bold">Saturday:</span> 15:00 - 19:00</h1>
                        <h1><span className="font-bold">Sunday:</span> Closed</h1>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-center my-10 font-[Georgia] font-bold">HAVE A QUESTION?</h1>
                    <form className='space-y-6 border flex flex-col p-10 bg-slate-100' onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <input
                                className="border-2 w-full p-2 outline-none"
                                placeholder="First Name"
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="surname">
                            <input
                                className="border-2 w-full p-2 outline-none"
                                placeholder="Last Name"
                                type="text"
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </label>
                        <label htmlFor="phone">
                            <input
                                className="border-2 w-full p-2 outline-none"
                                placeholder="Phone"
                                inputMode="numeric"
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                className="border-2 w-full p-2 outline-none"
                                placeholder="Your Email"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="subject">
                            <input
                                className="border-2 w-full p-2 outline-none"
                                placeholder="Lorem"
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </label>
                        <label htmlFor="message">
                            <textarea
                                className="border-2 w-full p-2 outline-none"
                                placeholder="Message"
                                id="message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>
                        <div className="my-10 flex justify-center">
                            <button type="submit" className="cssbuttons-io-button bg-[#252222]"> Submit
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Request