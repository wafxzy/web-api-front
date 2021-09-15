import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-toulook',
  templateUrl: './toulook.component.html',
  styleUrls: ['./toulook.component.css']
})
export class ToulookComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private tourService:SharedService
    ) { }

  ngOnInit(): void {
    this.loadTravel();
  }
ToulookList:any=[]; 
  loadTravel(){
    
    const travelid=this.route.snapshot.paramMap.get('id');
  this.tourService.getTourCurrentList(travelid).subscribe
  (
    data=>this.ToulookList=data
    
  );
  }

}
