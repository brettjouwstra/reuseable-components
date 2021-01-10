## Reuseable Components
Modals, Upload Scripts, etc. that can be re-used project to project

#### Pure Javascript Modal

Create a button to show the modal and another to close/hide it. All created with pure JS. 

> Based on a [DevEd](https://developedbyed.com/) tutorial 


#### Jinja2 Template

The generic template I use to extend the "base.html" file. Includes two scripts sections one that calls super() and one that does not. This shouldn't be necessary but it's available anyways. 


#### Tag Cloud

Creates a word cloud based on a collection of words provided. Clicking on one of the words will do a search for it based on the url provided.

For example to search Google use the URL `https://www.google.com/search?q={{ x }}` 

> Uses [jQCloud](https://mistic100.github.io/jQCloud/)


#### File Upload with Ajax

Allows multi-part uploads using AJAX. 

> Uses [Simple AJAX Uploader](https://github.com/LPology/Simple-Ajax-Uploader)