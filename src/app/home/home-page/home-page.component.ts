import { Component, ElementRef, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TCPopupComponent } from 'src/app/components/t-c-popup/t-c-popup.component';
import {  OnInit, OnDestroy, Inject } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @ViewChild('navbarRef', { static: true }) navbarRef!: ElementRef;
  currentYear: number;
  title = 'msal-angular-tutorial';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(private router:Router,public dialog:MatDialog, public viewportScroller:ViewportScroller) {
    this.currentYear = new Date().getFullYear();

   }
   
  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    
  }

 
  home(){
    this.router.navigate(['home'])
  }


  
  

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  toggleMobileNav(event: MouseEvent): void {
    const button = event.currentTarget as HTMLElement;
    button.classList.toggle('bi-list');
    button.classList.toggle('bi-x');
    this.navbarRef.nativeElement.classList.toggle('navbar-mobile');
  }

  public closeMobileNav(): void {
    this.navbarRef.nativeElement.classList.remove('navbar-mobile');
    const button = this.navbarRef.nativeElement.querySelector('.mobile-nav-toggle') as HTMLElement;
    button.classList.add('bi-list');
    button.classList.remove('bi-x');
  }
  openDialog(){


    let dialogRef =  this.dialog.open(TCPopupComponent ,{
      panelClass: 'tcpopup'   
    });
    
}

preventContextMenu(event: MouseEvent): void {
  event.preventDefault();
}



scrollToSection(id:string){
  this.viewportScroller.scrollToAnchor(id)
  this.closeMobileNav()
}

}
