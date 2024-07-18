import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import React from "react";

const Experience = () => {
    return (
        <div id="testimonials" className="py-20 text-white">
            <h1 className="heading">
                My
                <span className="text-purple"> work experience</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button>
                        <div>
                            <img src={card.thumbnail} alt="" className="lg:w-32 md:w-20 w-16"/>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
