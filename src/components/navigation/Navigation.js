import React, { useState, useEffect, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';
import '../../App.scss';

const Navigation = () => {
    const [navigation, setNavigation] = useState();

    useEffect(() => {
        // Connect to Prismic
        Prismic.api('http://hakon-portfolio.prismic.io/api/v2').then(api => {
            const navigationPred = Prismic.Predicates.at('document.type', 'header');
            api.query(navigationPred).then(response => {
                setNavigation(response.results[0]);
            });
        });
    }, []);
    return (
        <div >
            {navigation &&
                <Fragment>
                    <nav className="navigation" >
                        <span>{PrismicReact.RichText.asText(navigation.data.logo)}</span>
                        {PrismicReact.RichText.render(navigation.data.navlinks)}
                        {PrismicReact.RichText.render(navigation.data.burger)}
                    </nav>
                </Fragment >
            }
        </div>
    );
}

export default Navigation;
