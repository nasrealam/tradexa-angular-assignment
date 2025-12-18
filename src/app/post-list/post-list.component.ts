import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.interface';
import { AddPostFormComponent } from '../add-post-form/add-post-form.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, AddPostFormComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  protected posts = signal<Post[]>([]);
  protected isLoading = signal<boolean>(false);
  protected error = signal<string | null>(null);
  protected showForm = signal<boolean>(false);

  constructor(private postsService: PostsService) {}

  async ngOnInit(): Promise<void> {
    await this.loadPosts();
  }

  
  // Load all posts from the AP
  async loadPosts(): Promise<void> {
    this.isLoading.set(true);
    this.error.set(null);

    try {
      const fetchedPosts = await this.postsService.getPosts();
      this.posts.set(fetchedPosts);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load posts';
      this.error.set(errorMessage);
      console.error('Error loading posts:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  /**
   * Toggle the form visibility
   */
  toggleForm(): void {
    this.showForm.set(!this.showForm());
  }

  
  // Handle new post creation
  
  async handlePostCreated(newPost: Post): Promise<void> {
    this.posts.update(currentPosts => [newPost, ...currentPosts]);
    this.showForm.set(false);
  }


// Handle form cancellation

  handleFormCancelled(): void {
    this.showForm.set(false);
  }
}
