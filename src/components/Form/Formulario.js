import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import './Formulario.css';

function Formulario() {
    const [user, setUser] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            lastname: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('No es un email válido').required('El email es obligatorio'),
            password: Yup.string().min(5, 'Al menos 5 carácteres').max(12, 'Máximo 12 carácteres').required('La contraseña es obligatoria').oneOf([Yup.ref('confirmPassword')], 'Las contraseñas deben ser iguales'),
            confirmPassword: Yup.string().required('La contraseña es obligatoria').oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales'),
        })
        ,
        onSubmit: (userRegister) => {
            setUser(userRegister)
        }
    })
    if(user !== null){
        console.log(user)
    }
    return (
        <Container className="Form-container" >
            <h1 className="Form-title" style={{marginTop:'15rem'}}>Formulario de registro</h1>
            <Form className="Formulario" onSubmit={formik.handleSubmit} >
                <Form.Input 
                    type="text" 
                    placeholder="Nombre" 
                    name="name" 
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    value={formik.values.name}
                />
                <Form.Input
                    type="text" 
                    placeholder="Apellido" 
                    name="lastname" 
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
                    value={formik.values.lastname}                    
                />
                <Form.Input 
                    type="text" 
                    placeholder="Correo electrónico" 
                    name="email" 
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    value={formik.values.email}
                />
                <Form.Input 
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    value={formik.values.password}
                />
                <Form.Input 
                    type="password" 
                    placeholder="Repetir contraseña" 
                    name="confirmPassword" 
                    onChange={formik.handleChange}
                    error={formik.errors.confirmPassword}
                    value={formik.values.confirmPassword}
                />
                <Button type="submit">Registro</Button>
            </Form>
        </Container>
    )
}

export default Formulario;
