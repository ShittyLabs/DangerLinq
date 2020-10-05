export class DontCallThisError extends Error {
    constructor() {
        super("This function should never actually be called!");
    }
}