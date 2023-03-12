import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContactModalComponent);
  }
}
