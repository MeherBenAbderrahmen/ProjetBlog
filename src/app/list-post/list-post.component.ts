import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  registartions: any;
  constructor(private postService: ServiceService) { }

  ngOnInit(): void {
    this.registartions = this.postService.getAllPosts();
  }
  supprimerPost(nb: any) {

    this.postService.deletePost(nb);
    this.registartions = this.postService.getAllPosts();

  }
}
