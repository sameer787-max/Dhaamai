"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const testimonials = [
    {
        name: "Fig Nelson",
        username: "@fignel_sooon",
        text: "DhaamAi's user-friendly dashboards have simplified our digital strategy management.",
        avatar: "/avatar1.png",
        social: "twitter",
    },
    {
        name: "Sadie Berlin",
        username: "@sadieberlin00",
        text: "DhaamAi has truly transformed our online presence. With its powerful analytics and seamless integration, we’ve gained invaluable insights.",
        avatar: "/avatar2.png",
        social: "instagram",
    },
    {
        name: "Amaya Locosta",
        username: "@amaylocosta",
        text: "We’ve gained invaluable insights and improved our SEO ranking, resulting in significant business growth.",
        avatar: "/avatar3.png",
        social: "facebook",
    },
    {
        name: "Maya Roy",
        username: "@mayaroy",
        text: "The customization options are endless. DhaamAi lets us localize for every region seamlessly.",
        avatar: "/avatar4.png",
        social: "twitter",
    },
];

const socialIcons = {
    twitter: <FaTwitter className="text-sky-500 w-5 h-5" />,
    instagram: <FaInstagram className="text-pink-500 w-5 h-5" />,
    facebook: <FaFacebook className="text-blue-600 w-5 h-5" />,
};

export default function TestimonialsCarousel() {
    return (
        <section
            className="relative  w-full overflow-hidden text-center px-6 bg-gray-100  py-8  md:py-22 bg-cover bg-center"
            style={{
                backgroundImage: "url('/websvg2.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto", 
                backgroundPosition: "top center",
                
            }}
        >
            


            <div className="relative z-10 max-w-6xl mx-auto px-6">
             
                <div className="text-center mb-16">
                    <p className="text-[#7C43DF] font-medium">Our Customers</p>
                    <h2 className="text-5xl  text-gray-900 mt-2">
                        See what our <br /> customers are saying
                    </h2>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden py-3">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25, // adjust speed here
                            ease: "linear",
                        }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="min-w-[300px] sm:min-w-[350px] bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-md transition"
                            >
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    <span className="font-semibold">Incredibly useful product</span>
                                    <br />
                                    {t.text}
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <p className="text-gray-900 font-medium">{t.name}</p>
                                            <p className="text-gray-500 text-sm">{t.username}</p>
                                        </div>
                                    </div>
                                    <div>{socialIcons[t.social]}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <button className="bg-[#7C43DF] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-purple-700 transition">
                        Follow us on Social Media
                    </button>
                </div>
            </div>
        </section>
    );
}
