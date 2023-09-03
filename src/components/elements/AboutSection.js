import {
    Typography,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
} from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import '../../App.css';
import { BsPatchCheckFill } from "react-icons/bs";

import React from "react";


export default function AboutSection() {



    return (
        <section className="py-5">
            <div className="flex flex-col justify-center gap-3 text-center  text-gray-100">
                <Typography variant="h2" className="text-gray-200">About me</Typography>
                <div className="container mx-auto md:px-20 my-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="image">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/6ccad8b3-8249-4325-8b24-67342e8043f1/1Jb0tjDqoJ.json"
                                style={{ height: '250px', width: '350px' }}
                            />
                        </div>
                        <Timeline>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-0">
                                        <BsPatchCheckFill size={30} color="white" />
                                    </TimelineIcon>
                                    <Typography variant="h5" className="text-gray-200">
                                        Need web Developer?
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography className="text-gray-300 text-start">
                                        I can help you!
                                    </Typography>
                                    <Typography color="gary" className="font-normal text-gray-600 text-start">
                                        Systems Engineer, passionate about web development with an emphasis on the front-end and willing to keep learning.
                                        I am characterized by being a disciplined, responsible and dedicated person.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        </section>
    )
}