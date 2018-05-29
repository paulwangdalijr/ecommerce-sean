import { Component, OnInit, Input } from '@angular/core';
import { DetailsformService } from '../detailsform.service';


@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
// export class DetailsformComponent implements OnInit {
export class DetailsformComponent implements OnInit {
  // email = "asdasd";

  // @Input('group') email;

  // @Output() onEmailChange = new EventEmitter<string>();

  constructor(
    private detailsFormService: DetailsformService
    ) { }

  ngOnInit() {
  }

  onConfirmClick(){
  	console.log("click from shared module");
    // console.log(this.email);
  }
  getEmail(){
  	// return email;
  }

}
