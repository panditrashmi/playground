import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    // return this.http.get(
    //   "https://api.apixu.com/v1/current.json?key=YOUR_API_KEY_HERE&q=" +
    //     location
    // );
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=264d79f658f99b68b4ed9a0931e7e109&query=" +
        location
    );
  }
}
