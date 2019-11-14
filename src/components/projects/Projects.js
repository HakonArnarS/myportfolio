import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Connect to Prismic
        Prismic.api('http://hakon-portfolio.prismic.io/api/v2').then(api => {
            const projectsPred = Prismic.Predicates.at('document.type', 'projects');
            api.query(projectsPred).then(response => {
                setProjects([...response.results]);
            });
        });
    }, []);
    return (
        <div>
            {projects.length &&
                projects.map((project, index) => {
                    console.log(projects);
                    return (
                        <div className="project" key={index}>
                            <img src={project.data.projectimg.url} alt="a project" />
                            {PrismicReact.RichText.render(project.data.projecttitle)}
                            {PrismicReact.RichText.render(project.data.projectdescription)}
                        </div>
                    );
                })}
        </div>
    );
}

export default Projects;
