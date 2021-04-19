import { Component, OnInit } from '@angular/core';
import Company from 'src/app/config/company';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-company-configuration',
  templateUrl: './company-configuration.component.html',
  styleUrls: ['./company-configuration.component.css']
})
export class CompanyConfigurationComponent extends URLLoader implements OnInit {

  entreprise_config = {
    "company_name": Company.APP_COMPANY_NAME, "company_email": Company.APP_COMPANY_EMAIL,
    "time_zone": Company.APP_TIME_ZONE, "date_format": Company.APP_DATE_FOMMAT
  }
  constructor() { super() }

  ngOnInit() {
    super.loadScripts()
  }

}
