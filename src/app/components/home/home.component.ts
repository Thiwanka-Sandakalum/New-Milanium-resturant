import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      title: 'Gourmet Dining Experience',
      description: 'Indulge in our chef-curated menu featuring exquisite flavors and fresh, locally sourced ingredients.',
      imgSrc: '/assets/img/services/s1.jpg'
    },
    {
      title: 'Private Event Catering',
      description: 'Host unforgettable events with our professional catering services, tailored to your unique preferences.',
      imgSrc: '/assets/img/services/s2.jpeg'
    },
    {
      title: 'Weekend Brunch Delights',
      description: 'Savor the weekends with our delightful brunch options, from classic favorites to innovative creations.',
      imgSrc: '/assets/img/services/s3.jpeg'
    },
    {
      title: 'Specialty Cocktails',
      description: 'Experience our expertly crafted cocktails, prepared with premium spirits and fresh, vibrant ingredients.',
      imgSrc: '/assets/img/services/s4.jpg'
    }
  ];

  testimonials = [
    {
      author: 'John Doe',
      comment: 'The dining experience at this restaurant is beyond words! Every dish is a masterpiece, and the ambiance is simply delightful. I can\'t wait to visit again.',
      imgSrc: '/assets/img/avatar/avatar.jpg'
    },
    {
      author: 'Jane Smith',
      comment: 'I hosted a private event with the catering service, and it was a huge success. The attention to detail and the quality of the food were exceptional. Highly recommended!',
      imgSrc: '/assets/img/avatar/avatar1.jpg'
    },
    {
      author: 'Bob Johnson',
      comment: 'Weekend brunch here is a true delight! The variety of options and the fresh ingredients make it a perfect start to the day. The staff is friendly, and the atmosphere is inviting.',
      imgSrc: '/assets/img/avatar/avatar2.jpg'
    }
  ];

  restaurantName = 'Your Restaurant Name';
  address = '123 Main Street, Cityville';
  phone = '+1 (123) 456-7890';
  email = 'info@example.com';
  socialLinks = [
    { icon: 'bi bi-facebook', link: 'https://www.facebook.com/yourrestaurant' },
    { icon: 'bi bi-twitter', link: 'https://twitter.com/yourrestaurant' },
    { icon: 'bi bi-instagram', link: 'https://www.instagram.com/yourrestaurant' }
  ];
  copyrightYear = new Date().getFullYear();
}
