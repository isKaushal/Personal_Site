// components
import Section from "./section.js"
import Heading from "./heading.js"
import {
    Map,
    Mail,
    Phone,
    Github,
    Instagram,
    Linkedin,
    Twitter,
} from "./icons.js"
import Button from "./button.js"

export default function GetInTouch() {
    return (
        <>
            <Section>
                <Heading blur="contact" white="get in" yellow="touch" />
            </Section>

            <Section>
                <div className=" lg:flex">
                    <div className="w-full lg:w-[40%] px-4">
                        <div className="text-white ">
                            <h2 className="text-3xl font-semibold mb-3">
                                DON'T BE SHY !
                            </h2>
                            <p>
                                Feel free to get in touch with me. I am always
                                open to discussing new projects, creative ideas
                                or opportunities to be part of your visions.
                            </p>
                        </div>
                        <div className="py-6">
                            <div className="flex items-center py-4">
                                <Map className="text-clr-yellow text-5xl mx-4" />
                                <h6 className="text-white font-semibold text-sm ">
                                    <span className="text-gray-400 uppercase font-normal text-lg">
                                        address point
                                    </span>{" "}
                                    <br />
                                    A-226, Nehru Nagar Panipech-302016, Jaipur
                                    Rajashan, India
                                </h6>
                            </div>
                            <div className="flex items-center py-4">
                                <Mail className="text-clr-yellow text-5xl mx-4" />
                                <h6 className="text-white font-semibold text-sm ">
                                    <span className="text-gray-400 uppercase font-normal text-lg">
                                        mail me
                                    </span>{" "}
                                    <br />
                                    kaushalkumarsoni69@gmail.com
                                </h6>
                            </div>
                            <div className="flex items-center py-4">
                                <Phone className="text-clr-yellow text-5xl mx-4" />
                                <h6 className="text-white font-semibold text-sm ">
                                    <span className="text-gray-400 uppercase font-normal text-lg">
                                        call me
                                    </span>{" "}
                                    <br />
                                    +91 9799170635
                                </h6>
                            </div>
                            <div className="flex items-center py-4">
                                <a
                                    href="https://www.linkedin.com/in/kaushal-kumar-soni-99362122a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="bg-clr-gray text-white hover:bg-clr-yellow w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 mx-3">
                                        <Linkedin />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/isKaushal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="bg-clr-gray text-white hover:bg-clr-yellow w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 mx-3">
                                        <Github />
                                    </div>
                                </a>
                                <a
                                    href="https://instagram.com/kaushal_kumar_soni?igshid=NzZlODBkYWE4Ng=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="bg-clr-gray text-white hover:bg-clr-yellow w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 mx-3">
                                        <Instagram />
                                    </div>
                                </a>
                                <a
                                    href="http://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="bg-clr-gray text-white hover:bg-clr-yellow w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 mx-3">
                                        <Twitter />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] px-4">
                        <form>
                            <div className="flex w-full">
                                <input
                                    className="my-4 mr-2  p-3 px-4 w-full bg-clr-gray text-gray-400 outline-none text-xs rounded-full"
                                    placeholder="Your Name"
                                    type="text"
                                    name=""
                                    id=""
                                />
                                <input
                                    className="my-4 ml-2  p-3 px-4 w-full bg-clr-gray text-gray-400 outline-none text-xs rounded-full"
                                    placeholder="Your Email"
                                    type="email"
                                    name=""
                                    id=""
                                />
                            </div>
                            <div>
                                <input
                                    className="my-4 p-3 px-4 bg-clr-gray text-gray-400 outline-none text-xs rounded-full w-full"
                                    placeholder="Your Subject"
                                    type="text"
                                    name=""
                                    id=""
                                />
                                <textarea
                                    className="my-4 p-5  bg-clr-gray text-gray-400 outline-none text-xs rounded-3xl w-full"
                                    placeholder="Your Query"
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                            <Button label="send message" />
                        </form>
                    </div>
                </div>
            </Section>
        </>
    )
}
