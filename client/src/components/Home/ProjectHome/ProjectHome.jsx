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
                {projects.map((project) => (
                    <>
                        <div className="text__project__home">
                            <h1>{project.title}</h1>
                            <h3>{project.description_project}</h3>
                        </div>

                        <div className="image__project__home">
                            {project.images
                                .filter((image) => image.is_poster === 1)
                                .map((poster) => (
                                    <img
                                        className="poster__project__home"
                                        src={`${process.env.REACT_APP_API_URL}/images/${poster.srcBefore}`}
                                        alt={poster.altBefore}
                                    />
                                ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default ProjectHome;
