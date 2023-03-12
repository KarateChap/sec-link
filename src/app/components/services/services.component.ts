import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      url: '../../../assets/cctv.webp',
      name: 'CCTV SURVEILANCE SYSTEM',
      description: 'Secure your property with a video surveillance system for round-the-clock monitoring and protection.',
    },
    {
      url: '../../../assets/alarm.webp',
      name: 'FIRE ALARM',
      description: 'Ensure safety and minimize damage with early detection and alerts for potential fires.',
    },
    {
      url: '../../../assets/biometric.webp',
      name: 'BIOMETRIC & HRIS SYSTEM',
      description: 'Automate attendance and personnel management with biometric technology and HR information systems.',
    },
    {
      url: '../../../assets/cabling.webp',
      name: 'DATA STRUCTURED CABLING',
      description: 'Structured cabling infrastructure services to ensure reliable and efficient communication networks.',
    },
    {
      url: '../../../assets/website.webp',
      name: 'BASIC AND ADVANCE WEBSITE DESIGN',
      description:
        'Professional website design services tailored to meet the unique needs of individuals and businesses.',
    },
    {
      url: '../../../assets/retail.webp',
      name: 'RETAIL AND HOSPITALITY SOLUTION',
      description:
        'End-to-end solutions to enhance customer experience and streamline operations for retail and hospitality businesses.',
    },
    {
      url: '../../../assets/programming.webp',
      name: 'WEB BASE PROGRAMMING',
      description:
        'Develop innovative, user-friendly web applications and software using cutting-edge programming languages and tools.',
    },
    {
      url: '../../../assets/ecommerce.webp',
      name: 'ECOMMERCE SOLUTION',
      description: 'Design and develop robust online stores to help businesses thrive in the digital marketplace.',
    },
    {
      url: '../../../assets/chatbot.webp',
      name: 'CHATBOT',
      description:
        "Automate your customer's online shopping experience by adding chatbot to your online shop and provide efficient customer support..",
    },
  ];
}
