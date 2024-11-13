"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

class Mobile {
    constructor(brand, ram, battery,song,isOnCall) {
        this.brand = brand;
        this.ram = ram;
        this.battery = battery;
        this.song = song;
        this.isOnCall = isOnCall;
    }

    charging() {
        if (this.battery < 100) {
            this.battery = 100;
            console.log('Mobile charged 100%');
        } else {
            console.log('Mobile Fully Charged');
            this.removeChargingremoveChargingIt();
        }
    }
    
    playMusic() {
        console.log(`Playing ${this.song} song`);
    }

    stopMusic() {
        console.log('Music Stopped');
    }

    endCall() {
        if (this.isOnCall) {
            this.isOnCall = false;
            console.log('Call Ended');
        } else {
            console.log('No ongoing call to end');
        }
    }
    
    makeCall() {
        this.isOnCall = true;
        console.log('Calling ...');
    }

    removeChargingremoveChargingIt() {
        return console.log('Please remove charging');