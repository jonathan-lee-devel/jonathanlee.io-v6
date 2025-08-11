import {afterRenderEffect, Component, OnInit, signal, Inject, PLATFORM_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  isDarkMode = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    afterRenderEffect(() => {
      this.updateTheme();
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
    }
  }

  private initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.isDarkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
    this.updateTheme();
  }

  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    this.updateTheme();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  private updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
