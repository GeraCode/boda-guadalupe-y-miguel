import { Component } from '@angular/core';
import  partiesJson from './parties.json';

/*interface Parties {
  id: Number;
  partyName: String,
  churchName: String,
  churchAddress: String,
  holyMassHour: String,
  partyRoomName: String,
  partyRoomAddress: String,
  openingHours: String,
  closingHours: String,
  city: String
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'boda-guadalupe-y-miguel';

  partyId_weddin=1;
  parties: any = partiesJson;


  partyName= "";
  churchName= "";
  churchAddress= "";
  holyMassHour= "";
  partyRoomName= "";
  partyRoomAddress= "";
  openingHours= "";
  closingHours= "";
  city= "";

  constructor(){
    console.log(this.parties);
    for(let data of this.parties ) {
      if(this.partyId_weddin==data.id){
        console.log(data.id);
        console.log(data.partyName);
        console.log(data.churchName);
        console.log(data.churchAddress);
        console.log(data.holyMassHour);
        console.log(data.partyRoomName);
        console.log(data.partyRoomAddress);
        console.log(data.openingHours);
        console.log(data.closingHours);
        console.log(data.city);

        this.partyName= data.partyName;
        this.churchName= data.churchName;
        this.churchAddress= data.churchAddress;
        this.holyMassHour= data.holyMassHour;
        this.partyRoomName= data.partyRoomName;
        this.partyRoomAddress= data.partyRoomAddress;
        this.openingHours= data.openingHours;
        this.closingHours= data.closingHours;
        this.city= data.city;
      }
    } 
  }

  ngOnInit(): void { }

  ///////////////////// fotos 1 - 5
  imgObject: Array<object> = [
      {
        image: './assets/photos/img1.jpg',
        thumbImage: './assets/photos/img1.jpg',
        title: 'Guadalupe y Miguel',
        alt: 'Guadalupe y Miguel 1',
      }, {
        image: './assets/photos/img2.jpg',
        thumbImage: './assets/photos/img2.jpg',
        title: 'Guadalupe y Miguel',
        alt: 'Guadalupe y Miguel 2'
      }, {
        image: './assets/photos/img3.jpg',
        thumbImage: './assets/photos/img3.jpg',
        title: 'Guadalupe y Miguel',
        alt: 'Guadalupe y Miguel 3'
      }, {
        image: './assets/photos/img4.jpg',
        thumbImage: './assets/photos/img4.jpg',
        title: 'Guadalupe y Miguel',
        alt: 'Guadalupe y Miguel 4'
      }, {
        image: './assets/photos/img5.jpg',
        thumbImage: './assets/photos/img5.jpg',
        title: 'Guadalupe y Miguel',
        alt: 'Guadalupe y Miguel 5'
      }
      
  ];

  //////////////// 6-10
  imgObject2: Array<object> = [
    {
      image: './assets/photos/img6.jpg',
      thumbImage: './assets/photos/img6.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 6'
    }, {
      image: './assets/photos/img7.jpg',
      thumbImage: './assets/photos/img7.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 7'
    }, {
      image: './assets/photos/img8.jpg',
      thumbImage: './assets/photos/img8.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 8'
    }, {
      image: './assets/photos/img9.jpg',
      thumbImage: './assets/photos/img9.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 9'
    }, {
      image: './assets/photos/img10.jpg',
      thumbImage: './assets/photos/img10.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 10'
    }
       
  ];








  ///////////////11-15///////////////
  imgObject3: Array<object> = [
    {
      image: './assets/photos/img11.jpg',
      thumbImage: './assets/photos/img11.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 11',
    }, {
      image: './assets/photos/img12.jpg',
      thumbImage: './assets/photos/img12.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 12'
    }, {
      image: './assets/photos/img13.jpg',
      thumbImage: './assets/photos/img13.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 13'
    }, {
      image: './assets/photos/img14.jpg',
      thumbImage: './assets/photos/img14.jpg',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 14'
    }, {
      image: './assets/photos/img15.JPG',
      thumbImage: './assets/photos/img15.JPG',
      title: 'Guadalupe y Miguel',
      alt: 'Guadalupe y Miguel 15'
    }
  ];


}
