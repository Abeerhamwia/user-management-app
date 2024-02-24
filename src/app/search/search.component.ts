import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.search.trim()) {
      // Redirect to the user details page
      this.router.navigate(['/user', this.search]);
    } else {
      // Redirect to the user list page if the search is empty
      this.router.navigate(['/users']);
    }
  }

}
