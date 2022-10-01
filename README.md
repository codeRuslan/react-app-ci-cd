CI/CD Pipeline built for React App
======
## General overview of CI/CD pipeline 

Git Flow - was chosen as the main branching workflow for this project, even though The master/develop split is considered redundant and makes the  Continuous Delivery and the Continuous s Integration harder and Git history becomes unreadable, it is clean state of branches in the life cycle of project and it is simplicity with overall being considered the most known workflow - helped me to choose it as workflow for this project. Let’s talk about overall structure of CI/CD: Once feature is pushed to develop branch it will go with workflow to check the formatting and to run tests. Once it finished workflow, somebody on team of this project will review and approve it to be merged into Develop branch. Once in a Develop branch - new workflow will be execute, where once more test and code formatting will be checked, while also code will be deployed to some staging server (in our case it will be completed with Surge). Once we have enough features in Develop branch we will open a pull request to push code to master branch. And here Code checks and formatting checks will be run one more time, and then after code landed into Master branch, workflow will be run once more - in order to conduct all final checks and deploy into code of team into production. Also, to prevent developers from messing up versioning number or not writing conventional commits.I have added some additional plugins from semantic release to help with it.

[![2022-09-27-19-48-46.png](https://i.postimg.cc/zBmdTXn2/2022-09-27-19-48-46.png)](https://postimg.cc/SXr7h41c)

As Disclaimer, following should be mentioned. That branch protection is turned on, in order to prevent developers to push code right into Develop or Master branches. While you could notice, that in git history - it has some pushes into Master and Develop branch - it is important to know that it was done for testing purposes and were closed, therefore in usual work environment - branches will be protected. Also, all tokens, secrets, sensetive information has been uploaded into secrets in Github, therefore all sensetive information has been hidden for protective reasons. Also, main technical components mentioned down below:

- NPM as package manager 
- Surge as fast deploying tool for React App
- Prettier for formatting rules 
- CodeCov to upload code coverage 
- Different Commit Linters 

----

## If-Statements and notification features in CI/CD

Also, worth to mention that CI/CD should have some vital functionality for communication with a item, in case of any emergency or important information. In this project, if Job Failure happens - then new issue will be created and formatted automatically, after the issue is create, this CI/CD have integration with Slack - therefore message will be sent to Slack Channel. Finally, if release is created - all developers should be notified about it - therefore bot will send message to Slack dedicated Channel for releases.

[![2022-10-01-19-42-35.png](https://i.postimg.cc/Y24xtZj1/2022-10-01-19-42-35.png)](https://postimg.cc/XXb582fJ)
## Detailed overview of CI/CD pipeline

Let’s talk about everything in more details, so once feature is pushed into Develop branch, workflow will be run - it will install all required dependencies, check code formatting, run automated tests, upload code coverage as an Artifact and it will cache dependencies. Once  feature has landed into Develop - and if someone opened pull request into Master Branch, workflow will run one more time - it will conduct all previous actions, while also building project and deploying it to staging server  (in this project Surge is used for this purposes). Once team has gathered enough features and decided to get code into production stage (Master branch  in this case) - all test will be run one more time and also code coverage will be uploaded. After, all code has gotten finally into Master branch all checks will be redone, while also code will be deployed to production server and Release will be automatically created.
### Moving feature into Develop
[![2022-09-27-20-09-47.png](https://i.postimg.cc/3JYYh3DT/2022-09-27-20-09-47.png)](https://postimg.cc/Jt69cVq6)

### Moving from Develop into Master branch
[![2022-09-27-20-10-04.png](https://i.postimg.cc/FFPDrZYH/2022-09-27-20-10-04.png)](https://postimg.cc/PNwmK1bg)
