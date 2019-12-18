import { observable, computed, action } from 'mobx';

export class ActorStore {
    @observable
    actor = null;

    @action
    setActor(actor) {
        this.actor = actor;
    }

    @computed
    get name() {
        return this.actor ? this.actor.name : '';
    }
}

export const createActorStore = () => {
    return new ActorStore();
}
