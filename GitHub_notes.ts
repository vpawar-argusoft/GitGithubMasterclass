// This are my notes on GitGitHub Master class



Section 1 - Getting started with Git


git config --global user.name "Vishal Pawar"          // configure name for automation
git config --global user.email "vpawar@argusoft.com"    // configure email id
git config --global core.editor "code --wait"  // To configure main code editor   

  8. Executing a first commit 
    1. create repository frist by changing directory -- cd -- where we need to create files
    2. create needed file exa. index.html
    3. make respective folder as git folder -> get init // by initialising git 
    4. by using (ls -a ) // we can see hidden+non hidden files for respective loation
    5. git add index.html // To add file in repo
    6. git commit -m "given message " // commit by adding message 

  10. Reviewing file changes by (git diff index.html)



Section 2 - Getting started with GitHub


    12. Diff in git and GitHub
    13. Create your account    

    git remote add origin https://github.com/vpawar-argusoft/GitGithubMasterclass.git  // Add folder to GitHUB

    git add GitHub_notes.ts  // Add file to github
    git commit -m "Add typescript file" // Commit file added to Github

    14. Push Your local repo to Github

    git push origin master // to push data from git to github

    15. Editing code and commiting from gitHUb

    16. Pulling from remote 

    git pull origin master // This command is used to pull data from GitHub

    git branch --set-upstream-to=origin/master master. // This command is to automatically pull data from GitHub 

    git pull  //  Now only use instead of above 2 commands

    17. Check changes with git status 

    git fetch //sync from github to local git
    git status //check status after sync
    git pull 



Section 3 - Fork and clone

19. Cloning the repository 

  1. mkdir <filename> // make folder/file 
  2. dir -> see where your pointer is
  3. clone the file by -> git clone <site link of your forked repo>
  4. git remote -> check whether pointer is assigned at origin 
  
20,21  Exploring git log and file details from git
  1. git log // will give you changes last made or commits till date
  2. git diff 284cdd63 3a7fa138 // will give diff in 2 commits change log // you can use first 8 digits of commit id
  3. git show HEAD // give info about most recent commit
  4. git show 284cdd63 // give info about particular commit, it is merge of (log + diff)
  5. git show HEAD~4 // give info of 3 commits before head commit
  6. git diff HEAD~2 HEAD~7 // no need to know commit id
  7. git annotate gulpfile.babel.js  // give info about particular file changes -- who,what,when changed

22. Exploring log and file details from Github
23. Undoing changes and reverting commits
  1. git checkout --<filename>. // use to revert before file is staged/added+pushed to github
  2. git rseset HEAD --(and then after it use) --> git checkout --<filename>. // to revert back most recent file after file is staged/added+pushed to github
  3. git checkout 284cdd63 // to revert particular commit
  4. git add . // will add all modified files to git
  5. git checkout -- .  //will revert all recent changes
  
  
  
  
Section 4. Working with branches 
  25. Good version control practices - (dev->test->master)
  26. What is a branch? 
  27. Create a branch with git 
    1. git branch dev //creates dev branch
    2. git branch  // shows how many and what branches are in given repo and which is selected (shows * in prefix)
    3. git checkout dev // selects given branch
    4. git checkout -b add-bootsrtrap  // creates new branch + selects it 
  
  28. create a branch with github
  29. adding a gitignore file -> This ignore given folder/files and not include it in Github even it is present in local git repos 
    1. git add .gitignore //first add gitignore file in respective location
      1. /index.html // ignore given file
      2. text/ // ignore folder including all files in it
      3. text/*.txt // ignore only .txt files in folder
      
  30. Syncing branches 
    1. git checkout --track origin/test // setup to track remote test branch (added + switched to it)
    2. git checkout --track origin/<branch name> // it adds + selects branch from remote to local + tracks it
    
  40. Graph the branches on terminal
    1. git log --graph // checks how ,when branches merged
    
  41. Merging branches in terminal
    1. git merge <branch name which tobe addded> <branch name where prevous branch is being added> --> git merge a b
    2. git branch -d add-bootstrap // deletes given branch
    
  42. Pull request in Github
  

