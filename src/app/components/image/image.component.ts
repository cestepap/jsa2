import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  image: Image;

  constructor(
    private ImagesService: ImagesService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.ActivatedRoute.snapshot.paramMap.get('id');
    console.log('identifier -->', identifier);

    this.ImagesService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.image = image;
      console.log('Image -->', this.image);
    });
  }
}
