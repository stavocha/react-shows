import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { id: string };

interface IShowProps extends RouteComponentProps<TParams> {}

interface IShowState {
    showDetails: any;
    cast: any;
}

class Show extends React.Component<IShowProps, IShowState> {
    state = {} as IShowState;
    componentDidMount() {
        const { match } = this.props;

        // fetch from API
        fetch(`http://api.tvmaze.com/shows/${match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ showDetails: data }));
        fetch(`http://api.tvmaze.com/shows/${match.params.id}/cast`)
            .then(res => res.json())
            .then(data => this.setState({ cast: data }));
    }

    render() {
        const { showDetails, cast } = this.state;
        console.log(showDetails);

        if (!showDetails) {
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
                                    <div key={p.person.id}>
                                        <img
                                            src={p.person.image.medium}
                                            style={{ marginRight: '1rem' }}
                                            alt={p.person.name}
                                        />
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
}

export default Show;
