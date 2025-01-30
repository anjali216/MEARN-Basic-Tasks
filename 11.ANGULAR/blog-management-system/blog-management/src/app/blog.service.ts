import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:3000/blogs';  // URL to JSON Server API

  constructor(private http: HttpClient) { }

  // Fetch all blogs
  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Add a new blog post
  addBlog(blog: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, blog);
  }

  // Delete a blog post
  deleteBlog(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
