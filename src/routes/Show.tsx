import React, { useState, useEffect } from 'react';

interface Props { id: string };

const Show:React.FC<Props> = ({ id }) => {
    const [showDetails, setShowDetails] = useState()
    const [cast, setCastDetails] = useState()
    useEffect(() => {

        // fetch from API
        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(data => setShowDetails(data));

        fetch(`http://api.tvmaze.com/shows/${id}/cast`)
            .then(res => res.json())
            .then(data => setCastDetails(data));
    } ,[ id ]);


    console.log('showDetails: ', showDetails);
    console.log('cast: ', cast);

    if (!showDetails || !cast) {
        return null;
    }

    return (
        <div style={{ display: 'flex', padding: '2rem' }}>
            <div>
                <img
                    style={{ width: '600px' }}
                    src={showDetails.image.original}
                    alt={showDetails.name}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    marginLeft: '2rem',
                }}
            >
                <h1>{showDetails.name}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: showDetails.summary,
                    }}
                ></p>
                {cast && (
                    <>
                        <h2>Cast</h2>
                        <div
                            style={{
                                flexFlow: 'row',
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}
                        >
                            {cast.map((p: any) => (
                                <div key={p.character.id}>
                                   { p.person.image && <img
                                        src={p.person.image.medium}
                                        style={{ marginRight: '1rem' }}
                                        alt={p.person.name}
                                    />}
                                    <div>{p.person.name}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Show;
