import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { ServicesComponent } from './services.component';
import { AuthenticationService } from '../../../../auth/_services/authentication.service';

import 'rxjs/add/operator/map'

@Injectable()
export class ServerServices_Services {

constructor(private http: Http, private autheticationServices: AuthenticationService) {}

    // post request to server for sending data  URl
    private postURL = 'http://www.sharjeelkhan.ca/veaseapp/vease-app/api/v1/service';

    // get request to server for getting data  URL
    private getURL = 'http://www.sharjeelkhan.ca/veaseapp/vease-app/api/v1/service';



    storeServices(name, details, value, staff, price, duration, location, latitude, longitude, publish) {
        const userToken = this.autheticationServices.getToken();
        console.log(userToken);
        let options = new RequestOptions({
            headers: new Headers({
                "Authentication": userToken,
                "Content-Type": "application/x-www-form-urlencoded",
            })
        })
        var body = {name: name, details: details, value: value, staff: staff, price: price, duration: duration, location: location, latitude: latitude, longitude: longitude, publish: publish};
        console.log(JSON.stringify(body));
        return this.http.post(this.postURL , JSON.stringify(body) , options)
        .map((response: Response) => response.json());
    }


    // Getting data from server
    getTasks() {
        var headers = new Headers ({ 'Content-Type' : 'application/x-www-form-urlencoded' });
        let options = new RequestOptions ({headers: headers});
        const userToken = this.autheticationServices.getToken();
        return this.http.get(this.getURL)
          .map(
              (response) => {
                  const data = response.json();
              }
          );

    }
}

// headers = new HttpHeaders().append('Authorization', this.authToken).append('Content-Type', 'application/json');