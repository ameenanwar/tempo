
[[HTML AND CSS]]


# basic code:
![[Pasted image 20250617002312.png]]

# # # # codes to send an entire folder;

app.use(express.static(path.join(__dirname,'public')));//THIS IS FOR USING DIFFERENT FILES IN A FOLDER NAMED PUBLIC



###
this for the use of values within the url or request
![[Pasted image 20250617002753.png]]





# Routes, Routers and joining file systems


.)different sets of requests and the code for sending files can be served in a seprate file from the main app file.
.)this is done to divide the app into modules implemenitng modularity
.)this is the code


![[Pasted image 20250618105755.png]]
.)this is the file system and folder structures

,)in routes folder, there is a blog file which contains the routes for the different files related to the blog., from here,in the main file we can import the different routes needed.


routes->blogs.js:
![[Pasted image 20250618110002.png]]

blogs->index.js(main file);
![[Pasted image 20250618110052.png]]
this will import the routes from the blog.js file and impleemnt it here.


###Note:
we use express,static to use files within a seperate folder and express.Router() for using different routes with in a file.


# express-handlbars


.)used for the easy rendiering of files and managing those files.


.)a default file structure need s to be followed:

![[Pasted image 20250618125237.png]]

.) #layout: should include the main.handlebar file
.) #views: should include the file that we are going to render


.)in the app file, we need to import the express-handlebars
.)then
```
app.engine('handlebars',hb.engine());

app.set('view engine','handlebars');// this is responsible for asking the handlebar engine to be in action when the render keyword is used


```
.)when the folders are named something else instead of the default name views/layouts..,we can do this:
```
app.engine('handlebars',hb.engine({

layoutsDir:path.join(__dirname,'templates/layouts'),//instead of view we use templates*

defaultLayout:'main'

})

);

app.set('view engine','handlebars');

app.set('views',path.join(__dirname,'templates'))






```

![[Pasted image 20250618223459.png]]
