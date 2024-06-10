<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/BrandonWSmith/Jammming">
    <img src="public\images\logo.png" alt="Logo">
  </a>

<h3 align="center">Jammming</h3>

  <p align="center">
    A Spotify playlist creation app created with React that uses the Spotify API to allow users to create and save playlists to their Spotify account.
    <br />
    <a href="https://github.com/BrandonWSmith/Jammming/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/BrandonWSmith/Jammming/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Jammming Screen Shot][Jammming-screenshot]

<p align="center">
  This project was created as a part of the <a href="https://www.codecademy.com">Codecademy</a> Full-Stack Engineer career path. It was created using React and uses the Spotify API to allow users to search for songs, artists and albums, create a playlist of songs and save created playlists to their Spotify account.
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![React][React]][React-url]
* [![SpotifyL][Spotify]][Spotify-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You will need the latest version of Node.js and Node Package Manager to run this project.

You can install the latest version of Node at <a href="https://nodejs.org/">Nodejs.org</a>.

You can install the latest version of NPM by running:
 ```sh
 npm install npm@latest -g
 ```

You will also need a Spotify client ID. To obtain a Spotify client ID, you will need to login to <a href="https://developer.spotify.com/">Spotify for Developers</a> using your Spotify account. Once logged in, navigate to the <a href="https://developer.spotify.com/dashboard">dashboard</a> and click "Create app" in the top right corner.

<img src="public\images\create_app.png" alt="Create App Location" width="554" height="81">

On the app creation page, you can enter any name and description you wish. For the redirect URIs, enter `http://localhost:3000/app/callback`, this URL must be listed for the app to correctly redirect back from the Spotify authorizartion page.

<img src="public\images\redirect_URIs.png" alt="Redirect URIs Location" width="548" height="263">

Once your Spotify app is created, you can find your client ID in the settings page for your app.

<img src="public\images\client_ID.png" alt="Client ID Location" width="548" height="314">

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BrandonWSmith/Jammming.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To start the app, run:
 ```sh
 npm start
 ```
Once the app has started, a browser window should open automatically. If your browser does not open automatically, open your browser and navigate to http://localhost:3000.

You will first see a landing page that prompts you to enter your Spotify client ID. Enter the client ID found in the settings page for your Spotify app listed in your <a href="https://developer.spotify.com/dashboard">Spotify Dashboard</a>.

Upon submitting your client ID, you will be redirected to a Spotify authorization page. Agree to authorize Jammming to access your Spotify account and you will be redirected back to the Jammming app.

On the left side of the app, you can search for songs, artists or albums listed on Spotify.

<div align="center">
  <img src="public\images\search.png" alt="Jammming Search" width="540" height="574">
</div>
</br></br>

Search results can be added to a playlist by clicking the "+" icon which will add the song to the playlist on the right side of the app.

<div align="center">
  <img src="public\images\playlist.png" alt="Jammming Playlist" width="540" height="574">
</div>
</br></br>

At the top of the playlist section, you can name your playlist and save it to your Spotify account.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

There are currently no planned features for this app

See the [open issues](https://github.com/BrandonWSmith/Jammming/issues) if you'd like to propose a feature (and view known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* Email: BWSmith09@gmail.com
* Project Link: [https://github.com/BrandonWSmith/Jammming](https://github.com/BrandonWSmith/Jammming)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/BrandonWSmith/Jammming.svg?style=for-the-badge
[contributors-url]: https://github.com/BrandonWSmith/Jammming/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BrandonWSmith/Jammming.svg?style=for-the-badge
[forks-url]: https://github.com/BrandonWSmith/Jammming/network/members
[stars-shield]: https://img.shields.io/github/stars/BrandonWSmith/Jammming.svg?style=for-the-badge
[stars-url]: https://github.com/BrandonWSmith/Jammming/stargazers
[issues-shield]: https://img.shields.io/github/issues/BrandonWSmith/Jammming.svg?style=for-the-badge
[issues-url]: https://github.com/BrandonWSmith/Jammming/issues
[Jammming-screenshot]: public/images/screenshot.png
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Spotify]: 	https://img.shields.io/badge/Spotify_API-1ED760?&style=for-the-badge&logo=spotify&logoColor=white
[Spotify-url]: https://developer.spotify.com/
