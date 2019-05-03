import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: { name: string, id: string }
  foodList = []
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.service.getFood(this.category.id).subscribe(vals => {
      this.foodList = vals
    })
  }

}
