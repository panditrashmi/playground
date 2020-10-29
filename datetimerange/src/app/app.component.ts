import { Component, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ACDaterangepickerConfig } from './ac-daterangepicker/ac-daterangepicker.service';
// import * as daterangepicker from 'daterangepicker';
import * as $ from 'jquery';
import * as daterangepicker from 'daterangepicker';
// import "daterangepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datetimerange';
  public chosenDate: any = {
    start: moment().subtract(12, 'month'),
    end: moment().subtract(6, 'month'),
  };

  public picker1 = {
    opens: 'left',
    startDate: moment().subtract(5, 'day'),
    endDate: moment(),
    isInvalidDate: function (date: any) {
      if (date.isSame('2017-09-26', 'day'))
        return 'mystyle';
      return false;
    }
  }

  constructor(private daterangepickerOptions: ACDaterangepickerConfig) {
    this.daterangepickerOptions.settings = {
      // locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      "opens": "right",
      ranges: {
        'Last Month': [moment().subtract(1, 'month'), moment()],
        'Last 3 Months': [moment().subtract(4, 'month'), moment()],
        'Last 6 Months': [moment().subtract(6, 'month'), moment()],
        'Last 12 Months': [moment().subtract(12, 'month'), moment()],
      }
    };
  }

  @ViewChild('calender') calender: ElementRef;
public calendarDate: daterangepicker ;

ngOnInit() {
// this.calendarDate = new daterangepicker(this.calender.nativeElement ,{
// timePicker: true,
// startDate: moment().startOf('hour'),
// endDate: moment()
// .startOf('hour')
// .add(32, 'hour'),
// locale: {
// format: 'MM/DD/YYYY hh:mm A',
// },
// }, function (start, end, label) {
// console.log(start, end, label)
// });
}

changeStartAndEndDate(){
this.calendarDate.setStartDate('03/01/2014');
this.calendarDate.setEndDate('06/01/2014');
}
  public selectedDate(value: any, dateInput: any): void {
    console.log(value);
    dateInput.start = value.start;
    dateInput.end = value.end;
  }

  public calendarEventsHandler(e: any): void {
    console.log({ calendarEvents: e });
  }

  public applyDatepicker(e: any) {
    console.log({ applyDatepicker: e });
  }

  public updateSettings(): void {
    this.daterangepickerOptions.settings.locale = { format: 'YYYY/MM/DD' };
    this.daterangepickerOptions.settings.ranges = {
      '30 days ago': [moment().subtract(1, 'month'), moment()],
      '3 months ago': [moment().subtract(4, 'month'), moment()],
      '6 months ago': [moment().subtract(6, 'month'), moment()],
      '7 months ago': [moment().subtract(12, 'month'), moment()],
    };
  }
}
