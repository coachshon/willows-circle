# 🃏 Little Champions interACTIVE stories

A **Next.js 14** project utilizing **Auth.js** with **Google OAuth** authentication provider, **shadcn/ui** to create frontend UI, and **Grist**, a modern, relational database with an API that allows for automation and integration with other systems creating Little Champions online program for preschool and kindergarten teachers to incorporate more meaningful movement into their classrooms. 📚🏃🏾‍♂️🤸🏻‍♀️

## 📑 Overview

This application allows users to log in via **Google** to access Little Champions interACTIVE stories, a collection of classroom adventures that provide quality, physical literacy-based lessons for your students.

A great way to practice reading, our series of digital stories make learning exciting for early elementary grade levels. Packed with beautiful illustrations, our interACTIVE stories blend movement and education in one attractive package.

## 🛠️ Tech Stack

- **🧑‍💻 Next.js 14**: Fast and optimized server-side rendering.
- **🔐 Google OAuth**: Secure login using **Auth.js** with Google OAuth provider.
- **✨ shadcn/ui**: Elegant, responsive components for a modern interface.
- **🌍 i18next**: For management of translation content.
- **📚 Grist**: Simple spreadsheet like realtion database for content management.
- **📦 PWA**: PWA is a web application that combines the features of a website and a native mobile app and are designed to be fast, reliable,with features such as offline support, push notifications, and the ability to be installed on a user's device like a native app.

## 🔑 Authentication

This project leverages **Auth.js** to manage authentication using Google OAuth, allowing users to securely log in and interact with their Google repositories.

- Once authenticated, users can view and manage issues from their Google repositories directly in the app.
- The Google OAuth access token is securely stored in the session to allow fetching and manipulating Google issues on behalf of the user.

### Setting up Google OAuth Application

To enable Google OAuth authentication in this project, follow these steps:

1. **Log in to Google**  
   Go to the [Google Cloud Platform Console](https://console.cloud.google.com/). From the projects list, select a project or create a new one.

2. **Create a New OAuth Clien IDn**  
   If the **APIs & services** page isn't already open, open the console left side menu and select **APIs & services**. On the left, click **Credentials**.

3. **Obtain Client ID and Client Secret**  
   If the **APIs & services** page isn't already open, open the console left side menu and select **APIs & services**. On the left, click **Credentials**. Click **New Credentials**, then select **OAuth client ID**.  
   Select the appropriate application type for your project and enter any additional information required. If this is your first time creating a client ID, you can also configure your consent screen by clicking **Consent Screen**.
   Click **Create client ID**. Google will generate a **Client ID** and **Client Secret** for your app. These credentials will be used to integrate Google OAuth with your application.

4. **Configure Google OAuth in Your App**  
   In your project, add the **Client ID** and **Client Secret** to your .env.local file to complete the Google OAuth setup.

For additional guidance, refer to the official [Google OAuth documentation](https://docs.Google.com/en/developers/apps/building-oauth-apps).

## 🎨 UI with shadcn/ui

We’re using **[shadcn/ui](https://ui.shadcn.com/docs)** along with Vercel's [AI bot](https://v0.dev/chat) to build a clean and intuitive interface which also has

### Key Features:

- **Responsive Design** 📱: The UI is fully responsive, ensuring an optimal experience on both desktop and mobile devices.
- **Customizable Components** ⚙️: Each component is designed to be easily styled and customized to fit your specific requirements.

### Installing shadcn/ui Components

You can add components to your project in two ways: via the CLI or by manually copying the component code.

### Option 1: Install Components via CLI

1. Install the **shadcn/ui** CLI:

   ```bash
   npm install shadcn-cli
   ```

2. Add components using the CLI:

   ```bash
   npx shadcn add button
   ```

   Replace `button` with the component you'd like to install. For a full list of available components, refer to the [shadcn/ui documentation](https://ui.shadcn.dev/docs/components).

### Option 2: Copy & Paste Component Code

If you'd prefer, you can manually copy and paste the component code into your project:

1. Visit the [shadcn/ui components page](https://ui.shadcn.com/docs/components).
2. Find the component you need and copy its code.
3. Paste the code into your project, making any necessary adjustments to fit your design and setup.

### Customizing Components

- Each component is designed to be fully customizable with CSS or any preferred styling solution.
- You can extend or modify the components to match your project’s branding and UI needs.

## 📱 Configuring Application as a PWA

1. **Install `next-pwa`** to handle PWA functionality.
2. Use **PWABuilder** to generate PWA assets (icons, manifest).
3. Place **icons** and **manifest.json** in the `public` folder.
4. Configure `next.config.js` with **next-pwa settings**.
5. Define PWA metadata and icons using **Next.js Metadata API**
6. Test your PWA using a **production build**.

## 📂 Folder Structure

```bash
.
public
  - /icons
  - manifest.json
src
├── actions         # Next.js server actions
└── api
    ├── api
    │   └── auth    # Auth.js API routes
├── app             # App router path
├── auth            # Auth.js configuration
├── components      # UI Components (built with shadcn/ui)
├── constants       # Constants used across the application
├── hooks           # Custom React hooks
├── i18n            # Translations management
├── lib             # Common functions and services
├── middlewares     # Chained middlewares executed sequentially to modify the request
└── resources
    ├── images      # Images used in the app
├── types           # TypeScript types that enforce type safety in the app
├── middleware      # Functions that execute before a request is completed
├── .env            # Environment variables
├── .env.local      # Environment secrets
└── README.md       # You're reading it now!
```

## 🔄 Current Functionality

- Sidebar
- Language switcher
- Login
- Grist database driven content
- Story theme carousel pages
- Story theme PDF download
- User profile with `Log Out` button

## ✨ Future Enhancements

- **📊 Progress Tracking**: Track student progress
- **🔔 Notifications**: Get notified via push messages

## 🏁 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2️⃣ Set Up Environment Variables

Create a `.env` file, as per `.env.example`, and add your environment variables:

```
AUTH_URL=http://localhost:3000
API_URL=https://api.Google.com/

```

Create a `.env.local` file, as per `.env.local.example`, and add your Google OAuth credentials:

```
AUTH_SECRET=find-in-one-password-poker-deck.env.local
AUTH_Google_ID=find-in-one-password-poker-deck.env.local
AUTH_Google_SECRET=find-in-one-password-poker-deck.env.local
```

### 3️⃣ Run the Application

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will be available at `http://localhost:3000`.

## run Docker container

### Docker:

Docker is a platform that allows you to build, package, and distribute applications using containerization. You can download and install Docker from the official website based on your operating system: [Docker](https://www.docker.com/get-started)
A Dockerfile sets up a Node.js environment, installs dependencies, copies the application code, builds the Next.js application, exposes port 3000, and starts the application.

### Docker Compose

Docker Compose is a tool that allows you to define and manage multi-container Docker applications. It simplifies the process of running multiple interconnected containers as a single application.
Using Docker Compose, you can easily spin up your entire application stack with a single command. It handles the orchestration and provisioning of containers, networks, and volumes, making it convenient for development, testing, and even production deployments.

### Docker Desktop

Docker Desktop is a software application that provides an easy-to-use graphical interface and toolset for working with Docker containers on your local machine. It is available for both Windows and macOS operating systems. [Download](https://www.docker.com/products/docker-desktop)

```
docker build -t nextjs-app -f Dockerfile.development .
docker run --env-file .env --env-file .env.local -p 3000:3000 nextjs-app

```

To run this app in a docker container via a docker compose file:

1. Open your terminal or command prompt.

2. Navigate to the directory where your `docker-compose.dev.yml` file is located.

3. Use the following command to start Docker Compose in the foreground:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

This command will start the containers defined in your `docker-compose.dev.yml` file, and you will see their logs and output in your terminal.

To view the running container open a browser at http://localhost:3000/

To gracefully stop a local Docker container that has been launched using Docker Compose, you have two convenient options:

1. **Ctrl+C**:
   -If you've started Docker Compose in the foreground (i.e., you can see the container logs in your terminal), you can simply press Ctrl+C. This will send an interrupt signal to the running Docker Compose process, and it will gracefully stop and remove the containers, networks, and volumes defined in the YAML file.

2. **Using the Command Line**:

   - Open your terminal or command prompt.
   - Navigate to the directory where your `docker-compose.dev.yml` file is located.
   - Run the following command to stop the Docker Compose services defined in the `docker-compose.dev.yml` file:
     ```
     docker-compose -f docker-compose.dev.yml down
     ```
   - Docker Compose will stop and remove the containers, networks, and volumes defined in the YAML file.

3. **Using Docker Desktop UI**:
   - Open Docker Desktop on your computer.
   - Navigate to the 'Containers/Apps' section within Docker Desktop.
   - Locate the container you wish to stop, and click on it.
   - In the container details, you'll find a 'Stop' button. Click it to gracefully shut down the container.
