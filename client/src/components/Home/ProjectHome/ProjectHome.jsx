import axios from 'axios';
import React, { useEffect, useState } from 'react';

// const { REACT_APP_API_URL } = process.env;

function ProjectHome() {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const resp = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/projects`
            );
            console.log(resp.data);
            setProjects(resp.data);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="container__projects__home">
            <div className="project__home">
                {projects.map((project, index) => (
                    <>
                        {index % 2 === 0 ? (
                            <>
                                <div className="text__project__home poster__even">
                                    <h1 className="h1__project">
                                        {project.title}
                                    </h1>
                                    <h3 className="text__project">
                                        {project.description_project}
                                    </h3>
                                </div>

                                {project.images
                                    .filter((image) => image.is_poster === 1)
                                    .map((poster) => (
                                        <img
                                            className="poster__project__home poster__even"
                                            src={`${process.env.REACT_APP_API_URL}/images/${poster.srcBefore}`}
                                            alt={poster.altBefore}
                                        />
                                    ))}
                            </>
                        ) : (
                            <>
                                {project.images
                                    .filter((image) => image.is_poster === 1)
                                    .map((poster) => (
                                        <img
                                            className="poster__project__home poster__odd"
                                            src={`${process.env.REACT_APP_API_URL}/images/${poster.srcBefore}`}
                                            alt={poster.altBefore}
                                        />
                                    ))}
                                <div className="text__project__home poster__odd">
                                    <h1 className="h1__project">
                                        {project.title}
                                    </h1>
                                    <h3 className="text__project poster__odd">
                                        {project.description_project}
                                    </h3>
                                </div>
                            </>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}

export default ProjectHome;
