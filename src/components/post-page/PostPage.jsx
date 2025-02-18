import React from 'react';
import './post-page.css';
import res from '../../../data/DataService';
import { useForm } from 'react-hook-form';
import { addNewPost } from '../../postSlice'
import { useSelector, useDispatch } from 'react-redux';

const Input = ({ placeholder, label, register, required }) => (
    <>
        <label>{label}</label>
        <input
            id="input"
            placeholder={placeholder}
            {...register(label, {
                required: `*This field is required`,
                maxLength: 90,
                validate: {
                    noEmpty: (value) =>
                        value.trimEnd() !== "" || `Please add ${label}`
                }
            })}
        />
    </>
);
const TextArea = ({ placeholder, label, register, required }) => (
    <>
        <label>{label}</label>
        <textarea
            id="textarea"
            placeholder={placeholder}
            {...register(label, {
                required: `*This field is required`,
                validate: {
                    noEmptyInput: (value) =>
                        value.trim() !== "" || `Please add ${label}`
                }
            })}
        ></textarea>
    </>
);
function PostPage() {
    const blogLength = useSelector((state) => state.posts.value.length);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const blog = {
            id: blogLength + 1,
            title: data.Title.trimEnd(),
            content: data.Content.trimEnd(),
        };
        res.setDataByPost(blog);
        const allBlogs = await res.getData()
        dispatch(addNewPost(allBlogs));
        alert("Blog Added Successfully");
        document.getElementById('input').value = '';
        document.getElementById('textarea').value = '';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder="Enter Title Here..."
                label="Title"
                register={register}
                required
            />
            {errors.Title && <span>{errors.Title.message}</span>}

            <br />
            <TextArea
                placeholder="Enter Content Here..."
                label="Content"
                register={register}
                required
            />
            {errors.Content && <span>{errors.Content.message}</span>}
            <br />
            <input id="submit" type="submit" />
        </form>
    );
}
export default PostPage;
