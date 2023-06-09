import { Scrollable } from "../types";
import { incrementScrollTop } from "../helper";

export class Scroller implements Scrollable {
    // Definition of `Class` variables:
    static readonly SCROLL_TOP_INCREMENT: number = 1;
    // Definition of `Object` variables:
    private _epsilon: number;

    constructor(epsilon: number) {
        this._epsilon = epsilon;
    }

    // Definition of methods:
    public scroll(yPrediction: number) : void {
        console.log(yPrediction);

        const { innerHeight } = window;
        const horizontalCenter = innerHeight / 2;
    
        if (yPrediction > horizontalCenter + this._epsilon) {
            incrementScrollTop(10)
        }
    
        if (yPrediction < horizontalCenter - this._epsilon) {
            incrementScrollTop(-10)
        }
    }

    // Definition of Getters & Setters:

    get epsilon() { return this._epsilon; }

    set epsilon(eps: number) { this._epsilon = eps; }
    
}