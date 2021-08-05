import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  submitted = false;
  index: any;
  postForm = new FormGroup({
    titre: new FormControl('', Validators.required),
    categorie: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])

  })
  constructor(private postService: ServiceService, private activatetRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    const currentPost = this.postService.getPostByIndex(this.index)
    this.postForm.patchValue(currentPost);
  } 
  updatePost(){
    this.submitted=true;
    if (this.postForm.invalid)
    {return};
    this.postService.saveUpdate(this.index, this.postForm.value);
    this.router.navigateByUrl('/listPost')
   
  }
}
