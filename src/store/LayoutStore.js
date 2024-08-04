import { makeAutoObservable, observable, action } from 'mobx';

export class LayoutStore {

    modeStyle = true;
    mode_side = "rgb(20 20 20)";
    mode_border = "1px rgb(63 63 63) solid";
    mode_main = "rgb(15 15 15)";
    mode_footer = "rgb(26 26 26)";
    mode_font = "rgb(255 255 255)";
    mode_logo = "logo_white";

    constructor() {
        makeAutoObservable(this, {
            modeStyle: observable,
            mode_side: observable,
            mode_border: observable,
            mode_main: observable,
            mode_footer: observable,
            mode_font: observable,
            mode_logo: observable,
            setModeStyle: action
        })
    }

    setModeStyle = () => {
        this.modeStyle = !this.modeStyle;
        if(this.modeStyle === true) {
            this.mode_side = "rgb(20 20 20)";
            this.mode_border = "1px rgb(63 63 63) solid";
            this.mode_main = "rgb(15 15 15)";
            this.mode_footer = "rgb(26 26 26)";
            this.mode_font = "rgb(255 255 255)";
            this.mode_logo = "logo_white";
        } else {
            this.mode_side = "rgb(252 252 252)";
            this.mode_border = "1px rgb(221 221 221) solid";
            this.mode_main = "rgb(255 255 255)";
            this.mode_footer = "rgb(248 248 248)";
            this.mode_font = "rgb(9 9 9)";
            this.mode_logo = "logo_black";
        }
    }

}

export default new LayoutStore;