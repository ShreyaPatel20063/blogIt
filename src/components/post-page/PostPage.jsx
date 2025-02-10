import React from 'react';
import './post-page.css';
import res from '../../../data/DataService';
import { useForm } from 'react-hook-form';

const Input = ({ placeholder, label, register, required }) => (
    <>
        <label>{label}</label>
        <input placeholder={placeholder} {...register(label, { required })} />
    </>
);
const TextArea = ({ placeholder, label, register, required }) => (
    <>
        <label>{label}</label>
        <textarea
            placeholder={placeholder}
            {...register(label, { required })}
        ></textarea>
    </>
);
function PostPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const blog = {
            id: res.getListLength + 1,
            title: data.Title,
            content: data.Content,
        };
        res.getDataByPost(blog);
        // console.log(data);
        alert('Blog Added Succesfully');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Enter Title Here..." label="Title" register={register} required />
            {errors.Title && <span>*This field is required</span>}
            <br />
            <TextArea placeholder="Enter Content Here..." label="Content" register={register} required />
            {errors.Content && <span>*This field is required</span>}
            <br />
            <input id="submit" type="submit" />
        </form>
    );
}
export default PostPage;
