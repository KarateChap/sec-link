import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isMenuOpen = false;

  constructor(private dialog: MatDialog) {}

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openDialog() {
    this.dialog.open(ContactModalComponent);
  }

  scrollTo(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  scrollToMobile(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = !this.isMenuOpen;
  }
}
