# Todo App

by Edwin Wong


### Notes

For this project, I decided to use node + express, jquery, and jade.  For this small of a project, jquery was the best choice because it is simple to implement.  For larger projects, I would typically go with a more robust framework (angular, react, etc).

Stormpath for express was fairly simple to use. I mainly followed the template from the quickstart guide on your site.
The documentation on https://docs.stormpath.com is also straightforward.
The stormpath integration into the node project was also not too difficult. All I needed to do was load the express-stormpath module, initialize stormpath, and start the node server when stormpath is ready.  For routes that require authentication, I just added the loginRequired propoerty to the Get/Post.  Getting the user object is also as simple as adding the "getUser" property to the user router.

While I had some extra time, I took a look at stormpath for angular & express, and it seemed like there's a lot more work involved if I decided to include the angular sdk in the future.  There's a separate sdk to download, in addition to angular configuration changes like manually setting the locationProvider to html5mode, which could potentially affect all the routes in the app.

Overall, for express stormpath, it is quick to setup, and did not require too many changes to the pre-existing app.

### Issues

Originally, I had issues using jade for templating, so I built my own custom jquery based solution, but after learning more about the benefits (templating, node integration, code reuse), I decided to include it.  

I did notice an issue when an already logged in user visits the "todo list" page, the browser would make many login redirects and timeout.  I was only able to fix it by removing and reinstalling the stormpath module.  It could also have been a configuration issue on my part when I was initially setting up the server.

It would also be nice to have a troubleshoot area that lists common issues that developers have when installing stormpath.



### Run server instructions

1. Run npm install
2. Run node server.js


### Acknowledgement

#### [stormpath](https://api.stormpath.com/)
#### [jquery](https://github.com/jquery/jquery)
#### [express](https://github.com/expressjs/express)

