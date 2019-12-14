
export const createShowsStore = () => {
    return {
        shows: null,
        setShows(shows) {
            this.shows = shows;
        },
        get length() {
            return this.shows ? this.shows.length : 0;
        },
    };
};
