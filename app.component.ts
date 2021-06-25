import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'StormEvent';

  colData = [
    { headerName: 'States', field: 'States', sortable: true, resizable: true },
    {
      headerName: 'EventCount',
      field: 'EventCount',
      sortable: true,
      resizable: true,
    },
    {
      headerName: 'TotalDeathCount',
      field: 'TotalDeathCount',
      sortable: true,
      resizable: true,
    },
    {
      headerName: 'TotalInjuries',
      field: 'TotalInjuries',
      sortable: true,
      resizable: true,
    },
  ];

  rowData = [
    {
      States: 'TEXAS',
      EventCount: 4701,
      TotalDeathCount: 77,
      TotalInjuries: 530,
    },
    {
      States: 'KANSAS',
      EventCount: 3166,
      TotalDeathCount: 31,
      TotalInjuries: 150,
    },
    { States: 'IOWA', EventCount: 2337, TotalDeathCount: 5, TotalInjuries: 23 },
    {
      States: 'ILLINOIS',
      EventCount: 2022,
      TotalDeathCount: 37,
      TotalInjuries: 153,
    },
    {
      States: 'MISSOURI',
      EventCount: 2016,
      TotalDeathCount: 23,
      TotalInjuries: 988,
    },
  ];

  //rowData: any;
  constructor(private http: HttpClient) {}

  ngOnInt() {
    //this.rowData = this.http.get("https://raw.githubusercontent.com/Navya1007/KustoDatabsae/main/StormEvenet.json");
  }
}
