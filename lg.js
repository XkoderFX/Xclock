import Clock from "./clock.js";

class ClockUpdater {
    constructor(ms) {
        this._update();
        setInterval(() => this._update(), ms);
    }

    _update() {
        let clock = new Clock();
        document.getElementById("day").textContent = clock.Day;
        document.getElementById("hours").textContent = clock.Hour;
        document.getElementById("minutes").textContent = clock.Minute;
        document.getElementById("seconds").textContent = clock.Second;
    }
}

let clock = new ClockUpdater(1000);
