import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

export class Task {
  id: number;
  parentId: number;
  title: string;
  start: Date;
  end: Date;
  progress: number;
}

export class Dependency {
  id: number;
  predecessorId: number;
  successorId: number;
  type: number;
}

export class Resource {
  id: number;
  text: string;
}

export class ResourceAssignment {
  id: number;
  taskId: number;
  resourceId: number;
}


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  appointmentsData: any;
  currentDate: Date = new Date();

  public  tasks: Task[] = [{
    'id': 1,
    'parentId': 0,
    'title': 'Software Development',
    'start': new Date('2019-02-21T05:00:00.000Z'),
    'end': new Date('2019-07-04T12:00:00.000Z'),
    'progress': 31
}, {
    'id': 2,
    'parentId': 0,
    'title': 'Scope',
    'start': new Date('2019-02-21T05:00:00.000Z'),
    'end': new Date('2019-02-26T09:00:00.000Z'),
    'progress': 60
}];

public dependencies: Dependency[] = [{
  'id': 1,
  'predecessorId': 3,
  'successorId': 4,
  'type': 0
}, {
  'id': 2,
  'predecessorId': 4,
  'successorId': 5,
  'type': 0
}, {
  'id': 3,
  'predecessorId': 5,
  'successorId': 6,
  'type': 0
}, {
  'id': 4,
  'predecessorId': 6,
  'successorId': 7,
  'type': 0
}, {
  'id': 5,
  'predecessorId': 7,
  'successorId': 9,
  'type': 0
}];

public resources: Resource[] = [{
  'id': 1,
  'text': 'Management'
}, {
  'id': 2,
  'text': 'Project Manager'
}, {
  'id': 3,
  'text': 'Analyst'
}, {
  'id': 4,
  'text': 'Developer'
}, {
  'id': 5,
  'text': 'Testers'
}, {
  'id': 6,
  'text': 'Trainers'
}, {
  'id': 7,
  'text': 'Technical Communicators'
}, {
  'id': 8,
  'text': 'Deployment Team'
}];

public resourceAssignments: ResourceAssignment[] = [{
  'id': 0,
  'taskId': 1,
  'resourceId': 4
}, {
  'id': 1,
  'taskId': 2,
  'resourceId': 1
}, {
  'id': 2,
  'taskId': 3,
  'resourceId': 2
}, {
  'id': 3,
  'taskId': 4,
  'resourceId': 2
}];

  constructor(public router: Router, public eventService: EventService) { }

  ngOnInit() {
  }

  onClick($event: any) {
    // const eventId = $event.appointmentData.id;
    console.log($event);
    // this.router.navigate(['/hkam/event-details', 'hospital', eventId]);
  }

  onCreateEvent($event) {
    this.eventService.setSelectedDate($event.cellData.startDate);
    this.router.navigate(['course-details', 0]);
  }

  onAppointmentFormOpening(ev: any) {
    ev.cancel = true;
  }
}
