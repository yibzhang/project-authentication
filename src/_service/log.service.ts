import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: string[];

  constructor() { }
  // Add logs
  addLogs(log: string){
    this.logs.push(log);
  }
  // Clear logs
  clearLogs(){
    this.logs = [];
  }
}