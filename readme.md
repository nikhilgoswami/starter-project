
In this project we will learn bunch of new things like
sass ,nodejs, jekyll , jade(pug) & gulp etc to use modern way of coding wesites!

Project setup on windows

*	1 install git bash from git-scm.com (while installation install with unix or linux features it was third
option with my version )
*	2 install ruby installer for windows s
*	3 set up ruby development kit from official website http://rubyinstaller.org/
*	4 install python I used version 2.7 and set path variable in windows environment variable '
;C:\Python27 '.
*	5 now open bash terminal for project directory and use following commands

        a.	gem install jekyll

        b.	gem install pygments.rb

        c.	gem install redcarpet

        d.	npm install -g gulp

        e.	npm install pug or npm install pug --save-dev

        f.	npm install gulp-sass --save-dev

        g.	npm install browser-sync gulp --save-dev

        h.  npm install --save-dev gulp-autoprefixer

        i.  npm install jekyll

        j.  npm install gulp-jade

        k.  gulp jade



        After this you can use 'npm install' to check and install any other remaining dependency for your project.

        Finally on bash project directory use 'gulp --watch' this will open browser nodejs server at localhost:3000 deploying pages from _site directory generated in your project folder and when you make changes in your sass and jade file's they will be reflected in your server site on save gulp server will also refresh your browser Hope this helps thank in advance for using my setup!
