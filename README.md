# CU Blueprint Official Website
This is the second repo of the website.
Used PUG:dog: for saving time and increasing reusibility of html codes.

## Getting started
1. Clone this repository
2. Make sure that you have npm and nodejs installed on your computer
3. Run `npm install` to download all the dependencies
4. MAKE CHANGES
5. Run `npm run devStart` to compile pug into html
6. Check compiled html in `deploy` folder 

## Tools that are useful
- pug-cli compile commands
    - https://github.com/pugjs/pug-cli
- converting html to pug
    - https://html-to-pug.com/

## How to push to Github repository
:warning: please make sure that you are **pulling** from this repository before making any changes
0. `git pull`
1. `git add .`
2. `git commit -m 'some meaningful message'`
3. `git push`


## How to deploy
1. Run `npm run beforeDeploy` to compile pug files into static html files and compress images.
2. Deploy files located in `/deploy` directory

### For any server related questions please contact Hamza, the server master
### For any inquiry about using pug please contact Jeeheon