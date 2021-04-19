import { Component, OnInit } from '@angular/core';
import Email from 'src/app/config/email';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-email-configuration',
  templateUrl: './email-configuration.component.html',
  styleUrls: ['./email-configuration.component.css']
})
export class EmailConfigurationComponent extends URLLoader implements OnInit {
  emailConfiguration = {
    "mail_driver": Email.MAIL_DRIVER, "email_host": Email.MAIL_HOST,
    "mail_port": Email.MAIL_PORT,
    "mail_username": Email.MAIL_USERNAME, "mail_password": Email.MAIL_PASSWORD,
    "mail_encryption": Email.MAIL_ENCRYPTION,
    "mail_from": Email.MAIL_FROM, "mail_from_name": Email.MAIl_FROM_NAME
  }
  constructor() { super() }

  ngOnInit() {
    super.loadScripts()
  }

}
