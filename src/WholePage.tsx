import About from "./AboutPage/About"
import Contact from "./ContactPage/Contact"
import Landing from "./LandingPage/Landing"
import Project from "./ProjectPage/Project"
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useRef } from "react";



export const WholePage = () => {
    const landingRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("appear");
                    entry.target.classList.remove("hide");
                } else {
                    entry.target.classList.add("hide");
                    entry.target.classList.remove("appear");
                }
            });
        }, options);

        if (landingRef.current) {
            observer.observe(landingRef.current);
        }
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }
        if (projectRef.current) {
            observer.observe(projectRef.current);
        }
        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (landingRef.current) {
                observer.unobserve(landingRef.current);
            }
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div className="space-y-96 py-48 relative mx-auto">
            <div ref={landingRef} className="appear">
                <Landing />
            </div>
            <div ref={aboutRef} className="appear">
                <About />
            </div>
            <div ref={projectRef} className="appear">
                <Project />
            </div>
            <div ref={contactRef} className="appear">
                <Contact />
            </div>
            <ScrollToTop smooth color="white" className="scroll rounded-full font-extrabold flex items-center justify-center text-white bg-secondColor p-2"/>
        </div>
    );
};
