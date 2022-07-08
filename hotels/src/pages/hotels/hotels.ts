import { NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { InfoHotelPage } from "../info-hotel/info-hotel";

@Component({
  selector: "page-hotels",
  templateUrl: "hotels.html",
})
export class HotelsPage {
  hotels: Array<{
    imageUrl: string;
    title: string;
    description: string;
    roomCost: number;
    hasParking: boolean;
    address: string;
    phone: string;
  }>;
  filteredData: Array<{
    imageUrl: string;
    title: string;
    description: string;
    roomCost: number;
    hasParking: boolean;
    address: string;
    phone: string;
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotels = [
      {
        imageUrl:
          "https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg",
        title: "Будапешт",
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: false,
        address: "Москва, ул. Петровские Линии, 2",
        phone: "8 (495) 729-35-01",
      },
      {
        imageUrl:
          "https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg",
        title: "Космос",
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: "Москва, пр-т Мира, 150",
        phone: "8 (495) 234-12-06",
      },
      {
        imageUrl:
          "https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg",
        title: "Космос",
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: false,
        address: "Москва, пр-т Мира, 150",
        phone: "8 (495) 234-12-06",
      },
      {
        imageUrl:
          "https://verbludvogne.ru/wp-content/uploads/2020/02/0-glavnya-1200h630-7_-_1200__80.jpg",
        title: "Ангара",
        description: 'Гостиница "Ангара"',
        roomCost: 500,
        hasParking: true,
        address: "Иркутск, сквер им.Кирова",
        phone: "8 (3952) 29-35-01",
      },
      {
        imageUrl:
          "https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg",
        title: "Будапешт",
        description: 'Московский отель "Будапешт"',
        roomCost: 2000,
        hasParking: true,
        address: "Москва, ул. Петровские Линии, 2",
        phone: "8 (495) 729-35-01",
      },
      {
        imageUrl:
          "https://cache.marriott.com/marriottassets/marriott/OVBMC/ovbmc-exterior-0019-hor-feat.jpg",
        title: "Marriott",
        description: 'Отель "Marriott" в Новосибирске',
        roomCost: 4500,
        hasParking: true,
        address: "Новосибирск, ул.Орджоникидзе, 29",
        phone: "8 (383) 729-35-01",
      },
    ];

    interface Hotel {
      imageUrl: string;
      title: string;
      description: string;
      roomCost: number;
      hasParking: boolean;
      address: string;
      phone: string;
    }
  }

  ngOnInit() {
    this.filteredData = [...this.hotels];
  }

  openModal() {
    const modal = document.getElementById("page-modal");
    modal.classList.remove("modal__hidden");
  }

  filterHotels(data) {
    console.log("DataInHotels", data);
    if (!data) return this.hotels;
    this.filteredData = this.hotels.filter((item) => {
      return !data.needParking
        ? item.roomCost >= data.lower && item.roomCost <= data.upper
        : item.roomCost >= data.lower &&
            item.roomCost <= data.upper &&
            item.hasParking;
    });
    return this.filteredData;
  }

  openHotelPage(hotelCard) {
    this.navCtrl.push(InfoHotelPage, hotelCard);
  }
}
