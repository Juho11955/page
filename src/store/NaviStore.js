import { makeAutoObservable, observable, action } from 'mobx';

export class NaviStore {

    navi = "root";

    constructor() {
        makeAutoObservable(this, {
            navi: observable,
            setNavi: action
        })
    }

    setNavi = (props) => {
        this.navi = props;
    }

}

export default new NaviStore;