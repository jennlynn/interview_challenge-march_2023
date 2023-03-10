# Reverie Interview Challenge by Jenn Rabin

Wow, the time really flew by! I did not get to the scatter chart or histogram, and there are still a few things I wish I could have fixed, but I finally managed to "put my pencil down"... **Welcome to my CHEMBL App!**<br />
<br />
_Note: For best experience, I suggest viewing it in Chrome or Firefox._
<hr />

## To Use
Enter `CHEMBLID` in the search field to display information below. 

Under the hood this is a `create-react-app` app with Docker, so the typical scripts will work with this repo.

### scripts
 | | |
 |---|---|
 | `npm start` | Runs the app in the development mode. <br /> Open [http://localhost:3000](http://localhost:3000) to view it in your browser. |
 | `npm test` |  (note: I did not write tests given the time constraint) <br /> Launches the test runner in the interactive watch mode. <br /> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. |
 | `npm run build` | Builds the app for production to the `build` folder. <br /> It correctly bundles React in production mode and optimizes the build for the best performance. <br /><br /> The build is minified and the filenames include the hashes. <br />Your app is ready to be deployed! |
 | `npm run eject` | **Note: this is a one-way operation. Once you `eject`, you can't go back!** <br /> <br />If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. <br /><br /> Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. <br /><br /> You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it. |
 | `npm run docker-build` | tells Docker that it should look for the `Dockerfile` in the current directory. |
 | `npm run docker-run` | starts the container |


## Approach
- I started with some research. I primarily focused on ChEMBL and tried to understand the shape and relationship of the data. I also spent a little time looking more generally at how others go about visualizing similar data. I considered reaching out to a Chemist friend, but thought that was overkill.
- I (tried to...) put myself in the shoes of a Scientist using the app and tried to think about what the most important functionality is, and what might enhance the UX of the app. Some thoughts I had here were:
  - search history (browser cache based, to avoid excess complexity)
  - possibly a predictive search, unclear if that's helpful here though
  - ability to save searches
  - ability to sort/ filter returned data
  - popover feature that could provide additional information and helpers throughout the page
  - ability to easily copy and share data returned
- I made a quick sketch and built the basic UI .
- I talked through my plans with a friend a fellow SWE to make sure I was on a good track.
- I looked at the ChEMBL API to figure out which `GET` request I needed, and which fields I would need for the calculations. Then I added the `axios` request. 
- At this point I was running low on time but wanted to complete the challenge, so things take a scrappy turn...
  - I used a `ChatGPT` assist to get the stat calculations. (I can do it easily in plain math, but it's trickier in JS, haha)
  - I found examples of Molecular Structures in `rdkit-js`'s GitHub so I just used [that](https://github.com/rdkit/rdkit-js/blob/master/examples/react/src/components/MoleculeStructure/MoleculeStructure.js).
- Then I did a quick round of testing, and quick code review. 
- Finally I set up Docker and pushed the repo up to GitHub and set it up with GitHub Pages. And since that requires a public repo, I tried to obfuscate the name a little so it wasn't easily discoverable for future candidates.


### Decisions Made:
| Decision                    | Reason        |
| ---                         | ---           |
| used `create-react-app`     | speed         |
| used `hooks` for state      | I am comfortable with them and find them easier, but it did slow me down a little when some plugins weren't easily compatible |
| didn't use `TypeScript`     | for a small project with a tight time limit, this level of complexity seems unnecessary |
| used `Bootstrap`            | saves a lot of time fiddling with basic elements |
| used `Axios`                | nice, simple HTTP client for getting the data, easy for JSON, good error handling, great docs |
| used `react-simple-popover` | lightweight, hooks-compatible, clear docs |
| used `RDKit`                | per recommendation
| used `GitHub Pages` | because I'm familiar with it and it will allow me to share a useable app with the Reverie team, since I didn't build a backend this seemed as good as Docker/AWS |



## Challenges
- Unfamiliar data (shape and handling) - This took up *much* more time than I expected. It would have saved time if I could have sat with someone to go over the data initially. In retrospect I wish I had reached out with questions, but at the time I kept feeling like I was close to figuring it out (classic!).
- Getting my prototyping feet back under me. Most of the prototyping I've done was within one company's environment, so there were several points in this project where basic things simply didn't work the way I expected and I'd have to investigate/pivot.
- Trying to remember that it's ok to be scrappy; it doesn't necessarily need to exemplify best practices. 
- Resisting the urge to fine tune the UI, add interactions, etc. Since this is the part I'm most passionate about, it can be hard to set aside.

## Conclusion
What a whirlwind! I'm happy enough with how it looks and works, but of course there are many things I would like to continue tinkering with. If I could do it over, I would have focused on the data first. At the beginning I severely underestimated how tricky that was going to be. 
<br /> <br />
After years of working within a specific environment and focusing primarily on best practices and readability, I found it hard to get in the scrappy mindset at first. Throughout the challenge I had to remind myself to let go of the details and keep moving, but once I got into it I started to remember how exciting it can be to move quickly.
<br /> <br />
I appreciate the opportunity to take a stab at this, it was a lot of fun and a great learning experience. Thank you!!

