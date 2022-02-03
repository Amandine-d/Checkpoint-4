import axios from 'axios';
import React, { useEffect, useState } from 'react';

// const { REACT_APP_API_URL } = process.env;

function ProjectHome() {
    const [projects, setProjects] = useState();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects`).then((res) => {
            setProjects(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="container__projects__home">
            <div className="project__home">
                {projects.map((project) => (
                    <>
                        <h1>{project.title}</h1>
                        <h3>{project.description_project}</h3>
                    </>
                ))}
            </div>
        </div>
    );
}

export default ProjectHome;
