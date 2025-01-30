import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {

  title: string = '';
  content: string = '';

  constructor(private blogService: BlogService) { }

  // Add a new blog post
  addBlog() {
    const newBlog = { title: this.title, content: this.content };
    this.blogService.addBlog(newBlog).subscribe(() => {
      this.title = '';
      this.content = '';
    });
  }
}
