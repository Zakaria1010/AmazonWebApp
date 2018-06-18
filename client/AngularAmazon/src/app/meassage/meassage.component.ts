import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meassage',
  templateUrl: './meassage.component.html',
  styleUrls: ['./meassage.component.scss']
})
export class MeassageComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
