Requirements
- This application uses React and Electron as well as npm to run scripts
- Dependencies include:
 - npm (Node Package Manager)
 - Browsers - Edge, Chrome or Firefox (has not been tested with Firefox)
 - localhost:3000 (Port 3000 must not be used during application as application uses port to run)

Using the App
 - To use, click upload file to upload devtest.csv file
 - The dashboard will load the data in memory and will then provide league information about pitcher leaderboards
 - The user can search and drilldown to a specific pitcher and find out how they compete against other pitchers around the league and division
 
Note: This only uses SF Giants and Colorado series data for the initial projects purpose.
My intention will be to create an application where it automatically fetches new game/series data and displays
relevant data for the end user.

Run from Command Line:
- Run `npm i --legacy-peer-deps`
- Run `npm run start`
- It will launch a browser to run application

Installation:

- Run `npm i --legacy-peer-deps`
- Run `npm run build`
- This will create a local build folder in the repoository

Downgrade/Upgrade Node:
- Install nvm from https://github.com/coreybutler/nvm-windows
- Run `nvm install 15.14.0`
- Run `nvm use 15.14.0 `
- Run `node -v` to check version has changed
- You can run `nvm use 16.0.0` to go back to original version

Breakdown of project:
The first thing I did was look at the data in devtest.csv. I needed to see what kind of data was presented to me. After seeing it was pitcher data, I then decided to create user needs and requirements. 
This helped me visualize a path to code against. Since this0 question was "open-ended", I decided to create an app I would like to use, given a dataset of pitchers.

I drew out a simple design consisting of two pages. The first page, the homepage dashboard was a dashboard of top 10 lists based on different catogeries. This included strikeouts, ERA, wins, etc.

The second page was a drill down page, consisting of the pitchers bio, his pitches amongst other pitchers (average) in the league, division and team.
This page also contains charts on their pitches vs other pitchers average.

Now that I had an idea, I wanted to choose the web framework to get this coded. I had two in mind: Python using Flask and React/Electron in NodeJS. I decided to go with NodeJS as I wanted to I liked the styling in React more. I could have used Matplotlib and numpy to get it done with Python as well, but felt I had a good baseline with React given my previous projects.

