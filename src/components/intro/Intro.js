import React, { useState, useEffect, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';
import '../../App.scss';

const Intro = () => {
    const [intro, setIntro] = useState();

    useEffect(() => {
        // Connect to Prismic
        Prismic.api('http://hakon-portfolio.prismic.io/api/v2').then(api => {
            const introPred = Prismic.Predicates.at('document.type', 'intro');
            api.query(introPred).then(response => {
                setIntro(response.results[0]);
            });
        });
    }, []);
    return (
        <div>
            {intro &&
                <Fragment>

                    <section className="intro">
                        <span>{PrismicReact.RichText.asText(intro.data.introtext)}<h6>{PrismicReact.RichText.asText(intro.data.name)}</h6></span>

                        <span>{PrismicReact.RichText.asText(intro.data.introtext2)}</span>
                    </section>
                </Fragment>
            }
        </div>
    );
}

export default Intro;
