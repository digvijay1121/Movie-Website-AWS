# 🎬 CineMax - OTT Streaming Platform on AWS

A modern OTT (Over-The-Top) movie streaming website built using **HTML, CSS, JavaScript**, hosted on **Amazon EC2**, and integrated with **Amazon S3** for storing movie posters and trailers.

---

## 📖 Project Overview

CineMax is a responsive streaming platform that allows users to:

- Browse trending movies
- View top-rated movies
- Search movie titles
- Watch trailers
- Experience a modern Netflix-inspired UI

The frontend is hosted on an **Amazon EC2 instance**, while all media assets (posters and trailers) are stored in an **Amazon S3 bucket**.

---

# 🚀 Features

- 🎥 Modern OTT UI
- 🔍 Movie Search
- 🎬 Play Movie Trailers
- 🖼️ Movie Posters from Amazon S3
- 📹 Video Streaming from Amazon S3
- 📱 Fully Responsive Design
- 🎞️ Trending Movies
- 🍿 Top Movies
- 📺 Popular Movies
- ⬅️➡️ Horizontal Carousel Slider
- 💻 Hosted on Amazon EC2

---

# 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Amazon EC2
- Amazon S3
- Apache2 Web Server
- FileZilla

---

# ☁️ AWS Services Used

| AWS Service | Purpose |
|-------------|----------|
| Amazon EC2 | Website Hosting |
| Amazon S3 | Store Posters & Trailers |
| IAM | Secure AWS Resource Access |
| Apache2 | Web Server |
| FileZilla | Upload Project Files |

---

# 🏗️ Project Architecture

```text
               User
                 │
                 ▼
         Web Browser
                 │
                 ▼
       Amazon EC2 Instance
      (Apache Web Server)
                 │
        HTML • CSS • JavaScript
                 │
                 ▼
        Amazon S3 Bucket
      ├── Posters Folder
      └── Trailers Folder
                 │
                 ▼
      Images & Videos Loaded
```

---

# 📂 Project Structure

```text
OTTPlatform/
│
├── index.html
├── style.css
├── script.js
│
├── posters/
│     ├── movie1.jpg
│     ├── movie2.jpg
│     ├── movie3.jpg
│     ├── movie4.jpg
│     └── movie5.jpg
│
└── trailers/
      ├── trailer1.mp4
      ├── trailer2.mp4
      ├── trailer3.mp4
      ├── trailer4.mp4
      └── trailer5.mp4
```

---

# ⚙️ Installation & Deployment

## Step 1

Launch an Amazon EC2 Ubuntu Instance.

---

## Step 2

Install Apache.

```bash
sudo apt update
sudo apt install apache2 -y
```

---

## Step 3

Clone or upload the project files.

```text
/var/www/html
```

---

## Step 4

Create an Amazon S3 Bucket.

Example

```text
ott-platform-2026
```

---

## Step 5

Create folders inside S3.

```text
posters/
trailers/
```

Upload all movie posters and trailer videos.

---

## Step 6

Update the S3 Bucket URL inside **script.js**

```javascript
const bucket = "https://ott-platform-2026.s3.ap-south-1.amazonaws.com";
```

---

## Step 7

Open the website.

```text
http://<EC2-Public-IP>
```

Example

```text
http://13.xxx.xxx.xxx
```

---

# 📸 Screenshots

- Home Page
- Trending Movies
- Top Movies
- Popular Movies
- Search Functionality
- Video Player
- Amazon S3 Bucket
- Amazon EC2 Instance

---

# 🎯 Learning Outcomes

After completing this project, you will learn:

- Hosting websites on Amazon EC2
- Deploying applications using Apache
- Uploading files using FileZilla
- Integrating Amazon S3 with JavaScript
- Streaming videos from S3
- Building responsive web applications
- Working with cloud storage
- Frontend deployment on AWS

---

# 🔮 Future Enhancements

- User Authentication using Amazon Cognito
- Watchlist Feature
- Movie Recommendation System
- Admin Dashboard
- AWS Lambda Integration
- Amazon DynamoDB Database
- API Gateway
- CloudFront CDN
- Route 53 Custom Domain
- CI/CD using GitHub Actions

---

# 👨‍💻 Author

**Developed by:** XYZ

AWS Cloud Project

---

# 📄 License

This project is developed for **educational and portfolio purposes only**.

Movie posters, trailers, and related media belong to their respective copyright owners.

No ownership is claimed over any third-party content used for demonstration purposes.

# 📸 Application Screenshots

## 🏠 Home Page

Modern OTT streaming platform homepage with a cinematic hero banner, navigation bar, search functionality, and featured content.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/655472ef-4a31-4f11-a6c8-971b677f8ada" />

---

## 🔥 Trending Movies

Browse the latest trending movies displayed in a responsive horizontal carousel with movie details and quick play options.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/339519f3-6216-4099-a4fb-a5ac44341abe" />

---

## 🎬 Top Movies

Explore a collection of top-rated movies with posters, ratings, release years, and trailer playback.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e2118733-1b06-4a39-86ea-f8cce2c4185e" />

---

## 📺 Popular Movies

Popular movie collection presented in an interactive carousel with smooth horizontal scrolling.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9225b8c9-323b-476f-8689-bf36b03cb4ec" />

---

## ▶️ Trailer Player

Built-in HTML5 video player that streams movie trailers directly from Amazon S3.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e3d09a08-86b5-41fd-a6e9-49d2fa8d5245" />

---

## ☁️ Amazon S3 Bucket

Amazon S3 bucket used to store movie posters and trailer videos accessed by the web application.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/62a960cc-e421-4c7a-b870-d188e5be40e8" />

---

## 🖥️ Amazon EC2 Instance

Ubuntu EC2 instance hosting the CineMax website using the Apache Web Server.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/64e2bb93-32b9-48c7-a0d8-83bebfefab5d" />

---

## 📁 FileZilla Deployment

FileZilla used to upload website source files from the local machine to the EC2 instance.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1c82a932-f3a3-4fc9-9e80-f0dd0b0b4fe1" />

---

## 💻 VS Code Project

Visual Studio Code project containing HTML, CSS, JavaScript, posters, and trailers used for the application.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5b64e5d0-de68-484d-93e1-4d578c3afdb9" />
