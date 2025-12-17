# Posts Management Application

**Assignment for:** Angular Developer Internship  
**Company:** Tradexa Technologies Pvt. Ltd.  
**Candidate:** Nasre Alam  
**Date:** December 17, 2025

---

## 📋 Assignment Overview

This is a complete Angular application that fetches posts from the JSONPlaceholder API and displays them in a tabular format. Users can add new posts through a form, which sends POST requests to the API and updates the table dynamically.

### ✅ Requirements Implemented:

1. ✅ Fetch list of posts from API and display in tabular format
2. ✅ Add button on top of table to open form
3. ✅ Form with two input fields (title and body)
4. ✅ POST user input to server and append to table
5. ✅ **Bonus:** Comprehensive error handling with retry functionality

---

## 🚀 Quick Start

### Prerequisites:
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation:

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm start
```

3. **Open in browser:**
```
http://localhost:4200
```

The application will automatically reload when you make changes to the source files.

---

## 📁 Project Structure

```
src/app/
├── models/
│   └── post.interface.ts              # TypeScript interfaces
├── services/
│   └── posts.service.ts               # API service (Fetch API)
├── post-list/
│   ├── post-list.component.ts         # Main table component
│   ├── post-list.component.html       # Table template
│   └── post-list.component.scss       # Table styles
├── add-post-form/
│   ├── add-post-form.component.ts     # Form component
│   ├── add-post-form.component.html   # Form template
│   └── add-post-form.component.scss   # Form styles
├── app.ts                             # Root component
├── app.config.ts                      # App configuration
└── app.html                           # Root template
```

---

## 🎯 Features

### 1. Posts Table Display
- Fetches 100 posts from JSONPlaceholder API
- Displays in clean, responsive table format
- Columns: ID, User ID, Title, Body
- Loading state with spinner
- Hover effects on rows

### 2. Add Post Form
- Toggle button to show/hide form
- Two input fields: Title and Body
- Real-time validation with error messages
- Disabled submit until fields are filled
- Loading state during POST request
- Form reset after successful submission

### 3. Error Handling (Bonus)
- Try-catch blocks in all async operations
- Network error detection
- User-friendly error messages
- Retry button for failed requests
- HTTP status code error handling

### 4. Responsive Design
- Mobile-first approach
- Works on all screen sizes (mobile, tablet, desktop)
- Horizontal scrolling for table on small screens

---

## 🛠️ Technology Stack

- **Framework:** Angular 20.2.2
- **Language:** TypeScript 5.8
- **Styling:** SCSS (No Bootstrap or external CSS frameworks)
- **HTTP Client:** Native Fetch API
- **State Management:** Angular Signals
- **Change Detection:** Zoneless (Performance optimized)

---

## 📚 API Integration

### Base URL:
```
https://jsonplaceholder.typicode.com/posts
```

### GET Request:
```typescript
async getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
}
```

### POST Request:
```typescript
async createPost(post: CreatePostRequest): Promise<Post> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });
  return await response.json();
}
```

---

## ✅ Concepts Demonstrated

### Required Concepts:

1. **✅ Fetch API** - Native browser fetch() for HTTP requests
2. **✅ Promises** - Async/await pattern throughout
3. **✅ Forms** - Form handling with validation
4. **✅ Input** - Event binding and two-way data flow
5. **✅ DOM** - Conditional rendering with @if and @for
6. **✅ Arrays** - Array state management with signals
7. **✅ Functions** - Async functions and event handlers

### Bonus:

8. **✅ Error Handling** - Comprehensive error management with retry
9. **✅ TypeScript** - Strong typing with interfaces
10. **✅ Modern Angular** - Signals, standalone components, zoneless

---

## 🏗️ Build Commands

### Development Server:
```bash
npm start
# or
ng serve
```

### Production Build:
```bash
npm run build
# or
ng build
```

Build artifacts will be stored in the `dist/` directory.

### Watch Mode:
```bash
npm run watch
```

### Run Tests:
```bash
npm test
```

---

## 📖 Documentation

Comprehensive documentation is available in:

- **ASSIGNMENT_DOCUMENTATION.md** - Full technical documentation (50+ pages)
- **ASSIGNMENT_SUMMARY.md** - Quick summary with code snippets (15 pages)

These documents include:
- Detailed code explanations
- API integration details
- All concepts demonstrated
- Error handling strategies
- Styling approach
- Testing instructions

---

## 🎨 Styling

**No Bootstrap or external CSS frameworks used!**

All styles are custom-written SCSS following:
- Clean, professional design
- Corporate color scheme
- Responsive breakpoints
- Smooth transitions
- Hover effects
- Focus states

---

## 🧪 Testing

### Manual Testing:

1. **Load Posts:**
   - Open application
   - Verify 100 posts are displayed
   - Check all columns

2. **Create Post:**
   - Click "Add New Post"
   - Fill in title and body
   - Click "Create Post"
   - Verify new post appears at top

3. **Validation:**
   - Try submitting empty form
   - Verify error messages

4. **Error Handling:**
   - Disconnect internet
   - Click retry
   - Verify error message

---

## 📱 Browser Compatibility

✅ Chrome  
✅ Firefox  
✅ Safari  
✅ Edge  

---

## 📝 Code Quality

### Best Practices:
- Clean code with descriptive names
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Proper error handling
- TypeScript strict mode
- Angular best practices

---

## 🌐 Deployment

### GitHub Repository:
```bash
git remote add origin <repository-url>
git push -u origin main
```

### GitHub Pages (Optional):
```bash
ng build --configuration production --base-href /repo-name/
```

---

## 📧 Contact

**Candidate:** Nasre Alam  
**Position:** Angular Developer Internship  
**Company:** Tradexa Technologies Pvt. Ltd.

---

## 📄 License

This project was created as an assignment for Tradexa Technologies Pvt. Ltd.

---

## 🙏 Acknowledgments

- **JSONPlaceholder API** - Free fake API for testing and prototyping
- **Angular Team** - Amazing framework
- **Tradexa Technologies** - Opportunity to showcase skills

---

**Generated:** December 17, 2025  
**Framework:** Angular 20.2.2  
**Assignment Duration:** 24 hours

---

## Additional Resources

For more information on Angular CLI:
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Angular Documentation](https://angular.dev)
- [JSONPlaceholder API Guide](https://jsonplaceholder.typicode.com/guide/)
