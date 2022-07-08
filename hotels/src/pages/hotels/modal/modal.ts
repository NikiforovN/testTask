import { Component, EventEmitter, Output, Input } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-modal",
  templateUrl: "modal.html",
})
export class ModalPage {
  @Input() hotelsInfo
  @Output() onFilter = new EventEmitter<Object>()


inputValues = {
    lower: null,
    upper: null,
    needParking: false,
  };

  constructor(public view: ViewController, public navParams: NavParams) {

  }



  findMinCost(array){
    return array.reduce((acc, item)=>{
      return item.roomCost < acc ? item.roomCost : acc
    },Infinity)
  }
  findMaxCost(array){
    return array.reduce((acc, item)=>{
      return item.roomCost > acc ? item.roomCost : acc
    },-Infinity)
  }

  closeModal() {
    const modal = document.getElementById("page-modal");
    modal.classList.add("modal__hidden");
    this.ngOnInit()
  }

  setInputData(data){
    console.log('data', data)
    this.onFilter.emit(data)
    this.closeModal()
  }

  ngOnInit() {
    this.inputValues.lower = this.findMinCost(this.hotelsInfo)
    this.inputValues.upper = this.findMaxCost(this.hotelsInfo)
    this.inputValues.needParking = false
  }
}
