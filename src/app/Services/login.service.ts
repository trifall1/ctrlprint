import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public token: string;
  private url = 'http://localhost:8090/';
  basic: string = 'Basic d2ViYXBpX2lkOjZhOTU3ZWI0LWJkYTMtNDg0ZC05YWIxLTcwYzlmMmVhYWZmZA==';
  credentials: Credentials;

  constructor(private http: HttpClient) {

  }

  addLogin () {

      const headers = new HttpHeaders()
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", this.basic);
      let body = new URLSearchParams();
      body.set("grant_type", "hybrid");
      body.set("identification", 'MYS3CR3T1D3NT1F1CAT10NC0D3');
      body.set("scope", 'api');


      this.http.post < Credentials > ('http://localhost:8090/identity/connect/token', body.toString(),{ headers: headers }).subscribe(result => this.credentials = result);
      console.log(this.credentials)
  }

}

interface Credentials {
  access_token: string;
  expires_in: number;
  token_type: string;
}