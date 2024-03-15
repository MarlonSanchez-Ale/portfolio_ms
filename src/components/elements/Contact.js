import {
    Typography,
    Button,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { motion } from 'framer-motion'
import { BsChatSquareTextFill } from "react-icons/bs";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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

const schema = yup
    .object({
        user_name: yup.string('Nombre de usuario no valido.').required('Ingrese su nombre').matches(
            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            "Enter valid first name !"
        ),
        user_subject: yup.string().required('Ingrese asunto del mensaje'),
        user_email: yup.string().email('Email, invalido').required('Ingrese su correo'),
        cellphone: yup.string().required('Ingrese su número telefónico'),
        message: yup.string().required('Ingrese su mensaje')
    })
    .required()

export default function Contact() {


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {

        emailjs
            .sendForm('service_n6uj2ci', 'contact_form', 'form', { publicKey: 'Cabs0zO-cptO-38B1' })
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Gracias por tu mensaje!",
                    text: `Me esforzaré por responderte lo antes posible. 
                         ¡Que tengas un gran día!"`,
                    showConfirmButton: true,
                });
                reset()
            },
                (error) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Error de envío",
                        text: error.text,
                        showConfirmButton: true,
                    });
                },
            );
    }

    const handlePhoneBlur = (value) => {
        setValue('cellphone', value);
    };

    return (
        <section id="contact" className="py-32 bg-white sm:px-10">
            <motion.div
                className="flex flex-col justify-center items-center gap-10 text-center"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ type: "spring", delay: 1 }}
            >
                <div className="grid place-items-center p-5 gap-2">
                    <BsChatSquareTextFill size={50} color="orange" />
                    <Typography variant="h2" className="text-gray-800">Contame más sobre tu idea</Typography>
                    <Typography className="text-gray-700">
                        Juntos podemos construir algo verdaderamente extraordinario
                    </Typography>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-5 border sm:w-full lg:w-[80vh] border-gray-200 rounded-md p-10 shadow-md">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center w-full rounded-md gap-5">
                        <div>
                            <Input
                                label="Nombre"
                                type="text"
                                {...register('user_name')}
                            />
                            <p className=" text-sm text-red-600">{errors.user_name?.message}</p>
                        </div>
                        <div>
                            <Input
                                label="Asunto"
                                type="text"
                                {...register('user_subject')}
                            />
                            <p>{errors.user_subject?.message}</p>
                        </div>
                        <div>
                            <Input
                                label="Correo Electrónico"
                                type="email"
                                {...register('user_email')}
                            />
                            <p>{errors.user_email?.message}</p>
                        </div>
                        <div>
                            <Controller
                                name="cellphone"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <PhoneInput
                                        {...field}
                                        country="us"
                                        inputProps={{
                                            name: 'cellphone',
                                            required: true,
                                            onBlur: (e) => handlePhoneBlur(e.target.value)
                                        }}
                                        placeholder="Número telefonico"
                                        inputStyle={{
                                            width: "100%"
                                        }}
                                    />
                                )}
                            />
                            <p>{errors.cellphone?.message}</p>
                        </div>
                    </div>



                    <Textarea label="Mensaje" {...register('message')} />
                    <Button size="lg" type="submit" className="bg-gray-800">Enviar mensaje</Button>
                </form>
            </motion.div>
        </section>
    )
}

