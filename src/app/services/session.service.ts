import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private inactivityTimeout = 60 * 60 * 1000; // 30 minutes in milliseconds
  private timer$ = interval(this.inactivityTimeout);
  private timerSubscription!: Subscription;

  constructor(private router :Router) {
    this.startInactivityTimer();
  }

  private startInactivityTimer() {
    this.timerSubscription = this.timer$.subscribe(() => {
      // Perform logout actions or other tasks
      this.logout();
    });
  }

  private logout() {
    // Clear session, perform any necessary cleanup
    // Redirect to login page
    // ...
    // sessionStorage.removeItem('schoolDetails');
    // sessionStorage.removeItem('schoolSurveyDetails');
    // sessionStorage.removeItem('learnerPerClassDetails');
    // sessionStorage.removeItem('repeaters')
    // sessionStorage.removeItem('homeLanguages')
    this.router.navigate(['home'])

  }

  userActivityDetected() {
    // Reset the timer on user activity
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.startInactivityTimer();
  }
}
