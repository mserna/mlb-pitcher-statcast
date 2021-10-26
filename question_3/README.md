
![alt text](https://github.com/mserna/angels-exercise/blob/master/part1.gif)

![alt text](https://github.com/mserna/angels-exercise/blob/master/part2.gif)


Requirements
- This application uses React and Node to run
- Dependencies include:
 - npm (Node Package Manager)
 - Python 3.8 (API Service)
 - Browsers - Edge, Chrome or Firefox (has not been tested with Firefox)
 - localhost:3000 (Port 3000 must not be used during application as application uses port to run)
 - localhost:5000 (API service)

Using the App
 - To use, click upload file to upload devtest.csv file
 - The dashboard will load the data in memory and will then provide league information about pitcher leaderboards
 - The user can search and drilldown to a specific pitcher and find out how they compete against other pitchers around the league and division

Run from Command Line:

Run Backend service:
- Run `pip3 install -r requirements.txt` - installs required modules
- Run `python3 api/api_service.py`
Optional:
- Run on docker using commands:
- cd into api/ folder
- `docker build -t api_service .`
- `docker run -dp 5000:5000 api_service`

Run FrontEnd app:
- Run `npm install`
- Run `npm run start` or `npm start`
- It will launch a browser to run application

Installation:
- Run `npm install`
- Run `npm run build`
- This will create a local build folder in the repoository

Node compatible and tested version: `v15.4.0`

Breakdown of project:
The first thing I did was look at the data in devtest.csv. I needed to see what kind of data was presented to me. After seeing it was pitcher data, I then decided to create user needs and requirements. 
This helped me visualize a path to code against. Since this0 question was "open-ended", I decided to create an app I would like to use, given a dataset of pitchers.

I drew out a simple design consisting of two pages. The first page, the homepage dashboard was a dashboard of top 10 lists based on different catogeries. This included strikeouts, ERA, wins, etc.

The second page was a drill down page, consisting of the pitchers bio, his pitches amongst other pitchers (average) in the league, division and team.
This page also contains charts on their pitches vs other pitchers average.

Now that I had an idea, I wanted to choose the web framework to get this coded. I had two in mind: Python using Flask and React/Electron in NodeJS. I decided to go with NodeJS as I wanted to I liked the styling in React more. I could have used Matplotlib and numpy to get it done with Python as well, but felt I had a good baseline with React given my previous projects.

I was able to implement a simple API service so that the App did not have to rely on a user ingesting a CSV file.
The API is very simple and delivers the data over to the frontend application.
Ideally, I would add all the heavy logic in the backend as well.

I had some time before the 11:59pm deadline so I thought I'd give it a shot


