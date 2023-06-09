export enum WebgazerHandlerAction {
    ENABLE,
    DISABLE,
}

export interface Scrollable {
    scroll(yPrediction: number): void;
}