

import React from 'react'
import { useForm } from 'react-hook-form'



export const DataForm = () => {

    const { register, handleSubmit} = useForm({
        defaultValues: {
            buyerEmail: '',
            buyerName: '',
            buyerLastName: '',
            buyerCelphone:'',
        }
    });
    // Submit your data into Redux store
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("buyerEmail")} />
            <input {...register("buyerName")} />
            <input {...register("buyerLastName")} />
            <input {...register("buyerCelphone")} />
            <input type="submit" />
        </form>
    );
}
