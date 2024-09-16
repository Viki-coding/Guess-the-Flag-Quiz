FLAGS OF THE WORLD QUIX
Introduction
This quiz is a fun, educational easy to use quiz.  It tests the user on their knowlege of flags from accross the globe. 

Description - Project Purpose
The game is designed to give the user a fun interative method to test their knowledge on flags and learn some new flags from countires accross the world.

User Demographics - Target audience
The target audience spans various ages and users, helping kids get to know their flags and testing adults on how many flags they really know.  A countries flag demonstates strong emotive feelings and it is important to have respect for everyones background and heritiage. Many younger people watching the Olypics saw how proud participating nations are when their athletic takes part and the use of supportive flags on victory laps and the rising of an athletics flag during a medal presentation demonstrates how important the meaning of flags are to a nation and their people.  This quiz aims at being a fun interactive quiz within a family setting and at school.

UX
Site Goals: First Time users will find the site intuitive and easy to navigate. The site provides the user with what they expect:

Instructions of how to play
Prompt the player on a clicking an answer
Immediate feedback of whether an answer is correct or not.
A tally of the score as they progress
Provide a final tally of score.
Provide the opportunity to reset the game to have another go. 

USER STORIES
As a user I want to log into the game easily and view what I need to do easily and quickly without having to signup.  As a user I want to visually see the flags and answers clearly, to understand that the mouse cursor changes when I hover over and answer giving me feedback that I need to click on my guess.  As a user when I click I want to get an indicating if my choice has registerd by changing color and I want instant feedback whether my chosen guess is correct or not.  As a user I would like to see my correct scores tally up.  As a user I would like the quiz to be fun, interactive, challenging and quick.  As a user I would like to play this game with friends and family to compare scores with each other to have some fun. 

Design Choices
Color Scheme
This is a fun, relaxing game for all the family, we choose calming green and pastel shades, we kept the design clean and uncluttered making it easy in insuative to navigate. 

Using a color contrast checked we checked which font colors stood out best against our base colors.  All receiving good ratings. Graphic illustrated below:

Typography
We used the font Comic Neue which use a Sans Serif which is good for accessibility and is a dyslexia friendly font. We feel it looks fun and is clear and easy to read and add a sense of fun to the quiz.

Wireframes
We created a wireframe using Balsamiq to plan out the structure and style of the app. We spoke with some potenital users of the game during the testing pase to gain their insight and views. This was the beginning of our design journey, as we progressed with the design we made some changes to the actual page. During this planning phase we researched the fonts and background colors and text colors that would be most suitable and gained user feedback.

Picture below of WIREFRAMES

Instructions Area
Quiz Area
End Game & Results Area

FEATURES

The Instructions Area is a nice clear, easy to read set of instructions. 
<img width="996" alt="Screenshot 2024-09-16 at 15 10 56" src="https://github.com/user-attachments/assets/858dc2d1-4e17-4125-9c40-c60dfa2fcdbb">



<img width="1150" alt="Screenshot 2024-09-16 at 15 11 07" src="https://github.com/user-attachments/assets/166f8dd1-e6ae-461f-a98f-7d94a3abd6a8">
<img width="1150" alt="Screenshot 2024-09-16 at 15 11 07" src="https://github.com/user-attachments/assets/166f8dd1-e6ae-461f-a98f-7d94a3abd6a8">

Quiz Area
The quiz area display the numbner of questions in the quiz and keeps a  tally of correct scores as you progress through the game. 
**Picture belows
<img width="1187" alt="Screenshot 2024-09-16 at 15 10 47" src="https://github.com/user-attachments/assets/7a11e7ee-f66f-4887-8f38-110247663953">


<img width="1175" alt="Screenshot 2024-09-16 at 15 11 42" src="https://github.com/user-attachments/assets/93372ab6-c503-43ae-87fd-ee05248584ad">




Interaction Points
The user interacts with the quiz by visually looking at the flag, using their mouse the cursor changes to a hand when hovering over the potential answers giving them the feedback to choose one.  Once an answer is clicked the user gets feedback with a color change that it is selected and then another color change to let them know if the answer is right(green) or wrong (red). Then the next flag and answer options are introduced to keep a nice steady pace on the game. At the end of the quiz the users score is displayed with their incorrect/correct results and the user can click on the RESET button to load the quiz again. 

Future Implementation Section
* A drag and drop of the flag to the correct box would be fun to create and a nice user experience to keep them engaged.
* Have a larger section of flags from world using an API database.
* Have different choices of flags to choose from, Europen, Asia etc.
* Have differnet levels of difficulty.


Accessibility
Aria labels used to describe the content for screen readers and other accessibility tools. Colors are suitable for people who are color blind and sans serif text suitable for people with dyslexia. We used coolers to ensure our background and contrast colors worked efficiently and clearly. After running our deployed site in incognito mode using Lighthouse we identified ?????


<img width="1399" alt="Screenshot 2024-09-16 at 17 21 19" src="https://github.com/user-attachments/assets/6e738e76-1ac6-406e-bf99-f05ee69d67d2">


Technologies Used
HTML and CSS and JS

Frameworks, Libraries and Programs Used
Balsamiq Wireframes - used to create wireframes
Git - version control
Git Pod
Git Hub - To save and store the files for the website
Google Fonts - to import fonts onto the website
Font Awesome for iconography on website
Favicon.io - to create favicon
Coolors - checking colour pallets and their contrast abilities with fonts.
Berme.net - to reduce image sizes and convert to .webp
Canva - to create logo image

Manual Testing
We performed manual testing on the site and also ran our html, css and js codes through validators.

W3C Validator
HTML code on all pages passes through the official W3C validator with no issues.
HOME Page - 3C Validator Test:


CSS (Jigsaw) validator
CSS code passes through the official (Jigsaw) validator with no issues

Quality Assurance
We took a systematic and structural approach to manually test each page to ensure it functions correctly and to help identify potential bugs. We created a specific testing template to ensure and re-check all pages were working correctly as specified with expected and actual outcomes using a methodical approach.

Test Evaluation Sheet:

| QUIZ PAGE          |    | Feature                                                                                                                                             | Test Performed                                                                                                        | Expected Outcome                                                                                                                    | Pass / Fail |
| ------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|                    | 1  | Entice user to move over instructions button - enlarge text on hover & change cursor to hand.                                                       | Mouse passed over instructions button.                                                                                | Cursor changes from arrow to hand. Text enlarges within button when mouse hover over it.                                            | TRUE        |
|                    | 2  | Instruction list expands when button is clicked                                                                                                     | Click on instruction button.                                                                                          |  When clicked, instructions expand.                                                                                                 | TRUE        |
|                    | 3  | Instruction list shrinks when button is clicked                                                                                                     |  Instruction button clicked again.                                                                                    | When instruction button clicked again the list is hidden.                                                                           | TRUE        |
|                    | 4  | Entice user to select a country by changing the mouse cursor to a hand                                                                              | Rest  mouse cursor over potential answers  and observe change of cursor.                                              | Mouse cursor changes from arrow to hand.                                                                                            | TRUE        |
|                    | 5  | When answer is selected the box changes colour to show selection is registered.                                                                     | Click to select answer and observe colour of  selected button                                                         | Selected button changes colour from white to yellow.                                                                                | TRUE        |
|                    | 6  | When answer is selected the box changes colour to show selection is registered and then either changes to red or green depending if correct or not. | An answer is selected to observe if the (a) The colour changes on selected (b) Colour changes to either red or green. | Answer selected, changed to yellow then changed to green as it was correct.                                                         | TRUE        |
|                    | 7  | If answer is correct colour changes to green                                                                                                        | Click on a correct answer and observer colour                                                                         | Selected answer changes from yellow to green.                                                                                       | TRUE        |
|                    | 8  | If answer is incorrect colour changes to red                                                                                                        | Click on an incorrect answer and observer colour                                                                      | Selected answer changes from yellow to red.                                                                                         | TRUE        |
|                    | 9  | If answer is correct - it should add 1 to the Correct Scores area                                                                                   | Answer 3 questions correctly and 1 incorrectly                                                                        | Score board indicates I have 3 correct                                                                                              | TRUE        |
|                    | 10 | No answers correct                                                                                                                                  | Answered all questions incorrectly and observe score area                                                             | Score board indicates null                                                                                                          | TRUE        |
|                    | 11 | After 5 questions - score page should display score and rest button, but not instructions or running score area.                                    | Answer 5 questions and observe what screen is displayed                                                               | End of quiz with score results shown is displayed, instructions and running score are not displayed.                                | TRUE        |
|                    | 12 | Check score counter is calculating correctly.                                                                                                       | Answer 5 questions correctly                                                                                          | Result is Correct Ans: 5 / Incorrect: 0                                                                                             | TRUE        |
|                    | 13 |                                                                                                                                                     | Answer 5 questions incorrectly                                                                                        | Result is Correct Ans: 0 / Incorrect: 5                                                                                             | TRUE        |
|                    | 14 |                                                                                                                                                     | Answer 2 questions correctly and 3 incorrectly                                                                        | Result is Correct Ans: 2/ Incorrect: 3                                                                                              | TRUE        |
|                    | 15 |                                                                                                                                                     | Answer 1 questions correctly and 4 incorrectly                                                                        | Result is Correct Ans: 1/ Incorrect: 4                                                                                              | TRUE        |
| GAME RESET         | 16 | Click on reset to reset game                                                                                                                        | Click on the reset button at the end of the quiz                                                                      | Quiz is re-set and starts again                                                                                                     | TRUE        |
|                    | 17 | On reset - different flags in random order is displayed                                                                                             | Play game twice and document country flags displayed                                                                  | Game 1: India, Iceland, New Zealand, Romania, Palestine.   <br><br>Game 2: South Korea, Australia, Iceland, New Zealand, Palestine. | TRUE        |
|                    |    |                                                                                                                                                     |                                                                                                                       |                                                                                                                                     |             |
| Spelling / Grammer | 18 | QUIZ Game Page                                                                                                                                      | Text checked for spelling on ABC Webpage Spell-check                                                                  | No incorrect spellings                                                                                                              | TRUE        |
|                    | 19 | Score Page                                                                                                                                          | Text checked for spelling on ABC Webpage Spell-check                                                                  | No incorrect spellings                                                                                                              | TRUE        |
|                    | 20 | READ.me                                                                                                                                             | Text checked for spelling                                                                                             | No incorrect spellings                                                                                                              | TRUE        |
As shown in the evaluation sheet above we navigated around our site and tested all available options to ensure they were working as intended.

Lighthouse Testing
Incognito lighthouse testing was completed on all pages with excellent results ensuring optimal page loading times:

Quiz Page - Lighthouse Testing
Results Page - Lighthouse Testing

BUGS
Solved Bugs



User Experience Assurance
We want to ensure the end-user has a smooth experience and addressed any potential issues by testing and fixing any bugs on the site. Testing was on-going throughout the build. We used Chrome development tools while building to pinpoint and troubleshoot any issues as we progressed. Each page has been inspected using google chrome developer tools and Firefox inspector tool to ensure each page is fully responsive on a variety of different screen sizes and devices. We tested the site on the following devices: apple iPhone 12 mini mobile phone, a Samsung Galaxy tablet and MacBook Pro for testing the site on various real time screen sizes. All tests responded and well with no bugs reported.

Deployment Steps
* The site is Deployed using GitHub Pages
* Login to GitHub
* Go to the projects repository (https://viki-coding.github.io/Guess-the-Flag-Quiz/)
* Click on Settings
* Select pages in the left navigation bar
* From SOURCE dropdown select Deploy from a Branch
* Under BRANCH from dropdown select Main Branch and SAVE
* The site is now deployed but may take a few minutes to go live.
* Return to CODE tab of Github repo and wait a few minutes for build to finish, refresh page. This will show on github-pages to see active deployments.

How to Fork
* Login to Github
* Go to Project repository
* Click the FORK button top right corner

How to Clone
* Log into Github
* Go to project repository
* Click on the code button, select what want to clone HTTPS, SSH or GitHub CLI and copy the link.
* Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory
* Copy 'git clone' into the terminal and paste the link you copied in step 3. Press enter.
  
Acknowledging Contributions & Credits
* We gained inspiration from these tutorial videos on youtube: https://www.youtube.com/watch?v=MkvHPOT4RS8
* How to HIDE and SHOW HTML using JavaScript https://www.youtube.com/watch?v=-oQnDrNzTTA.
* Hide and Show div using JavaScript | On Click Hide and Show Div[HowToCode School.com]
* https://www.w3schools.com/jsref/jsref_foreach.asp forEach method in Javascript to get inspiration fothe question/answers.
* https://www.youtube.com/watch?v=ml2N3APdoB0 How to revert to previous commits to source bug problem when none of my and questions would display.
* https://www.youtube.com/watch?v=JeXqaKeJSRI How to accept JavaScript USER INPUT in 5 minutes - Bro Code
* https://www.youtube.com/watch?v=JeXqaKeJSRI Local Storage Explained in 10 min - ProMaker Dev
* https://www.youtube.com/watch?v=QU6z69P5BrU interpreted how to the quiz choose random questions from the list.
*  https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp - code interpreted from W3 schools for instrutions button to tottle and display instructions. 
* https://www.youtube.com/watch?v=g_vXSKbfUiQ 'Learn JavaScript MOUSE EVENTS in 10 minutes!'
* https://www.youtube.com/watch?v=GfRgpXvqudM&t=23s 'How to create flag quiz game using html css and javascript | Flag Quiz App Front End With Salimi' code interpreted for structure of quiz game. 

Image by of Green Globes in background by Clker-Free-Vector-Images from Pixabay
Flag images from pixabay
Image of logo created in Canva using canva template. 

We gained some inspiration from the CI instruction videos for the 'Love Maths' site.

We got help with the READ.me by watching the video 'Creating your first README with Kera Cudmore' on CI Chanel Lead Library on YouTube and also the video with Lane-Sawyer Thompson on CI Channel on YouTube. Thanks to the on-line tutor, Tom and Sean for their expertise and ability to explain some of the 'challenges' I encountered. Thanks our very supportive and positive facilitator Laura Maycock and our new facilator Kay and my Kiwi mentor Dick Vlaanderen. Also found the webinar 'Community Q&A: How to Troubleshoot with Lane-Sawyer Thompson' very helpful approach to how to view looking at the site for bugs and methodically identifying issues.

CONTENT The content text for Flags of the World quiz is written by Viki Mulhall. 

Legal & Ethical Compliance
This project is for educational purposes only.
