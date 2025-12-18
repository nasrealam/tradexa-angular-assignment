import { Component, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-add-post-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.scss'
})
export class AddPostFormComponent {

  protected title = signal<string>('');
  protected body = signal<string>('');
  
  protected isSubmitting = signal<boolean>(false);
  protected error = signal<string | null>(null);
  
  postCreated = output<Post>();
  cancelled = output<void>();

  constructor(private postsService: PostsService) {}


  //  Handle form submission
  
  async onSubmit(): Promise<void> {
    // Validate inputs
    if (!this.title().trim()) {
      this.error.set('Title is required');
      return;
    }

    if (!this.body().trim()) {
      this.error.set('Body is required');
      return;
    }

    this.isSubmitting.set(true);
    this.error.set(null);

    try {
      const newPost = await this.postsService.createPost({
        title: this.title().trim(),
        body: this.body().trim(),
        userId: 1 
      });

      // Emit the created post
      this.postCreated.emit(newPost);

      // Reset form
      this.resetForm();
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Failed to create post. Please try again.';
      this.error.set(errorMessage);
      console.error('Error creating post:', err);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  
  // Handle form cancellation
  
  onCancel(): void {
    this.resetForm();
    this.cancelled.emit();
  }

  
  // Reset form fields
  
  private resetForm(): void {
    this.title.set('');
    this.body.set('');
    this.error.set(null);
  }

  
  // Update title value
  
  updateTitle(value: string): void {
    this.title.set(value);
    if (this.error()) {
      this.error.set(null);
    }
  }

  
  // Update body value
  
  updateBody(value: string): void {
    this.body.set(value);
    if (this.error()) {
      this.error.set(null);
    }
  }
}
