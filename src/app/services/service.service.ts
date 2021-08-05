import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getAllPosts() {
    return JSON.parse(localStorage.getItem('registration') || '[]');
  }
  addPost(formValue: any) {
    const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(formValue);
    localStorage.setItem('registration', JSON.stringify(registartions));
  }
  getPostByIndex(index: number) {
    const registartions = this.getAllPosts();
    return (registartions[index])
  }
  deletePost(index: number) {
    const registartions = this.getAllPosts();
    registartions.splice(index, 1);
    localStorage.setItem('registration', JSON.stringify(registartions));
  }
  saveUpdate(index: number, formValue: any) {
    let postData = this.getAllPosts();
    postData.splice(index, 1, formValue);
    localStorage.setItem('registration', JSON.stringify(postData))
  }

}
