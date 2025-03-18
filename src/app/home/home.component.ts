import { Component, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query('.card', [
          style({ opacity: 0, transform: 'translateX(100%)' }),
          stagger(300, [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

  ],
})
export class HomeComponent{
 cardData:any=[];
 doctors:any=[];
  images = [
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img4.jpg',
  ];
  
  isAnimationActive = false;
  emailId='aarokyalaya@gmail.com';
  currentImageIndex = 0;
  showVision = true;
  autoSlideInterval: any;
  location:any;
 // @ViewChild('card', { static: true }) cardElement!: ElementRef;
  isActive = false;

 // constructor(private renderer: Renderer2) {}
constructor(){}
  ngOnInit() {
    this.cardData=[
      {
        title:"Acupuncture",
        imgUrl:"../../../assets/acupuncture.jpg",
        description:""
      },
      {
        title:"Acupressure",
        imgUrl:"../../../assets/acupressure.jpg",
        description:""
      },
      {
        title:"Bone Alignment",
        imgUrl:"../../../assets/bone-alignment.jpg",
        description:""
      },
      {
        title:"Diabetic",
        imgUrl:"../../../assets/diabetes.jpg",
        description:""
      },
      {
      title:'Foot Reflexologyy',
      imgUrl:'../../../assets/foot.jpeg',
      description:''
    },
    {
      title:"OZone Therapy",
      imgUrl:"../../../assets/ozone.png",
      description:""
    },
    {
      title:"Physiotherapy",
      imgUrl:"../../../assets/physio.jpg",
      description:""
    },
    {
      title:"Massage",
      imgUrl:"../../../assets/massage.jpg",
      description:""
    },
    {
      title:"Stream Bath",
      imgUrl:"../../../assets/steam-bath.jpg",
      description:""
    },
    {
      title:"PCOD & PCOS",
      imgUrl:"../../../assets/pcod.jpg",
      description:""
    },
    {
      title:"Weight Loss ",
      imgUrl:"../../../assets/weight-loss.jpg",
      description:""
    },
    {
      title:"Yoga",
      imgUrl:"../../../assets/yoga.jpg",
      description:""
    },
    
   

  ];

  this.doctors = [
    {
      name: 'Dr. R Vishnu Raja, BNYS',
      //speciality: 'D.Ref., Cet.MBM (NIN), Cet.OT(NIN)',
      description: 'Cet.Intergrative medicine(NIMHANS).,',
      imageUrl: '../../../assets/vishwa-lite.jpg'  // Path to doctor image
    }
  ];
  this.location="https://www.google.com/maps?q=Aarokyalaya+Nature+Cure+Yoga+Life+Style+Clinic,Madurai,Tamil+Nadu&output=embed";
  this.isAnimationActive = true;
  this.startCarousel();
   }
  // Start the carousel auto-slide
  startCarousel() {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 4000); // Change image every 3 seconds
  }

  // Move to the previous image
  prevImage() {
    clearInterval(this.autoSlideInterval); // Stop auto-slide
    this.currentImageIndex = 
      this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1;
    this.startCarousel(); // Restart auto-slide
  }

  // Move to the next image
  nextImage() {
    clearInterval(this.autoSlideInterval); // Stop auto-slide
    this.currentImageIndex = 
      (this.currentImageIndex + 1) % this.images.length;
    this.startCarousel(); // Restart auto-slide
  }

  // Toggle Vision section
  toggleVision() {
    this.showVision = !this.showVision;
  }
}
