Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
For my NBA App, I wanted to integrate two separate components together, both of which are divided into different components. The sidebar is specific to the Selected NBA Team. And the Navbar shows the details related to the whole NBA league. Firstly I wanted to make a way to select the NBA to make it your "favorite". Once it has been selected it will change the page css to show the colors of the team's colorway. At first, I hard-coded the entire Object of NBA teams, so that it would contain information such as the team name, primary colors, and logo image. The click function within this page allows me to hold the selected Logo to the global state so that it can be pushed to different pages. Before I pushed the hard-coded team into global state. I wanted to integrate an API Team into it that included more information such as the abbreviations, city, division, conference, and ID so that it could be hooked to any possible API's that would require this information. This now SelectedLogo is passible to all states through GlobalState Provider where it is imbedded across the whole App.jsx. Now we can attach different APIs to be used based on the selectedLogo to be integrated into those components with APIs without prop drilling values for the range of different values that are carried. This way it doesnt matter if the API request is based off of team name, id, city, etc. It essentially becomes the catch all. This allowed me to change my css for the navbar and buttons to the indexes of the color, and call certain api based on their specific params. 
![Dynamic Home1](https://github.com/josephachang02/NBA_Application/assets/131396136/fb1a47da-404b-4dbd-a5bd-974c3500efda)
![NBA Live Score](https://github.com/josephachang02/NBA_Application/assets/131396136/f90744e1-3c30-4074-8bf9-bff0dda2f1b3) unfortunately, I had issues showing the actual score of the game :(
![Screenshot 2023-10-09 195847](https://github.com/josephachang02/NBA_Application/assets/131396136/89a84d35-9cce-4eea-9f28-da8065ed54ef)


Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.
I was able to pull API's from several sources, and some still yet to render into the component of the page. 
The API's I used: 
  Basket API: https://rapidapi.com/fluis.lacasse/api/basketapi1/
  API-NBA: https://rapidapi.com/api-sports/api/api-nba/
  NBA Latest News: https://rapidapi.com/savey03/api/nba-latest-news/
  BallDontLie: https://www.balldontlie.io/home.html#introduction
  NBA Schedule: https://rapidapi.com/kwik-api-kwik-api-default/api/nba-schedule/

I was able to integrate several of the NBA API's in the instances where it is calling for a specific team (dependent on useState) was more difficult to integrate the API's based on the called Team. 

Getting Started: Info on how to clone and start the app and link to the deployed app on GitHub Pages/Render.
I was talkuing with JC and he helepd me discover the netlify.com which is farr easier to navigate instead of having to worry about the build folder contained in the project. The downside of netlify is that refreshed pages for the npm run dev, do not generate and they have to be pushed first, and then npm run dev in order to see the updated changes. But this was the last operation i did before several minor updates before finally submitting the project. 

Unsolved Problems: List any unsolved issues.
I was unable to solve the issues for most of the team Components, this is the biggest issue right now as it doesnt accept those calls for the specific team. I struggled with calling those APIs and played around with it, asking ChatGPT on how to connect those two together so that the selectedLogo.id for example would be called and showing that team's information. Ideally, I would have spent more time on working with those APIs and it might have been an issue with the colors array in the selectedLogo object. Additionally, there were API's available for the team's logo and colorway. A lot of working with API's was understanding the dataset that is contained within those API's so next time I would console.log the API response.data. To familiarize how and what parameters are needed to call that data, and how I can specifically used that information within my content. As opposed to playing around and using ChatGPT to help me with utilizing it. 

Future Enhancements: Identify future features and enhancements planned for the project.
My first day working was all on paper, trying to pull ideas for how my site should look and what content and UI i wanted. It start with grid to integrate both the navbar and sidebar together. However, as much as I had planned around it, I should've also thought of planning in terms of data use more. I should have written out or at least planned out what API's I was using, to understand what params I needed for my useState and how I could manipulate them to fit the criteria of the project. This way I wouldn't have to go back and retrace key:value pairings or rename fields, etc. 

Have a link to your hosted working app
https://roaring-boba-8ef40e.netlify.app


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
