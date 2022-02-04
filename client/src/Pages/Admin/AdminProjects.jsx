import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import adminReducer from '../../reducer/adminReducer';

const initialState = {
    projects: [],
    projectId: '',
    createdProject: '',
    projectTitle: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    tags: '',
    images: [],
    projectImg: '',
    createdImg: '',
    src: '',
    alt: '',
    descriptionImg: '',
    isPoster: '0',
    createBtnActive: true,
    updateBtnActive: false,
    deleteBtnActive: false,
};

const AdminProjects = () => {
    const [state, dispatch] = useReducer(adminReducer, initialState);
    const { projects, images } = state;

    const handleCreate = () => {
        if (!state.createBtnActive) {
            dispatch({ type: 'UPDATE_CREATE_BTN' });
            if (state.updateBtnActive) {
                dispatch({ type: 'UPDATE_UPDATE_BTN' });
            }
            if (state.deleteBtnActive) {
                dispatch({ type: 'UPDATE_DELETE_BTN' });
            }
        }
    };

    const handleUpdate = () => {
        if (!state.updateBtnActive) {
            dispatch({ type: 'UPDATE_UPDATE_BTN' });
            if (state.createBTNActive) {
                dispatch({ type: 'UPDATE_CREATE_BTN' });
            }
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
            if (state.updateBtnActive) {
                dispatch({ type: 'UPDATE_UPDATE_BTN' });
            }
        }
    };

    let submitButtonText = 'NEW  PROJECT';

    if (state.createToggleActive) {
        submitButtonText = 'NEW  PROJECT';
    }
    if (state.updateToggleActive) {
        submitButtonText = 'UPDATE PROJECT';
    }
    if (state.deleteToggleActive) {
        submitButtonText = 'DELETE PROJECT';
    }

    const getProjects = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/projects`
            );
            dispatch({ type: 'UPDATE_PROJECTS', payload: response.data });
        } catch (err) {
            console.log(err.response.data);
        }
    };
    useEffect(() => {
        getProjects();
    }, []);

    const getPictures = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/images/`
            );
            dispatch({ type: 'UPDATE_IMAGES', payload: response.data });
        } catch (err) {
            console.log(err.response.data);
        }
    };
    useEffect(() => {
        getPictures();
    }, []);

    const createProject = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/projects`,
                {
                    title: `${state.projectTitle}`,
                    description_project: `${state.projectDescription}`,
                    starting_date: `${state.startDate}`,
                    end_date: `${state.endDate}`,
                }
            );
            dispatch({
                type: 'UPDATE_CREATED_PROJECT',
                payload: response.data,
            });
            console.log(response.data);
            return response.data.id;
        } catch (err) {
            console.log(err.response.data);
            return null;
        }
    };
    const updateProject = async () => {
        const { projectId } = state;
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/projects/${projectId}`,
                {
                    title: `${state.projectTitle}`,
                    description_project: `${state.projectDescription}`,
                    starting_date: `${state.startDate}`,
                    end_date: `${state.endDate}`,
                }
            );
            dispatch({ type: 'UPDATE_PROJECTS', payload: response.data });
            return response.data.id;
        } catch (err) {
            console.log(err.response.data);
            return null;
        }
    };

    const createPicture = async (id) => {
        if (state.pictureEvent) {
            const { src } = state;
            const { alt } = state;
            const { descriptionImg } = state;
            const { isPoster } = state;
            const data = new FormData();
            data.append('projectPictureFile', state.projectImg);
            data.append(
                'pictureData',
                JSON.stringify({
                    src,
                    alt,
                    isPoster,
                    descriptionImg,
                    projectId: id,
                })
            );

            try {
                const resp = await axios.post(
                    `${process.env.REACT_APP_API_URL}/api/images/projects`,
                    data,
                    { withCredentials: true }
                );
                dispatch({
                    type: 'UPDATE_PROJECT_IMG',
                    payload: resp.data,
                });
            } catch (err) {
                console.log(err.response.data);
            }
        }
    };

    const deleteProject = async () => {
        const { projectId } = state;
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/projects/${projectId}`
            );
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const handleChangeFile = (e) => {
        const selectedFile = e.target.files[0];
        const { type } = selectedFile;
        if (
            type !== 'image/png' &&
            type !== 'image/jpg' &&
            type !== 'image/jpeg'
        ) {
            console.log('Wrong format: .png, .jpg ou .jpeg');
            dispatch({ type: 'RESET_FILE_INPUT' });
        } else {
            dispatch({
                type: 'UPDATE_SRC',
                payload: e.target.files[0],
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.createBtnActive) {
            const id = await createProject();
            await createPicture(id);
        }
        if (state.updateBtnActive) {
            await updateProject();
        }
        if (state.deleteBtnActive) {
            await deleteProject();
        }
    };
    useEffect(() => {
        getProjects();
    }, [state.alt]);

    return (
        <div className="admin__container__form">
            <div className="btn__form">
                <button
                    type="button"
                    className={
                        state.createBtnActive ? 'btn__form' : 'btn__form__off'
                    }
                    onClick={handleCreate}
                >
                    CREATE PROJECT
                </button>
                <button
                    type="button"
                    className={
                        state.updateBtnActive ? 'btn__form' : 'btn__form__off'
                    }
                    onClick={handleUpdate}
                >
                    UPDATE PROJECT
                </button>
                <button
                    type="button"
                    className={
                        state.deleteBtnActive ? 'btn__form' : 'btn__form__off'
                    }
                    onClick={handleDelete}
                >
                    DELETE PROJECT
                </button>
            </div>
            <h2 className="title__form">PROJECTS</h2>
            <div className="projects__form__container">
                {projects.map((project) => (
                    <div>{project.projectTitle}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="form__projects">
                <label htmlFor="projectId">
                    Id Project:
                    <input
                        type="text"
                        id="projectId"
                        value={state.projectId}
                        onChange={(e) =>
                            dispatch({
                                type: 'UPDATE_PROJECT_ID',
                                payload: e.target.value,
                            })
                        }
                    />
                </label>

                {!state.deleteToggleActive && (
                    <>
                        <label htmlFor="projectTitle">
                            Title
                            <input
                                id="projectTitle"
                                value={state.projectTitle}
                                required
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_TITLE_PROJECT',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="projectDescription">
                            Description
                            <input
                                id="projectDescription"
                                value={state.projectDescription}
                                required
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_DESCRIPTION_PROJECT',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="eventDate">
                            Start of the project:
                            <input
                                type="date"
                                id="startDate"
                                required
                                value={state.startDate}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_START_DATE',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="endDate">
                            End:
                            <input
                                type="date"
                                id="endDate"
                                required
                                value={state.endDate}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_END_DATE',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="tags">
                            Tags
                            <input
                                id="tags"
                                value={state.tags}
                                required
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_TAGS',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label htmlFor="tags">
                            ALT
                            <input
                                id="tags"
                                value={state.alt}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_ALT',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <h2 className="title__form">IMAGES</h2>
                        {images
                            .filter(
                                (imageId) =>
                                    imageId.project_id === state.eventId
                            )
                            .map((image) => image.alt)}

                        <label htmlFor="projectImg">
                            Image de la formation:
                            <input
                                type="file"
                                id="projectImg"
                                name="projectImg"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleChangeFile}
                            />
                        </label>
                        <label htmlFor="authorPicture">
                            Description:
                            <input
                                type="text"
                                id="descriptionImg"
                                value={state.descriptionImg}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_DESCRIPTION_IMG',
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </label>

                        <label htmlFor="isPoster">
                            First public image
                            <select
                                id="isPoster"
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATE_IS_POSTER',
                                        payload: e.target.value,
                                    })
                                }
                                value={state.isPoster}
                            >
                                <option value="0">Non</option>
                                <option value="1">Oui</option>
                            </select>
                        </label>
                    </>
                )}
                <button type="submit">{submitButtonText}</button>
            </form>
        </div>
    );
};

export default AdminProjects;
