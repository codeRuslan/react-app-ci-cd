Git Flow - was chosen as the main branching workflow for this project, even though The master/develop split is considered redundant and makes the  Continuous Delivery and the Continuous s Integration harder and Git history becomes unreadable, it is a clean state of branches in the life cycle of the project and it is simple with overall being considered the most known workflow - helped me to choose it as a workflow for this project. Let’s talk about the overall structure of CI/CD: Once the feature is pushed to develop branch it will go with workflow to check the formatting and to run tests. Once it finished workflow, somebody on a team of this project will review and approve it to be merged into Develop branch. Once in a Develop branch - a new workflow will be executed, where once more test and code formatting will be checked, while also code will be deployed to some staging server (in our case it will be completed with Surge). Once we have enough features in Develop branch we will open a pull request to push code to the master branch. And here Code checks and formatting checks will be run one more time, and then after the code landed in the Master branch, the workflow will be run once more - to conduct all final checks and deploy into code of the team into production. Also, to prevent developers from messing up versioning numbers or not writing conventional commits. I have added some additional plugins from the semantic release to help with it.

[![2022-09-27-19-48-46.png](https://i.postimg.cc/zBmdTXn2/2022-09-27-19-48-46.png)](https://postimg.cc/SXr7h41c)

As a Disclaimer, the following should be mentioned. That branch protection is turned on, to prevent developers to push code right into Develop or Master branches. While you could notice, that in git history - it has some pushes into the Master and Develop branch - it is important to know that it was done for testing purposes and was closed, therefore in the usual work environment - branches will be protected. Also, all tokens, secrets, and sensetive information has been uploaded into secrets in Github, therefore all sensetive information has been hidden for protective reasons. Also, the main technical components are mentioned down below:

- NPM as the package manager 
- Surge as a fast deploying tool for React App
- Prettier for formatting rules 
- CodeCov to upload code coverage 
- Different Commit Linters 

----

## If-Statements and notification features in CI/CD

Also, worth to mention that CI/CD should have some vital functionality for communication with an item, in case of any emergency or important information. In this project, if a Job Failure happens - then the new issue will be created and formatted automatically, after the issue is created, this CI/CD has integration with Slack - therefore message will be sent to Slack Channel. Finally, if a release is created - all developers should be notified about it - therefore bot will send a message to the Slack dedicated Channel for releases.

[![2022-10-01-19-42-35.png](https://i.postimg.cc/Y24xtZj1/2022-10-01-19-42-35.png)](https://postimg.cc/XXb582fJ)
## Detailed overview of CI/CD pipeline

Let’s talk about everything in more detail, so once the feature is pushed into Develop branch, the workflow will be run - it will install all required dependencies, check code formatting, run automated tests, upload code coverage as an Artifact and it will cache dependencies. Once feature has landed into Develop - and if someone opened a pull request into Master Branch, the workflow will run one more time - it will conduct all previous actions, while also building the project and deploying it to the staging server  (in this project Surge is used for this purposes). Once the team has gathered enough features and decided to get code into the production stage (Master branch in this case) - all tests will be run one more time and also code coverage will be uploaded. After, all code has gotten finally into the Master branch all checks will be redone, while also code will be deployed to the production server and a Release will be automatically created.
### Moving feature into Develop
[![2022-09-27-20-09-47.png](https://i.postimg.cc/3JYYh3DT/2022-09-27-20-09-47.png)](https://postimg.cc/Jt69cVq6)

### Moving from Develop into Master branch
[![2022-09-27-20-10-04.png](https://i.postimg.cc/FFPDrZYH/2022-09-27-20-10-04.png)](https://postimg.cc/PNwmK1bg)
