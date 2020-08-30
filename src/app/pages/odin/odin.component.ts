import { Component, OnInit } from '@angular/core';
import { GeneralTextsService } from 'src/app/service/general-texts.service';

@Component({
  selector: 'app-odin',
  templateUrl: './odin.component.html',
  styleUrls: ['./odin.component.scss']
})
export class OdinComponent implements OnInit {

  constructor(public gts: GeneralTextsService) { 

  }

  ngOnInit(): void {
    console.log(this.gts.listReleasedNotesVersion[0]);
  }
  

}
