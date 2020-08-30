import { Component, OnInit } from '@angular/core';
import { GeneralTextsService } from '../../service/general-texts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public gts: GeneralTextsService) {
   }

  ngOnInit(): void {
  }

}
