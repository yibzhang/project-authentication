import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: string[] = [];
  errors: string[] = [];

  constructor() {}
  // Add errors
  addErrors(error: string){
    this.errors.push(error);
  }
  // Clear errors
  clearErrors(){
    this.errors = [];
  }


  // Add logs
  addLogs(log: string){
    this.logs.push(log);
  }
  // Clear logs
  clearLogs(){
    this.logs = [];
  }
}