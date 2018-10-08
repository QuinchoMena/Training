import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL_JSON = "https://api.myjson.com/bins/uptto";
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>({companies:[]});
  public currentData: Observable<object> = this.dataSource.asObservable();
  private agents: any = {companies:[]};

  constructor(private http: HttpClient) { }

  public getAgents(): Observable<object> {
    const readAgents =  this.http.get(this.URL_JSON);
    this.changeData(readAgents);
    readAgents.subscribe(data => this.agents = data);
    return readAgents;
  }

  public filterData(userInput): void{
    userInput = userInput.toUpperCase();
    const filteredData = this.agents.companies.filter(agent => agent.name.toUpperCase().includes(userInput));
    this.changeData(filteredData);
  }

  public undoFilter(): void{
    this.dataSource.next(this.agents.companies);
  }

  public changeData(data: any): void{
    this.dataSource.next(data);
  } 
}
