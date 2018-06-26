import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Job } from './Job';
import { LISTINGS } from '../assets/listings';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor() { }
  getJobs(): Observable<Job[]>{
    return of(LISTINGS);
  }
}
