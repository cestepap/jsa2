import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];

  constructor(private ImagesService: ImagesService) {}

  ngOnInit(): void {
    this.ImagesService.getAllImages().subscribe(
      (images) => (this.images = images)
    );
  }
}
