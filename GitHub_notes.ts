// This are my notes on GitGitHub Master class

git config --global user.name "Vishal Pawar"          // configure name for automation
git config --global user.email "vpawar@argusoft.com"    // configure email id

git remote add origin https://github.com/vpawar-argusoft/GitGithubMasterclass.git  // Add folder to GitHUB

git add GitHub_notes.ts  // Add file to github
git commit -m "Add typescript file" // Commit file added to Github


// to push data from git to github
git push origin master


// To configure main code editor
git config --global core.editor "code --wait"        

// This command is used to pull data from GitHub
git pull origin master

// This command is to automatically pull data from GitHub 
git branch --set-upstream-to=origin/master master
//  Now only use
git pull