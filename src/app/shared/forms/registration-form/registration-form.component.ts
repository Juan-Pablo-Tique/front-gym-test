import { Component, OnInit } from '@angular/core';

import { RequestService } from "@services/request.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  typeDocument: any;

  constructor(
    private ReqSer: RequestService,
  ) { }

  ngOnInit(): void {
    this.ReqSer.getDocumentTypes().subscribe(res => {
      this.typeDocument = res;
    });
    console.log(this.typeDocument);
  }

}
