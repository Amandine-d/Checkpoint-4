import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { projectValidation } from '../../validation/validationForm';

function AdminValidation() {
    const formik = useFormik({
        initialValues: {
            title: '',
            description_project: '',
            start_date: '',
            end_date: '',
            // tags: '',
        },
        validationSchema: projectValidation,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('data', JSON.stringify(values));
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/projects`,
                formData
            );
            if (res.status === 201) {
                console.log('Project added');
            }
        },
    });

    return (
        <div>
            <div className="admin__container__form">
                <div className="projects__form__container">
                    <div className="dashboard__title">
                        <h1>New project</h1>
                    </div>
                    <div className="dash">
                        <form>
                            <div className="form__projects">
                                <label htmlFor="title">
                                    Titre du projet:
                                    <input
                                        type="text"
                                        name="title"
                                        className={
                                            formik.errors.title
                                                ? 'input-error'
                                                : ''
                                        }
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                    />
                                </label>
                                {formik.errors.title && (
                                    <p className="error">
                                        {formik.errors.title}
                                    </p>
                                )}
                            </div>
                            <div className="dashboard__item">
                                <label htmlFor="description_project">
                                    Description:
                                    <textarea
                                        name="description_project"
                                        rows={10}
                                        onChange={formik.handleChange}
                                        value={
                                            formik.values.description_project
                                        }
                                    />
                                </label>
                                {formik.errors.description_project && (
                                    <p className="error">
                                        {formik.errors.description_project}
                                    </p>
                                )}
                            </div>
                            <div className="dashboard__item">
                                <label htmlFor="starting_date">
                                    Date de début:
                                    <input
                                        type="datetime-local"
                                        name="starting_date"
                                        className={
                                            formik.errors.starting_date
                                                ? 'input-error'
                                                : ''
                                        }
                                        onChange={formik.handleChange}
                                        value={formik.values.starting_date}
                                    />
                                </label>
                                {formik.errors.starting_date && (
                                    <p className="error">
                                        {formik.errors.starting_date}
                                    </p>
                                )}
                            </div>
                            <div className="dashboard__item">
                                <label htmlFor="end_date">
                                    Date de fin:
                                    <input
                                        type="datetime-local"
                                        name="end_date"
                                        className={
                                            formik.errors.end_date
                                                ? 'input-error'
                                                : ''
                                        }
                                        onChange={formik.handleChange}
                                        value={formik.values.end_date}
                                    />
                                </label>
                                {formik.errors.end_date && (
                                    <p className="error">
                                        {formik.errors.end_date}
                                    </p>
                                )}
                            </div>
                        </form>
                        <div className="dashboard_form__button">
                            <button
                                onClick={formik.handleSubmit}
                                className="button pulse"
                                type="submit"
                            >
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminValidation;
