import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit,AfterViewInit {
  
  @ViewChild('searchText')
  public inputTex: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public keyUp(event: any): void {
    const filtervalue = this.inputTex.nativeElement.value;
    if(filtervalue.length >= 3){
      console.log(filtervalue);
      this.dataService.filterData(filtervalue);
    }else{
      this.dataService.undoFilter();
    }
  }

  public lensClick(): void{
    const filtervalue = this.inputTex.nativeElement.value;
    this.dataService.filterData(filtervalue);
  }
}
