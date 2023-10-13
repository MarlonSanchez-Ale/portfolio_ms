import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { BsWordpress } from "react-icons/bs";
import { FaReact } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { motion } from 'framer-motion'
import React from "react";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 0,
    },
    animate: {
        opacity: 1,
        y: -50,

    }
}

export default function Project() {

    const myprojects = [
        {
            title: "Puntos Luz",
            image: "/images/PuntosLuz.png",
            description: "Project developed for the company The Data Age, I collaborated in the direction of project development and maintenance.  The web application was created with Next js, Material UI and put into production with Azure.",
            skill: { language: "Javascript", framework: "Next js", icon: <TbBrandNextjs size={20} /> },
            url: "",
            seeMore: false
        },
        {
            title: "Tasa Poste",
            image: "/images/TasaPoste.png",
            description: "Project developed for the company The Data Age, I collaborated in the development of the frontend.  The web application was created with Next js, Bootstrap and put into production with Azure.",
            skill: { language: "Javascript", framework: "Next js", icon: <TbBrandNextjs size={20} /> },
            url: "",
            seeMore: false
        },
        {
            title: "Task Manager",
            image: "/images/TaskManager.png",
            description: "Study project to handle tasks, manages the registration of tasks, editing, completed tasks, deletion.  Created with Reactjs, Tailwind and global application status management with Redux - Toolkit.",
            skill: { language: "Javascript", framework: "React js", icon: <FaReact size={20} /> },
            url: "https://to-do-react-ms.netlify.app",
            seeMore: true
        },
        {
            title: "Books Manager",
            image: "/images/FreeBook.png",
            description: "Study project for handling books, manages the list of books presented to the users as a gallery and the users collection.  Created with React JS, Tailwind, global application health management with Redux-Toolkit and Auth0.",
            skill: { language: "Javascript", framework: "React js", icon: <FaReact size={20} /> },
            url: "https://free-books-collection.netlify.app",
            seeMore: true
        },
        {
            title: "Incompany",
            image: "/images/Incompany.png",
            description: "Project developed for Costa Rican company Incompany, I collaborated in the creation of new section for the website.  The website was created with WordPress, using a template in Elementor.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://www.incompany.cr",
            seeMore: true
        },
        {
            title: "Simplisoft",
            image: "/images/Simplisoft.png",
            description: "Project developed for Costa Rican company Incompany, I collaborated in the development of the website.  The website was created with WordPress, using a template in Elementor.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://simplisoftcr.com",
            seeMore: true
        },
        {
            title: "Feria Nacional de la Tierra",
            image: "/images/FeriaNacionalTierra.png",
            description: "Project developed for a non-profit association called Jóvenes Ambientalistas, I collaborated in the development of the website.  The website was created with WordPress, using a template in Elementor.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://ferianacionaldelatierra.info",
            seeMore: true
        },
        {
            title: "Dev Challenges",
            image: "/images/DevChallenges.png",
            description: "Study project inspired by challenges from the Dev Challenges website.",
            skill: { language: "Typescript", framework: "React Js", icon: <FaReact size={20} /> },
            url: "https://ms-dev-challenges.netlify.app",
            seeMore: true
        },
    ]


    const data = [
        {
            label: "Javascript",
            value: "Javascript",
            icon: <TbBrandJavascript size={20} color="blue-gray" />
        },
        {
            label: "Typescript",
            value: "Typescript",
            icon: <TbBrandTypescript size={20} color="blue-gray" />,
        },
        {
            label: "Wordpress",
            value: "Wordpress",
            icon: <BsWordpress size={20} color="blue-gray" />,
        }
    ];

    return (
        <motion.section
            className="py-32"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", delay: 1 }}
        >
            <div className="flex flex-col justify-center text-center">
                <Typography variant="h2" className="text-gray-800">Some projects</Typography>
                <Typography className="text-gray-700">Web projects developed and published, using agile methodologies, and focused on work as a Frontend.</Typography>
                <div className="grid place-items-center sm:p-5 lg:p-10">
                    <Tabs value="Javascript">
                        <TabsHeader>
                            {data.map(({ label, value, icon }) => (
                                <Tab key={value} value={value}  >
                                    <div className="flex items-center gap-2">
                                        {icon}
                                        {label}
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value }) => (
                                <TabPanel key={value} value={value}>
                                    <div className="grid grid-flow-row gap-8 my-10 p-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                        {myprojects && myprojects?.filter(({ skill }) => value ? skill?.language.includes(value) : true)
                                            .map(({ title, image, description, skill, seeMore, url }, index) => (
                                                ProjectBox(title, image, description, skill, seeMore, url, index)
                                            ))}
                                    </div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </motion.section>
    )
}


function ProjectBox(title, image, description, skill, seeMore, url, index) {

    return (
        <>
            <Card key={index} className="w-full max-w-[24rem] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 sm:max-w-[32rem] md:max-w-[24rem]">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src={image}
                        alt="ui/ux review check"
                        className=" h-52 w-full"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray" className="text-start">
                        {title}
                    </Typography>
                    <Typography color="gray" className="mt-3 font-light text-start">
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-end justify-between">
                    <Chip value={skill.framework} icon={skill.icon} />
                    {seeMore && (
                        <Button
                            size="sm"
                            className=" bg-orange-500"
                            onClick={() => window.open(url, '_blank')}
                        >
                            See more
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </>
    )
}

