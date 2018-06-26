import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Job } from './Job';
import { LISTINGS } from '../assets/listings';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor() { }
  addJob(job: Job): void {
    LISTINGS.unshift(job);
  }
  getJobs(): Observable<Job[]>{
    return of(LISTINGS);
  }
}
