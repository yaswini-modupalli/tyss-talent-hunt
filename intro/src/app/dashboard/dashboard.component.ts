import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}
  
  ngOnInit() {
    var chart = Highcharts.chart('chart-container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Talent Hunt Progress chart'
      },
      subtitle: {
        text: 'Progress chart details'
      },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },
      xAxis: {
        categories: ['Apr', 'May', 'June', 'July', 'Aug'],
        labels: {
            x: -10
        }
      },
      yAxis: {
        allowDecimals: false,
        title: {
            text: 'count'
        }
      },
      series: [{
        name: 'Requirement',
        data: [5, 1, 4, 3, 9]
      }, {
        name: 'Schedules',
        data: [3, 6, 4, 2, 6]
      }]
    });
  }
}
