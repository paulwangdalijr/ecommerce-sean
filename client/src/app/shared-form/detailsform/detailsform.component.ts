import { Component, OnInit } from '@angular/core';
import { DetailsformService } from '../detailsform.service';


@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
// export class DetailsformComponent implements OnInit {
export class DetailsformComponent implements OnInit {
  constructor(
    private detailsFormService: DetailsformService
    ) { }

  ngOnInit() {
  }
}
