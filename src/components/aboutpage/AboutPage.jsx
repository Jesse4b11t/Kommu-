import React from 'react';

function AboutPage() {
    return (
        <React.Fragment>
            <div id="about view" className="container text-center align-center">
                <h1 style={{ color: 'green' }}>About Us</h1>
                <img
                    alt="kommu"
                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1638944381707x147331591208664130%2FKommu.PNG?w=768&h=417&auto=compress&fit=crop&dpr=1.25"
                />

                <h2>
                    <em style={{ color: 'green' }}>How It All Started!</em>
                </h2>

                <p
                    style={{
                        color: 'black',
                        fontSize: '20px',
                        maxWidth: '900px',
                        margin: 'auto',
                        paddingTop: '10px',
                        paddingBottom: '20px',
                    }}>
                    Co-founders <strong>Bo Abrams, Gus Woythaler, and Adam Vuilleumier</strong> are UCLA graduate and
                    undergraduate students who have plenty of first-hand experience spending significant portions of
                    their monthly rent on just a few days’ travel lodging out of their already meager bank accounts.
                </p>

                <p
                    style={{
                        color: 'black',
                        fontSize: '20px',
                        maxWidth: '900px',
                        margin: 'auto',
                        paddingBottom: '20px',
                    }}>
                    Bo wanted to go on vacation before starting his MBA program. Preparing for the expenses of school,
                    he short because he could not afford to stay longer. He used Turo, a peer-to-peer car-sharing
                    application, to rent a car in Montana.
                </p>
                <p
                    style={{
                        color: 'black',
                        fontSize: '20px',
                        maxWidth: '900px',
                        margin: 'auto',
                        paddingBottom: '20px',
                    }}>
                    The experience had him asking,{' '}
                    <strong>
                        <q>
                            Why cant I leverage my most expensive asset, my apartment, in a peer-to-peer marketplace to
                            travel the world?
                        </q>
                    </strong>{' '}
                    Like most renters, he was prohibited from subleasing, but upon conducting some initial research, he
                    found that he could swap spots with other travelers. He pitched the idea to Gus and Adam who
                    similarly felt constrained by lodging expenses. The trio started Kommu, a lodging swapping platform.
                </p>

                <br />
                <div className="row"></div>
            </div>
        </React.Fragment>
    );
}

export default AboutPage;
