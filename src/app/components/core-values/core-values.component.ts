import { Component } from '@angular/core';

@Component({
  selector: 'app-core-values',
  templateUrl: './core-values.component.html',
  styleUrls: ['./core-values.component.css']
})
export class CoreValuesComponent {
  items = ['Commitment ', 'Customer Value', 'Teamwork', 'Adaptability', 'Flexibility'];
  itemDescriptions = [
    'Our unwavering dedication to achieving our goals and fulfilling our responsibilities.',
    'Our focus on providing products and services that meet or exceed our customers\` expectations and add value to their lives.',
    'Our collaborative and supportive approach to working together to achieve common goals and objectives.',
    'Our ability to adjust to new circumstances and challenges, and to embrace new ideas and approaches.',
    'Our willingness to adapt our plans and actions to meet changing needs and priorities while still achieving our goals and objectives.'
  ]
  expandedIndex = 0;
}
