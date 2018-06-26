import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  constructor(private jobService: JobServiceService) { }

  ngOnInit() {
  }

  submit(form: NgForm): void {
    this.jobService.addJob(form.value);
    console.log(form.value);
    
    console.log()
  }
}
