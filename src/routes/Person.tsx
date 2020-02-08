import * as React from 'react';
import { useParams } from 'react-router-dom';

function Person() {
    const [person, setPerson] = React.useState<any>(null);
    const [shows, setShows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const params = useParams<any>();
    React.useEffect(() => {
        // fetch from API
        setLoading(true);
        const fetchDate = async () => {
            await fetch(`http://api.tvmaze.com/people/${params.id}`)
                .then(res => res.json())
                .then(data => setPerson(data));
            await fetch(
                `http://api.tvmaze.com/people/${params.id}/castcredits?embed=show`
            )
                .then(res => res.json())
                .then(data => setShows(data));
            setLoading(false);
        };
        fetchDate();
    }, [params.id]);

    if (loading) {
        return <div>'loading...'</div>;
    }
    console.log(shows);
    return (
        <div style={{ display: 'flex', padding: '2rem' }}>
            <div>
                <img
                    style={{ width: '600px' }}
                    src={person.image.original}
                    alt={person.name}
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
                <h1>{person.name}</h1>
                
                {shows && (
                    <>
                        <h2>Credits</h2>
                        <div
                            style={{
                                flexFlow: 'row',
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}
                        >
                            {shows.filter((p:any) => p._embedded.show.image).map((p: any) => (
                                
                                <div key={p._embedded.show.id}>
                                    <img
                                        src={p._embedded.show.image.medium}
                                        style={{ marginRight: '1rem' }}
                                        alt={p._embedded.show.name}
                                    />
                                    <div>{p._embedded.show.name}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Person;
