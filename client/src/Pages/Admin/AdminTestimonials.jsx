import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import adminReducer from '../../reducer/adminReducer';
import './AdminProject.css';

const initialState = {
    testimonials: [],
    createdTestimonial: '',
    firstname: '',
    quote: '',
    testimonialId: '',
    createBtnActive: true,
    deleteBtnActive: false,
};

const AdminTestimonials = () => {
    const [state, dispatch] = useReducer(adminReducer, initialState);
    const { testimonials } = state;

    const handleCreate = () => {
        if (!state.createBtnActive) {
            dispatch({ type: 'UPDATE_CREATE_BTN' });
            if (state.deleteBtnActive) {
                dispatch({ type: 'UPDATE_DELETE_BTN' });
            }
        }
    };
    const handleDelete = () => {
        if (!state.deleteBtnActive) {
            dispatch({ type: 'UPDATE_DELETE_BTN' });
            if (state.createBTNActive) {
                dispatch({ type: 'UPDATE_CREATE_BTN' });
            }
        }
    };

    let submitButtonText = 'NEW  TESTIMONIAL';

    if (state.createToggleActive) {
        submitButtonText = 'NEW  TESTIMONIAL';
    }
    if (state.deleteToggleActive) {
        submitButtonText = 'DELETE TESTIMONIAL';
    }

    const getTestimonials = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/testimonials`
            );
            dispatch({ type: 'UPDATE_TESTIMONIALS', payload: response.data });
        } catch (err) {
            console.log(err.response.data);
        }
    };
    useEffect(() => {
        getTestimonials();
    }, []);

    const createTestimonial = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/testimonials`,
                {
                    firstname: `${state.firstname}`,
                    quote: `${state.quote}`,
                }
            );
            dispatch({
                type: 'UPDATE_CREATED_TESTIMONIAL',
                payload: response.data,
            });
            console.log(response.data);
            return response.data.id;
        } catch (err) {
            console.log(err.response.data);
            return null;
        }
    };
    const deleteTestimonial = async () => {
        const { testimonialId } = state;
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/projects/${testimonialId}`
            );
        } catch (err) {
            console.log(err.response.data);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.createBtnActive) {
            await createTestimonial();
        }
        if (state.deleteBtnActive) {
            await deleteTestimonial();
        }
    };
    useEffect(() => {
        getTestimonials();
    }, [state.firstname]);

    return (
        <div className="container__testimonials">
            <div className="btn__form">
                <button
                    type="button"
                    className={
                        state.createBtnActive
                            ? 'btn__testimonial'
                            : 'btn__form__off'
                    }
                    onClick={handleCreate}
                >
                    CREATE
                </button>
                <button
                    type="button"
                    className={
                        state.deleteBtnActive
                            ? 'btn__testimonial'
                            : 'btn__form__off'
                    }
                    onClick={handleDelete}
                >
                    DELETE
                </button>
            </div>
            <h2 className="title__form">PROJECTS</h2>
            <form onSubmit={handleSubmit} className="form__testimonials">
                <label htmlFor="testimonialId">
                    Id Project:
                    <input
                        type="text"
                        id="testimonialId"
                        value={state.testimonialId}
                        onChange={(e) =>
                            dispatch({
                                type: 'UPDATE_TESTIMONIAL_ID',
                                payload: e.target.value,
                            })
                        }
                    />
                </label>
                {!state.deleteToggleActive && (
                    <>
                        <label htmlFor="firstname">
                            Firstname:
                            <input
                                id="firstname"
                                value={state.firstname}
                                required
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_FIRSTNAME',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="quote">
                            Quote:
                            <input
                                id="quote"
                                value={state.quote}
                                required
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_QUOTE',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                    </>
                )}
                <button type="submit" className="btn__testimonial">
                    {submitButtonText}
                </button>
            </form>

            {testimonials.map((testimonial) => (
                <>
                    {console.log(testimonial)}
                    <h1>{testimonial.firstname}</h1>
                    <p>{testimonial.quote}</p>
                </>
            ))}
        </div>
    );
};

export default AdminTestimonials;
