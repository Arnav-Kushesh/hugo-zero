# Hugo Zero

**Hugo CMS with Zero Setup** - Just select your Hugo folder and start working.

A beautiful, browser-based content management system for Hugo static sites. Edit and create blog posts directly from your browser without needing to manually edit markdown files or configure anything.

## ✨ Features

- 📁 **Zero Configuration**: No setup required. Just point to your Hugo folder and you're ready to go.
- 📝 **Browse Posts**: View all blog posts from your Hugo content directory
- ✏️ **Edit Posts**: Edit both content and frontmatter in a beautiful, Apple-inspired interface
- 👁️ **Dual Preview Modes**: 
  - Rendered preview with real-time markdown rendering
  - Live preview using iframe to show your actual Hugo site
- ➕ **Create Posts**: Create new blog posts with proper frontmatter
- 🖼️ **Image Upload**: Upload images directly to your Hugo site's `static/images/` directory and automatically insert markdown image syntax
- 📚 **Media Manager**: Browse all uploaded images, see which ones are unused ("Dangling Media"), and delete images you no longer need
- 🔄 **Direct File Access**: Read and write files directly using browser APIs (no server needed!)
- 📂 **Recursive Scanning**: Automatically finds all markdown files in subdirectories
- 💾 **Persistent Access**: Folder access is saved using IndexedDB, so you don't need to reselect after refresh

## 🚀 Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

## 💻 Development

The project is built with React and Vite. Simply run:

```bash
npm run dev
```

This starts the Vite development server with hot module replacement at `http://localhost:3000`.

## 🏗️ Building for Production

```bash
npm run build
```

This will build the React app into the `public` directory.

### Running the Production Server

```bash
npm start
```

This will start an Express server on port 3000 (or the port specified by the `PORT` environment variable).

### Deploying to Railway

1. Build the app: `npm run build`
2. The `start` script in `package.json` will automatically run the Express server
3. Railway will detect the `PORT` environment variable automatically
4. Make sure to set the build command to `npm run build` in Railway settings

## 📖 Usage

1. Open the app in your browser (Chrome, Edge, or another Chromium-based browser)
2. On the homepage, click the **"Select Hugo Folder"** button
3. Choose your Hugo site root folder (the folder containing the `content` directory)
4. You'll be automatically redirected to `/app` where you can start editing!

## 🎨 Design

Hugo Zero features a beautiful, dark-mode-first design inspired by Apple's design language:
- Glassmorphism effects
- Smooth animations
- Clean, minimal interface
- Modern typography
- Glowing interactive elements

## 🔧 Technical Details

The CMS uses Chrome's File System Access API to:
- Request permission to access a directory via `window.showDirectoryPicker()`
- Read files directly from the selected directory
- Write changes back to files using `FileSystemWritableFileStream`
- Maintain file handles for efficient file operations
- Persist directory handles using IndexedDB for access across page refreshes

**No backend server is required!** All file operations happen entirely in the browser using the File System Access API. The app is a pure client-side application.

## 🔒 Security Note

This CMS is designed for local development use. The File System Access API requires explicit user permission for each folder selection, providing a secure way to access local files. All operations are performed client-side - no data is sent to any server.

## 🌐 Browser Support

The File System Access API is currently only supported in Chromium-based browsers:
- ✅ Chrome
- ✅ Edge
- ✅ Opera
- ✅ Brave
- ❌ Firefox (not yet supported)
- ❌ Safari (not yet supported)

## 📝 License

MIT
