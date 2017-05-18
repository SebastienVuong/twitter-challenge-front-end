# Twitter front + back challenge!

For this challenge, we're going to implement a tiny twitter dashboard using HTML, CSS, JavaScript, NodeJS and the Twitter API.

Here is an example of what your project could look like once you're finished. Please note that this is only meant to give you ideas if you have none. Don't hesitate to go crazy :)

![example twitter challenge](http://i.imgur.com/ZxLcNmB.png)

## Operational instructions
To complete this challenge, start by forking this repo to your own GitHub account. Then, code your web app using your favourite environment. Once you are done, please submit your challenge as a pull request here.

Apart from the general requirement of producing a web app with AJAX, you are not required to use any particular framework, nor are you required to use a framework at all. You can do everything with `fetch` and `innerHTML` or go crazy with a React/Redux or AngularJS app.

:warning: **NOTE:** The Twitter API does not work using AJAX because it does not allow cross-domain requests. This is why you have to setup a NodeJS proxy server that will handle making the calls to twitter.

## Part 1
Using the framework of your choice, create a small web page with three columns. Each column will contain the latest 10 tweets from these accounts: @decodemtl, @reactjs, @nodejs.

Each tweet in each column should have the text of the tweet and the date/time of the tweet as "x y ago" like "10 minutes ago" or "1 month ago". In addition to that, clicking on the whole tweet should link to that tweet's page on twitter.com.

Finally, make sure that your columns are flexible so that they will work on any screen width. If the screen size is too small, maybe you don't want all three columns to display on the same row.

## Part 2
Keeping the same web app you created in part 1, give a way for the user to change the layout of the columns. Use HTML5 Local Storage to keep the settings across page loads.

For this exercise, you will have more latitude than for the first part. Here are a few things you could do for your edit layout functionality:

* Let the user change the order of the columns
* Let the user change the number of tweets from the default of 10
* Let the user change the twitter accounts that will be displayed
* Let the user add/remove twitter accounts from the list
* Whatever else you can imagine and have the time and patience to do

In addition to giving you the option of what to let the user configure, we are also giving you the choice of how to make the configuration. You can either do it in-place with drag/drop and text fields, or have a separate user interface to manage the layout.
