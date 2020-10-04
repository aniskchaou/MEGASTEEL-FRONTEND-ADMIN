import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('myChart');
    console.log(ctx);
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
    
      // The data for our dataset
      data: {
          labels: ["janv.",	"févr."	,"mars"	,"avr."	,"mai",	"juin",	"juill.",	"août",	"sept.",	"oct.",	"nov.",	"déc."],
          datasets: [{
              label: 'Odre de fabrication',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [12, 10, 5, 2, 20, 30,20,21,11,45,33,11,50]
          }]
      },
    
      // Configuration options go here
      options: {}
    });
  }

}
