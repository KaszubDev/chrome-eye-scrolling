import { WebgazerHandler } from "./classes/webgazer_handler";
import { Scroller } from "./classes/scroller";
import { WebgazerHandlerAction } from "./types";

const webgazerHandler = new WebgazerHandler(() => new Scroller(200), false, false);

chrome.runtime.onMessage.addListener(function (msg: WebgazerHandlerAction, sender, sendResponse) {
    webgazerHandler.performEyeTrackingAction(msg);
    sendResponse('send call message')
});