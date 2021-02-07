import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    private selectedDate: Date;

    getSelectedDate(): Date {
        return this.selectedDate;
    }

    setSelectedDate(selectedDate): void {
        this.selectedDate = selectedDate;
    }
}