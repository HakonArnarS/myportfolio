import React, { useState, useEffect, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';
import '../../App.scss';

const About = () => {
    const [about, setAbout] = useState();

    useEffect(() => {
        // Connect to Prismic
        Prismic.api('https://hakon-portfolio.prismic.io/api/v2').then(api => {
            const aboutPred = Prismic.Predicates.at('document.type', 'about');
            api.query(aboutPred).then(response => {
                setAbout(response.results[0]);
            });
        });
    }, []);
    return (
        <div>
            {about &&
                <Fragment>
                    <section className="about">
                        <h2>{PrismicReact.RichText.asText(about.data.sectiontitle)}</h2>
                        <div className="infoandimg" >
                            <p>{PrismicReact.RichText.asText(about.data.sectiontext)}</p>
                            <img src={about.data.avatar.url} alt="avatar" className="avatar" />
                        </div>
                        <span>{PrismicReact.RichText.asText(about.data.skills)}</span>
                        {PrismicReact.RichText.render(about.data.skillslist)}
                    </section>
                </Fragment>
            }
        </div>
    );
}

export default About;
