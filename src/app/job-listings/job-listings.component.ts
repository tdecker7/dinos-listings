import { Component, OnInit } from '@angular/core';

import { Job } from '../Job';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
  jobs: Job[];

  constructor(private JobService: JobServiceService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.JobService.getJobs()
      .subscribe(jobs => { 
        this.jobs = jobs
        console.log(this.jobs);
      });
  }
}
