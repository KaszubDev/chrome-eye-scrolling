import { WebgazerHandlerAction, Scrollable } from "../types";
import webgazer from "webgazer/dist/webgazer.commonjs2";

export class WebgazerHandler {
    // Definition of variables:
    private readonly _showVideoPreview: boolean;
    private _showPredictionPoints: boolean;
    private _scroller: Scrollable;
    
    constructor(scrollerConstructor: () => Scrollable, showVideoPreview?: boolean, showPredictionPoints?: boolean)
    {
        this._showVideoPreview = showVideoPreview ?? false;
        this._showPredictionPoints = showPredictionPoints ?? false;

        // set scroller:
        this._scroller = scrollerConstructor();
    }

    public performEyeTrackingAction(action: WebgazerHandlerAction) {
        switch (action as WebgazerHandlerAction) {
            case WebgazerHandlerAction.ENABLE:
                console.log('enable status')
                this.enableEyeScrolling();
                break;
            case WebgazerHandlerAction.DISABLE:
                console.log('disable status')
                this.disableEyeScrolling();
                break;
            default:
                throw new Error('WebgazerHandler: Unknown WebgazerHandlerAction!')
        }
    }

    private async setListener() {
        const scroller = this._scroller;
        await webgazer.setGazeListener(function(data: any, elapsedTime: number) {
            // elapsed time is based on time since begin was called
            if (data === null)
                return;
            // Get y coordinate (relative to the viewport):
            let yPrediction: number = data.y
            // console.log("Data y: " + data.y)
            scroller.scroll(yPrediction)
        })
    }

    private async enableEyeScrolling() {
        console.log("Attempting to start webgazer ...")
        webgazer.showVideoPreview(this._showVideoPreview)
        webgazer.showPredictionPoints(this._showPredictionPoints)
        await webgazer.begin()
        // Set the listener:
        this.setListener()
    }

    private async disableEyeScrolling() {
        console.log("Disabling webgazer ...")
        // remove gaze listener
        await webgazer.clearGazeListener()

    }

    // Definition of Getters & Setters:

    get showVideoPreview() { return this._showVideoPreview; }

    set showPredictionPoints(flag: boolean) { this._showPredictionPoints = flag; }

    get showPredictionPoints() { return this._showPredictionPoints; }

}