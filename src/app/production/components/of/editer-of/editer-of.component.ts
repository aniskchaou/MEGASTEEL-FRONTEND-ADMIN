
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfService } from 'src/app/production/services/of.service';

@Component({
  selector: 'app-editer-of',
  templateUrl: './editer-of.component.html',
  styleUrls: ['./editer-of.component.css']
})
export class EditerOfComponent implements OnInit {

  model
  show = false;
  constructor(private route: ActivatedRoute, private router: Router, private ofService: OfService) {
    this.show = false;

    this.show = true;
    this.ofService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })



  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  ngOnInit() {


  }

  onSubmit() {
    this.ofService.creer(this.model);
    console.log(this.model);
  }
}
