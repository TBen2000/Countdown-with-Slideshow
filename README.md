# Countdown with Slideshow

This template offers an adjustable countdown with an individual slide show and possible music in the background. This makes it perfect for the start of events.


## Executing

The template is developed in the form of a web page which can be executed locally in the browser. To start it, simply download this repository ("Code" ⇾ "Download ZIP"), then unzip the downloaded file and run the "main.html" file in a browser of your choice.

> Tip: The "F11" key can be used to activate full-screen mode in most browsers. This makes the whole thing look much nicer.


## Customizing

### Pictures

To use your own pictures in the background, you can add them in the "pictures" folder. These must be named from 1 upwards and all must have the same image format (e.g. ".jpg"). It must be ensured that enough images are provided for the countdown so that the background does not simply turn black at some point.

In addition, the images "picture_start.jpg" and "picture_end.jpg" can be changed to define the background before and after the countdown. It is important to note that the names must not be changed. At the moment, both images are simply black.

### Song

The song in the background can also be customized. To do this, simply load the desired audio file into the folder and refer to it in the "settings.js" file.

### Further settings

More settings can be defined in the "settings.js" file. It is important to adjust these settings in order to customize the countdown. One of the two settings is recommended for the format of the countdown:

```
const UNIT_MINUTE = "m";
const UNIT_SECOND = "s";
const SEPERATOR = " "
const SHOW_ZERO_MIN = true;
```
⇾ These settings output the values "2m 34s", "0m 56s" or "0m 07s", for example.


```
const UNIT_MINUTE = "";
const UNIT_SECOND = "";
const SEPERATOR = ":"
const SHOW_ZERO_MIN = false;
```
⇾ These settings output the values "2:34", "56" or "7", for example.
