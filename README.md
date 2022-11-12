<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/hberkaykuran/twitter-clone">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Twitter Clone</h3>

  <p align="center">
    Twitter clone application that I developed for the sake of experimenting with various frameworks/libraries/technologies.
    <br />
    <a href="https://twitter-clone-hberkaykuran.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/hberkaykuran/twitter-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/hberkaykuran/twitter-clone/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![TailwindCSS][tailwindcss]][tailwindcss-url]
- [![Firebase][firebase]][firebase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- yarn
  ```sh
  yarn install
  ```

### Installation

1. Create a Firebase project <a href="https://console.firebase.google.com/">here</a> and get your Firebase Web API key from project settings
2. On Firebase project, create a storage and make sure the read/write rules are set
   ```js
   rules_version = '2';
   service firebase.storage {
       match /b/{bucket}/o {
           match /{allPaths=**} {
               allow read, write: if true;
           }
   }
   ```
3. On Firebase project, create Firebase Database and make sure the read/write rules are set
   ```js
   rules_version = '2';
   service cloud.firestore {
       match /databases/{database}/documents {
           match /{document=**} {
               allow read, write: if true;
           }
       }
   }
   ```
4. On Firebase project, navigate to Authentication -> Sign-in method -> Add new provider.
   - Enable Google provider
   - Get your Google ID and secret under Google-> Web SDK configuration
5. Generate a secret for NextAuth <a href="https://generate-secret.vercel.app/32">here </a>
6. Clone the repo
   ```sh
   git clone https://github.com/hberkaykuran/twitter-clone.git
   ```
7. Install packages
   ```sh
   yarn install
   ```
8. Enter your environment variables in `.env`
   ```
    FIREBASE_API_KEY = <firebase-web-api-key-here>
    GOOGLE_ID = <your-id-here>
    GOOGLE_SECRET = <your-secret-here>
    NEXTAUTH_URL = <your-url-here> (http://localhost:3000 if you're working locally)
    NEXTAUTH_SECRET = <your-secret-here>
   ```
9. While signin in with google, to not get callback error, sign in to <a href="https://console.cloud.google.com/"> Google Cloud </a> with the same account used on Firebase. .
   - Go to your project -> Dashboard -> APIs & Services -> Credentials
   - Go to Web client under OAuth 2.0 Client IDs and add origin/redirect URLs. Example;
     - Authorized JavaScript origins -> ADD URI -> https://twitter-clone-hberkaykuran.vercel.app (http://localhost:3000 for local)
     - Authorized redirect URIs -> ADD URI -> https://twitter-clone-hberkaykuran.vercel.app/api/auth/callback/google (http://localhost:3000/api/auth/callback/google for local)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Add polls functionality
- [ ] Create a user profile and settings menu
- [ ] Video attachments
- [ ] Modal for focusing on tweets with picture in it

See the [open issues](https://github.com/hberkaykuran/twitter-clone/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

H.Berkay Kuran - [@hberkaykuran](https://twitter.com/hberkaykuran) - hberkaykuran@outlook.com

Project Link: [https://github.com/hberkaykuran/twitter-clone](https://github.com/hberkaykuran/twitter-clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/hberkaykuran/twitter-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/hberkaykuran/twitter-clone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hberkaykuran/twitter-clone.svg?style=for-the-badge
[forks-url]: https://github.com/hberkaykuran/twitter-clone/network/members
[stars-shield]: https://img.shields.io/github/stars/hberkaykuran/twitter-clone.svg?style=for-the-badge
[stars-url]: https://github.com/hberkaykuran/twitter-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/hberkaykuran/twitter-clone.svg?style=for-the-badge
[issues-url]: https://github.com/hberkaykuran/twitter-clone/issues
[license-shield]: https://img.shields.io/github/license/hberkaykuran/twitter-clone.svg?style=for-the-badge
[license-url]: https://github.com/hberkaykuran/twitter-clone/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hberkaykuran
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[tailwindcss]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
[firebase]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[firebase-url]: https://firebase.google.com/
