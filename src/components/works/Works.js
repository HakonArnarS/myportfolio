import React, { useState, useEffect, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';
import Projects from '../projects/Projects';
import '../../App.scss';

const Works = () => {
    const [works, setWorks] = useState();

    useEffect(() => {
        // Connect to Prismic
        Prismic.api('https://hakon-portfolio.prismic.io/api/v2').then(api => {
            const worksPred = Prismic.Predicates.at('document.type', 'works');
            api.query(worksPred).then(response => {
                setWorks(response.results[0]);
            });
        });
    }, []);
    return (
        <div>
            {works &&
                <Fragment>

                    <section className="works" >
                        <h2>{PrismicReact.RichText.asText(works.data.sectiontitle)}</h2>

                        <div className="worksContainer">
                            <Projects />
                        </div>

                    </section>
                </Fragment>
            }
        </div>
    );
}

export default Works;
