import { Avatar, Typography, IconButton, Chip } from "@material-tailwind/react"
import { BsInstagram, BsLinkedin, BsGoogle, BsChevronDown, BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMui, SiTailwindcss } from 'react-icons/si'

export default function HomeSection() {
    return (
        <section className="py-28">
            <div className="flex flex-col justify-center p-4 gap-3 text-center text-gray-100">
                <div>
                    <Avatar
                        size="lg"
                        alt="avatar"
                        sizes={50}
                        src="/images/autor.jpeg"
                        className="border w-40 h-40 border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
                    />
                </div>
                <div className="flex flex-col justify-center gap-5">
                    <div>
                        <Typography variant="h4" color="gray-200" className="mb-2">
                            Marlon Sánchez
                        </Typography>
                        <Typography color="gray" className="font-medium" textGradient>
                            I'm a Systems engineer and Web Developer
                        </Typography>
                    </div>
                    <div className="flex flex-row justify-center gap-5">
                        <BsInstagram size={20} color="white" />
                        <BsLinkedin size={20} color="white" />
                        <BsGoogle size={20} color="white" />
                    </div>
                    <div className="grid place-items-center my-10">
                        <div className="flex gap-2">
                            <Chip value="Javascript" className=" hover:bg-blue-gray-800" icon={<IoLogoJavascript />} />
                            <Chip value="React Js" className=" hover:bg-blue-gray-800" icon={<FaReact />} />
                            <Chip value="Next Js" className=" hover:bg-blue-gray-800" icon={<TbBrandNextjs />} />
                            <Chip value="HTML" className=" hover:bg-blue-gray-800" icon={<BsFiletypeHtml />} />
                            <Chip value="CSS" className=" hover:bg-blue-gray-800" icon={<BsFiletypeCss />} />
                            <Chip value="Talwind" className=" hover:bg-blue-gray-800" icon={<SiTailwindcss />} />
                            <Chip value="Material UI" className=" hover:bg-blue-gray-800" icon={<SiMui />} />
                        </div>
                    </div>
                </div>


                <div className="grid place-items-center my-10">
                    <IconButton variant="outlined" >
                        <BsChevronDown size={30} color="white" />
                    </IconButton>
                </div>
            </div>
        </section>
    )
}