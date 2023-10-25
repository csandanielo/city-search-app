import { Component } from '@angular/core';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent {
  searchTerm: string = '';
  suggestions: string[] = [];
  cityNames: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'San Francisco',
    'Houston',
    'Miami',
  ];

  isInputFocused: boolean = false;

  onInputChange() {
    if (this.isInputFocused) {
      this.suggestions = this.cityNames.filter((city) =>
        city.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  onInputFocus() {
    this.isInputFocused = true;
    this.onInputChange(); // Load suggestions immediately when the input field is clicked
  }

  onInputBlur() {
    this.isInputFocused = false;
    this.suggestions = [];
  }

  onSuggestionClick(suggestion: string) {
    this.searchTerm = suggestion;
    this.suggestions = [];
  }
}
