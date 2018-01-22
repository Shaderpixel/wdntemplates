# UNL WDN Templates

The template files are developed and maintained by the [Web Developer Network](http://wdn.unl.edu/) (WDN) at the [University of Nebraska-Lincoln](http://www.unl.edu/). These templates are made up of HTML, CSS and JS to power the underlying web presence.

## Template Usage

Template usage is subject to the [WDN Terms of Use](http://wdn.unl.edu/unledu-web-framework-terms-use).

### Templates Available

All templates variations utilize the same HTML markup, with an exception of the body class, ex: `class="document"`.

## Collaboration

All members of the WDN are invited to contribute to this project. Please make a fork of the [main repository](https://github.com/unl/wdntemplates) for local development. Once you have created and tested your code, please send a pull request to the main repository.

## Building Template Resources

Much of the template CSS and JavaScript is built using aggregators, preprocessors, and/or "minifiers". You can build a local copy of these resources with the following instructions as your guide.

The resources are built using a Gruntfile. The following tools are required to be installed.

* [Git](http://git-scm.com/) -- version control system
* [NodeJS](http://www.nodejs.org/) -- used to run the libraries that process and minimize LESS and JS files
* [Grunt](http://gruntjs.com) -- The Grunt CLI must be installed ( `npm install -g grunt-cli` ) in order to build.

Installing the additional resources necessary to build the system can be downloaded by running `npm install` from the project root.

Once all of the above dependencies are met, simply running Grunt `grunt` at the project root will build all resources. The following are all of the supported targets.

* `default` or `all` - builds all needed CSS and JavaScript
* `clean` - removes all built files
* `requirejs` or `js` - builds and minifies combined JS
* `sass` - builds all CSS files from their SCSS partials
* `dist` - builds the ZIP's used for template distribution

The JavaScript build process can be further customized by passing parameters. The following are the flags that are supported.

__EXAMPLE:__ Build for use in a special CDN or server location
`grunt --rjs-flags="wdnTemplatePath=//www.unl.edu/"`

__EXAMPLE:__ Customize the UNLchat url.  Could be useful for integrating a custom instance of UNLchat or for development
`grunt --rjs-flags="unlChatURl=//ucommchat-test.unl.edu/assests/js"`

__EXAMPLE:__ Two or more parameters are separated with a space
`grunt --rjs-flags="wdnTemplatePath=//www.unl.edu/ unlChatURl=//ucommchat-test.unl.edu/assests/js"`

__PLEASE NOTE:__ The build process has been optimized for a Linux or OS X environment. While it is technically possible to build on Windows, the specifics of setting up your environment correctly are beyond the scope of this project.

## Further support

Support of the UNL Templates is coordinated and communicated through the [WDN](http://wdn.unl.edu/).