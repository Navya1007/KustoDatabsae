import { Component } from "@angular/core";
import { Grid } from "./Grid.component";

@Component({
  selector: "ag_grid",
  template: `

`

})

export class ag_grid{
  columnDefs = [
    { headerName: 'Athlete', field: 'athlete' },
    { headerName: 'Sport', field: 'sport' },
    { headerName: 'Age', field: 'age' },
];

}
