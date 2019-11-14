import React, { useState, useEffect, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import PrismicReact from 'prismic-reactjs';
import '../../App.scss';

const Footer = () => {
    const [footer, setFooter] = useState();

    useEffect(() => {
        // Connect to Prismic
        Prismic.api('http://hakon-portfolio.prismic.io/api/v2').then(api => {
            const footerPred = Prismic.Predicates.at('document.type', 'footer');
            api.query(footerPred).then(response => {
                setFooter(response.results[0]);
            });
        });
    }, []);
    return (
        <div >
            {footer &&
                <Fragment>
                    <footer className="footer">
                        <div>
                            <p>Email: {PrismicReact.RichText.asText(footer.data.email)}</p>
                            <p>Phone: (+354) {PrismicReact.RichText.asText(footer.data.phone)}</p>
                        </div>
                    </footer>
                </Fragment>
            }
        </div>
    );
}

export default Footer;
