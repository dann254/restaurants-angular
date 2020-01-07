import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router'

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  imageUrl = environment.unsplashUrl
  @Input() restaurant
  @Input() pos
  @Input() imgSelector

  status:string
  imgUrl:string
  imagerandomizer:number

  constructor(private router:Router) { }

  ngOnInit() {
    this.imagerandomizer = ((this.pos+1)*this.imgSelector) * 612

    this.imgUrl = this.imageUrl + "150x150/?sig=" + this.imagerandomizer
    if (this.restaurant.open) {
      this.status = "open"
    } else {
      this.status = "closed"
    }
  }

  restaurantClick(restaurant) {
    this.router.navigate(['/restaurants', restaurant.slug])
  }

  setClass() {
    let classes = {
      'open': this.restaurant.open
    }
    return classes
  }

}
