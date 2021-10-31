import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://creepy-phantom-09765.herokuapp.com/services', data)
    .then(res => {
      if(res.data.insertedId){
        alert('Added Successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service">
            <h1 className="text-warning">Please Add a service</h1>
            <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description" />
      <input type="number" {...register("price")} placeholder="Price" />
      <input {...register("img")} placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;