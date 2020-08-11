export default class Clock {
    constructor() {
        let dateTime = new Date();
        this._days = dateTime.getDay();
        this._hours = dateTime.getHours();
        this._minutes = dateTime.getMinutes();
        this._seconds = dateTime.getSeconds();
    }

    get Day() {
        return this._days + 1;
    }

    get Hour() {
        return this._hours;
    }
    get Minute() {
        return this._minutes;
    }
    get Second() {
        return this._seconds;
    }
}
