# Mekanika Website 

Welcome to the Mekanika website design README! This document provides an overview of the features, hierarchy, pages, and more for the Mekanika website.


<p align="center" style="background-color:black; padding: 10px; ">
  <img src="./public/favicon.ico" alt="Logo" width="20%">
</p>



# How to Clone the Mekanika Website Repository, Make Changes, and Create a Pull Request

## 1. Fork the Repository
- Go to the [Mekanika Website Repository](https://github.com/jeevan10017/Mekanika_website).
- Click the **Fork** button in the top-right corner to create a copy under your account.

## 2. Clone the Forked Repository
- Click the green **Code** button, copy the URL, and run this command in your terminal:

    ```bash
    git clone https://github.com/your-username/Mekanika_website.git
    ```

- Replace `your-username` with your GitHub username.

## 3. Navigate to the Project Directory
   ```bash
   cd Mekanika_website
   ```
## 4. Install Dependencies
After cloning, you need to install the project dependencies by running:
```bash
npm install
```

 ## 5.Sync with the Latest Changes to Avoid Conflicts
Before making any changes, always pull the latest changes from the original repository to avoid conflicts:

```bash
git remote add upstream https://github.com/jeevan10017/Mekanika_website.git
git pull upstream main
```


## 6. Create a New Branch, Make Changes, Commit, and Push
Create a new branch:
```bash
git checkout -b your-branch-name
```
Make your changes in the code, then add and commit them:

```bash
git add .
```
```bash
git commit -m "Description of the changes made"
```
Push your changes to your forked repository:

```bash
git push origin your-branch-name
```
## 7. Create a Pull Request
Visit your forked repository on GitHub.
Click the Compare & pull request button.
Add a description, Photos and Videos and submit the pull request.

 ## 8.Sync Regularly to Avoid Conflicts
Keep your branch up to date by pulling the latest changes from the original repository as you work:

```bash
git pull upstream main
```



## Features

1. **Home Page**:

![Screenshot_27-9-2024_1239_mekanika vercel app](https://github.com/user-attachments/assets/6c369512-6a81-46e0-9840-d5a1f216f85a)




   
3. **About Us Page**: Provides detailed information about Mekanika, its mission, and its team.

![Screenshot 2024-06-29 033044](https://github.com/jeevan10017/Mekanika_website/assets/132948936/876cae85-1179-4aa8-8a7f-f42c4a6e4061)




5. **Events Page**: Displays past events organized by Mekanika, allowing users to learn more and register.
   
![Screenshot 2024-09-27 121350](https://github.com/user-attachments/assets/b6e25b53-a62d-4458-baea-6ed5f91e941c)




7. **Course Materials Page**: Access to course materials for mechanical engineering students from semesters 1 to 8.
   
![Screenshot 2024-09-27 121446](https://github.com/user-attachments/assets/7e8fb7e7-abb2-4355-91d6-80f388107262)





9. **Projects Page**: Showcases various projects undertaken by the Mechanical Engineering Dept Professors at IIT KGP, providing details and updates.

![Screenshot 2024-09-27 121539](https://github.com/user-attachments/assets/6f60d254-58f9-485d-86b7-0d56be22ab05)


  

8. **Blogs Page**: Contains two series of blogs: INTERN-CHRONICLES and CORE-EXPEDITION by students who got internships in the department.
   
 ![Screenshot 2024-06-29 033500](https://github.com/jeevan10017/Mekanika_website/assets/132948936/6afc9153-72cb-47b2-b54a-d425717dde67)

 


![Screenshot 2024-06-29 034238](https://github.com/jeevan10017/Mekanika_website/assets/132948936/474885b4-98d4-4f5c-b051-31b781bd6ff4)



## Hierarchy

- **Home**
  - Carousel with images and brief information
  - About Us Section
  - Quick Links
- **About Us**
  - Detailed information about Mekanika
  - Team member profile
  - Quick Links
- **Blogs**
  - Two series of blogs: Intern-Chronicles and Core-Expedition.
  - Collection of insightful blog posts
  - Quick Links
- **Events**
  - Displaying Past Events
  - Quick Links
- **Course Materials**
  - Accessible course materials for mechanical engineering topics from Semester 1 to 8
  - Quick Links
- **Projects**
  - Showcase of ongoing and past projects of Professors
  - Quick Links


## Pages

1. **Home Page**
2. **About Us Page**
3. **Blogs Page**
4. **Events Page**
5. **Course Materials Page**
6. **Projects Page**



## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **React Router**: Library for handling navigation and routing in React applications.
- **FontAwesome**: Icon library for adding icons to the website.
- **CSS**: Styling language used for designing the website layout and appearance.
- **Material UI**: Component library for dynamic and modern styling.
- **Fuse.js**: Library for fuzzy search implementation.
- **Speech Recognition API**: For voice input in search functionality.
- **HTML**: Markup language used for structuring the web pages.
- **JavaScript**: Programming language used for adding interactivity and dynamic behavior to the website.
- **Node.js**: JavaScript runtime environment used for server-side scripting.
- **npm**: Package manager for installing and managing project dependencies.
- **Git**: Version control system for tracking changes in the project codebase.
- **GitHub**: Hosting platform for managing and sharing Git repositories.
- **Visual Studio Code**: Code editor used for writing and editing code files.

These technologies were instrumental in developing the Mekanika website, providing the necessary tools and frameworks for building a modern and interactive web experience.

## Contributors

- **Jeevan Kumar Korra**

## License

This project is licensed under the [MIT License](LICENSE).
