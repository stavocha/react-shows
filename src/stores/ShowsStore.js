import { toJS } from "mobx";
import { observable, computed, action } from 'mobx';

export class ShowsStore {
    @observable
    shows = [];

    @observable
    show = null;

    @action
    setShows(shows) {
        this.shows = shows;
    }

    @action
    setCurrentShow(show) {
        this.show = show;
    }

    @computed
    get length() {
        return this.shows ? this.shows.length : 0;
    }

    @computed
    get showsPlain() {
        return toJS(this.shows)
            .map(show => show.show)
            .filter(show => show.image);
    }
}

export const createShowsStore = () => {
    return new ShowsStore();
}
