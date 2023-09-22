import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      {title: 'Meeting', start: new Date()}
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
