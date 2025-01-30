import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  // Fetch and display blogs
  loadBlogs() {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }

  // Delete a blog
  deleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.loadBlogs();  // Reload blogs after deleting
    });
  }
}
