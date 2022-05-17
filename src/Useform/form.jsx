import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const inputstyle={
        width:'90%',
        position:'relative',
        margin:'10px',
        padding:'5px',
        borderRadius:"5%"
    }
    const btn={
        margin:'10px',
         width:"auto",
        height:'30px',
        backgroundColor:"skyblue",
        border:'none',
        cursor:'pointer'
    }
    return (
        <div style={{width:'40%',padding:'5%',position:'absolute',top:'50%',
        left:'50%',transform:'translate(-50%,-50%)'
        ,margin:'auto',textAlign:'center'
        ,borderRadius:'5%',boxShadow:'5px 5px lightgray',minHeight:"200px"}}>
            <h3>React hook useform</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <input
                        style={inputstyle}
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p style={{color:"red"}}>Please enter the First Name</p>}
                <Form.Field >
                    <input style={inputstyle}
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p style={{color:"red"}}>Please enter the Last Name</p>}
                <Form.Field>
                    <input
                    style={inputstyle}
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p style={{color:"red"}}>Please enter the Email</p>}
                <Form.Field >
                    <input
                        placeholder='Password'
                        style={inputstyle}
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p style={{color:"red"}} >Please enter the Password</p>}
                <Button type='submit' style={btn}>Submit</Button>
            </Form>
        </div>
    )
}