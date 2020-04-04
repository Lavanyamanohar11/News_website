import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  displayText=true;
  readMoreShow="visible";
  readLessShow="hidden";

  //for readMore button 2 (2nd card)
  displayText2=true;
  readMoreShow2="visible";
  readLessShow2="hidden";
  
  constructor() { }

  readMore(){
    this.displayText=!this.displayText;
    this.readMoreShow = "hidden";
    this.readLessShow="visible";
  }
  
  readLess(){
    this.displayText=!this.displayText;
    this.readLessShow = "hidden";
    this.readMoreShow = "visible";
  }
  readMore2(){
    this.displayText2=!this.displayText2;
    this.readMoreShow2 = "hidden";
    this.readLessShow2="visible";
  }
  
  readLess2(){
    this.displayText2=!this.displayText2;
    this.readLessShow2 = "hidden";
    this.readMoreShow2 = "visible";
  }
  ngOnInit(): void {
  }

}
