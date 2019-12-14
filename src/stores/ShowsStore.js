import { toJS } from "mobx";

export const createShowsStore = () => {
    return {
        shows: [],
        setShows(shows) {
            this.shows = shows;
        },
        get length() {
            return this.shows ? this.shows.length : 0;
        },
        get showsPlain() {
            return toJS(this.shows)
                .map(show => show.show);
        },
    };
};
