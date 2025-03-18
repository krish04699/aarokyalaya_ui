import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  interval:any;
  services: any=[];
  servicesData: any=[
    {
        "image":"../../assets/Acupuncture.jpg",
        "id": 1,
        "name": "Service 1",
        "description": "Description 1",
        "category": 100
    },
    {
      "image":"../../assets/Acupuncture.jpg",
        "id": 2,
        "name": "Service 2",
        "description": "Description 2",
        "category": 200
    },
    {
      "image":"../../assets/Acupuncture.jpg",
        "id": 3,
        "name": "Service 3",
        "description": "Description 3",
        "category": 300
    },
    {
      "image":"../../assets/Acupuncture.jpg",
        "id": 4,
        "name": "Service 4",
        "description": "Description 4",
        "category": 400
    },
    {
      "image":"../../assets/Acupuncture.jpg",
        "id": 5,
        "name": "Service 5",
        "description": "Description 5",
        "category": 500

    }


];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.services = this.servicesData;
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.next();
    }, 3000); // Change the interval duration as per your requirement
  }

  stopSlider() {
    clearInterval(this.interval);
  }


  previous() {
    this.currentIndex = (this.currentIndex === 0) ? this.services.length - 1 : this.currentIndex - 1;
    console.log("services, currentIndex", this.services, this.currentIndex);
  }

  next() {
    this.currentIndex = (this.currentIndex === this.services.length - 1) ? 0 : this.currentIndex + 1;
    console.log("next button services, currentIndex", this.currentIndex);
  }
}
