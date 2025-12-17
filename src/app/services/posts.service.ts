import { Injectable } from '@angular/core';
import { Post, CreatePostRequest } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  /**
   * Fetch all posts from the API
   * Returns a Promise that resolves to an array of posts
   */
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(this.API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data as Post[];
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  /**
   * Create a new post
   * Returns a Promise that resolves to the created post
   */
  async createPost(postData: CreatePostRequest): Promise<Post> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as Post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }
}
