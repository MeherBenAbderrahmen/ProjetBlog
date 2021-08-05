import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted = false;
  postForm = new FormGroup({
    titre: new FormControl('', Validators.required),
    categorie: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])

  })
  constructor(private postService: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
addPost(){
  this.submitted = true;
  if (this.postForm.invalid) { return };
  this.postService.addPost(this.postForm.value);
  this.router.navigate(['/listPost'])
}
}
