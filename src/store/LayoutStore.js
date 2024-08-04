import { makeAutoObservable, observable, action } from 'mobx';

export class LayoutStore {

    modeStyle = true;
    mode_side = "rgb(20 20 20)";
    mode_font = "dark";

    constructor() {
        makeAutoObservable(this, {
            modeStyle: observable,
            mode: observable,
            setModeStyle: action
        })
    }

    setModeStyle = () => {
        this.modeStyle = !this.modeStyle;
        if(this.modeStyle === true) {
            this.mode_side = "rgb(20 20 20)";
        } else {
            this.mode_side = "rgb(252 252 252)";
        }
    }

}

export default new LayoutStore;