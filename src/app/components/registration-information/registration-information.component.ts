import { HttpClient } from '@angular/common/http';
import { Component, enableProdMode } from '@angular/core';
import notify from 'devextreme/ui/notify';



const sendRequest = function (value: string) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reg.test(value) === true);
    }, 1000);
  });
};

const sendPasswordRequest = function (value: string) {
  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reg.test(value) === true);
    }, 1000);
  });
};

@Component({
  selector: 'registration-info',
  templateUrl: './registration-information.component.html',
  styleUrls: ['./registration-information.component.scss']
})


export class RegistrationInfoComponent {

  // boolean container
  visAll = true;
  textAreaVis = false;
  visHello = false;
  
  // for registry
  password = '';
  email = '';
  code = '';

  // for hello
  name = '';
  imgSrc = '';


  constructor(private http: HttpClient) {
    this.getPromise()
  }

  passwordComparison = () => this.password;

  checkComparison() {
    return true;
  }

  asyncValidation(params: { value: any; }) {
    return sendRequest(params.value);
  }

  asyncValidationPassword(params: { value: any; }) {
    console.log(params.value)
    return sendPasswordRequest(params.value);
  }

  onFormSubmit(e: { preventDefault: () => void; }, email: string) {
    notify({
      message: 'На почту ' + email + ' был выслан код',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);

    e.preventDefault();

    this.visAll = false
    this.textAreaVis = true;
  }

  doneCode() {
    if (this.code != '') {
      this.textAreaVis = false;
      this.visAll = false;
      this.visHello = true;
    }
  }

  async getPromise() {
    let data: any = await this.http.get('https://randomuser.me/api').toPromise()
    data = data.results[0]
    this.name = data.name.title + '. ' + data.name.first + ' ' + data.name.last
    this.imgSrc = data.picture.large
    console.log(data)
  }

}