#!/usr/bin/env node
import moment from "moment";
let timezone = moment.tz.guess();
const args = process.argv.slice(2);
if(args.contains('-h')){
    try{
    console.log(`Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
        -h            Show this help message and exit.
        -n, -s        Latitude: N positive; S negative.
        -e, -w        Longitude: E positive; W negative.
        -z            Time zone: uses tz.guess() from moment-timezone by default.
        -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
        -j            Echo pretty JSON from open-meteo API and exit.`)
        exit(0);
}catch{
exit(1);
} 
const lat = args.n || args.s;
const long = args.e || args.w;
const days = args.d


const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude='+ lat +'&longitude='+ long + '&hourly=temperature_2m');
const data = await response.json();

}