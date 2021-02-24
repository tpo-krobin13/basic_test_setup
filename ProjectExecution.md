## For those who choose to take it on

## Create a team of 3-4 people
You get to choose. You can be in or out. Working in the team structure will allow you to cover more in a shorter amount of time and focus on areas where you wish to deepen your knowledge. 

Are any of the following familiar considerations?

- Showing your code in front of others
- Needing to get past this project so you can breath
- This not being the right time
- Being slower than everyone else
- Your code not being as good as everyone else
- Worried about what others will think about your time/code/neatness/slopiness....

Each one of you will absolutely operate in teams without question. The opportunity now is to determine how best to create strategies to deal with these issues ongoingly. Unfortunately, these considerations don't disappear. They go with you anywhere you code. Let's discover some strategies to mitigate this and uncover the developer you really are. 

## Suggested process
### Set up a meeting to discuss the cards stories for the sprint (planning meeting)  1 hr
During this session, you want to understand each story. Invite Ken to this meeting.

What does the story require? You can talk, sketch, diagram or whatever to dentify what it means and how to implement it. How much work is it? How will you demonstrate the work is complete? Your team decides.

Who will work on what to start? Do you want to mob it? Paired program it? Up to you. 


### Set up a TDD session with your team 1 - 1.5 hrs
TDD will only be required for three functions. Not all of the code. Choose which three out of all the stories. You can also use the Invite Ken to your TDD.
Suggestions:
- config returns a configuration
- A maximum of 24 images are returned
- Requested photo has the correct information
- Empty search returns flag or message
- For other options, check out [How You'l be Graded](https://teamtreehouse.com/projects/react-gallery-app#how-you-ll-be-graded)



### Check your code in regularly and pull the work down regularly 2 min
Check code in regularly every time something is finished and working. Pull/fetch work regularly. As you complete small pieces. Call Ken immediately with any questions or concerns. 


### Meet with team members as needed to get support and complete work ???
Keep each other moving and work together. 

### Set up time to demo what you've completed 15 min - 1 hr
Be sure to clarify what the demo will include at the initial planning session, you can write it on your card


### Submit your work for peer review 15 min 1 hr
Get and adjust the code


### Submit your indivdual work
Create your own personal repository. Add the code and submit

### Questions?
Is this mandatory? - No

How will TDD be implemented? - We requiring only three tests that support the three things which you chose to complete with TDD.

Update progress at the standup (all of Coders Anon) and report progress


Can we mob/pair program on our work? - Yes that is encouraged

Week 8 One-on-Ones? - Next week's one on ones will still be available by choice and will not be mandatory.


## Suggested Stories in priority

As a developer, I can execute at least one test for each one of the stories using npm test.

First Test is Mocha sanity test: (reference) https://github.com/tpo-krobin13/basic_test_setup

------------------------------------------------------------------
As a team member I have a working project repository to install the project from 
- [ ] Git accessible by the team
- [ ] Built using create-react-app
- [ ] Includes react, react-dom, react-router-dom
- [ ] Module to grab remote data (fetch,Axios,?)
- [ ] Includes mocha, chai --save-dev
- [ ] Ensure npm test executes test suite with sanity check
- [ ] Ensure npm start loads base application
- [ ] Add a config file that can store and retrieve a Flickr API Key (test this)*
- [ ] The config file should be added to .gitignore 

refer to instructions 2, 4, 5 (routing)

------------------------------------------------------------------
As a user I can view the main application components in my browser
- [ ] Includes Photo Component
- [ ] Includes Nav component
- [ ] Includes NotFound component
- [ ] 404-like error page **
- [ ] Includes search form
- [ ] Includes photo container
- [ ] Includes base routes to pages
- [ ] Includes a 404 not found error rout ***
- [ ] Includes 3 default topic links  on the photos page
- [ ] I can use the browser forward and back button to navigate history**

refer to instructions 3 & 5
** refer to exceeds instructions 1 & 2

------------------------------------------------------------------
As a user when I load the app, I can see retrieved flikr data available when I click any of the 3 default topic links
- [ ] The data is retrieved using Fetch/Axios/etc
- [ ] The data is stored in and retrieved from a higher level component like 
- [ ]  Data can be retrieved on image  pages
- [ ] At maximum, 24 images display on a page
- [ ] Each item has a key property

refer to instruction 8 & 6

------------------------------------------------------------------

As a user I can enter in a term in the search field and receive new search categories of images
- [ ] Includes retrieving data with filckr
- [ ] Includes displaying data
- [ ] Loading data indicator displays as data is being remotely fetched **
- [ ] if no match is found display a friendly error message**

refer to instruction 7
** refer to exceeds item 3 & 4
