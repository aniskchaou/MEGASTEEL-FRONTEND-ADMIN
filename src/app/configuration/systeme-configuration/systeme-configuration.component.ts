import { Component, OnInit } from '@angular/core';
import Company from 'src/app/config/company';
import Constant from 'src/app/config/const';
import Link from 'src/app/config/link';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-systeme-configuration',
  templateUrl: './systeme-configuration.component.html',
  styleUrls: ['./systeme-configuration.component.css']
})
export class SystemeConfigurationComponent extends URLLoader implements OnInit {



  systemeConfiguration = {
    "currency": Constant.APP_CURRENCY, "user_register": Constant.USER_REGISTER,
    "footer": Constant.APP_FOOTER,
    "url": Link.BACKEND_URL, "technology": Link.BACKEND_TECHNOLOGY, "port": Link.BACKEND_PORT,
    "language": Constant.USER_LANGUAGE
  }
  constructor() { super() }

  ngOnInit() {
    super.loadScripts()
  }
}
