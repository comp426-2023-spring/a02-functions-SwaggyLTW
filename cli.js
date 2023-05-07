#!/usr/bin/env node

import fetch from "node-fetch";
import minimist from "minimist"
import moment from "moment";

const args = minimist(process.argv.slice(2));
if(args.h){
    
    console.log(`Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
        -h            Show this help message and exit.
        -n, -s        Latitude: N positive; S negative.
        -e, -w        Longitude: E positive; W negative.
        -z            Time zone: uses tz.guess() from moment-timezone by default.
        -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
        -j            Echo pretty JSON from open-meteo API and exit.`)
        processs.exit(0);

}

const timezone = moment.tz.guess()
const lat = args.n || args.s ;
const long = args.e || args.w ;
const days = args.d


const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude='+ lat +'&longitude='+ long + '&hourly=temperature_2m');
const data = await response.json();

if(args.j){
    console.log(data);
    process.exit(0)
}
if(days == 0){
    console.log("today.");
} else if(days > 1){
    console.log("in " +days+" days.");
} else {
    console.log("tomorrow");
}
