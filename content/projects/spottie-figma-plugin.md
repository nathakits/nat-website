---
title: Spottie
subtitle: Insert album and track covers from Spotify into your designs
date: Tue May 11 2021 01:05:38 GMT+0700 (Indochina Time)
hero_img: "spottie/plugin-file-cover.jpg"
link: https://www.figma.com/community/plugin/946462676168136646/Spottie
tag: plugin
version: v1.2.0
---

## Introduction
My Figma plugin got published! This was my first public coding project that I actually completed and released to the public!

The plugin is called [Spottie](https://github.com/nathakits/spottie-figma-plugin). I designed the UI in Figma and wrote all the code. The plugin uses Spotify API to get the new releases, album and track images which you can can insert directly into Figma. Similar to Unsplash.

Creating in open source can be very exciting. Knowing that people are actually using something that you made is really rewarding. I was so excited I kept checking the install numbers on my Figma profile.

For most of my personal projects, I try to make it open source, so that means all the code and assets are available to the public. So anyone can see the code and help improve it or make feature requests or report bugs.

### How it works
Check out the walkthrough to see how the plugin works. Using this plugin cuts down time to mockup designs in Figma. Just search and insert!

<!-- walkthrough video -->

In Figma select main menu -> Plugins -> Spottie

<!-- image of plugin menu -->

#### Basic usage
- Run Spottie
- Click on an image to insert into the canvas
- Long press to multi-select images and insert all at the same time.

If no image is selected then the image is created, but if a fillable object is selected then the fill will be replaced.
Bonus - play song previews in the Tracks tab by double clicking on the image.

#### Features
- New releases on plugin start up
- Search album, artist and track covers
- Insert single image with single click
- Long press on an image to enable multi-select mode
- Selected object(s) in the canvas will get replaced with the inserted image(s)
- Browser-level image lazy-loading
- Bonus! In the Tracks tab, double-click on any thumbnail to listen to the preview track!

## Proof of concept
Before even designing and coding the full plugin, I had to make sure that this prject was even possible. So I signed up for a Spotify developer account. Got the API keys and started testing the API. 

<!-- Postman screenshot -->

Success! Now I have validated my main goal of the plugin. I got the data I needed to develop the plugin. Next step is designing and coding the plugin!

## Designing and coding the plugin
Since this is my first plugin, I was still figuring lots of things out. So there were lots of going back and forth on testing out proof of concepts and designs and coding. So the real process is a lot more messier.

For the design, I looked at other similar plugins first, like Unsplash. Looking at the UI/UX, the interactions and started writing out what I need for my own plugin. So I did a little brainstorming and wring out some requirements/goals for the plugin.

<!-- simple graphics -->
- Search
- Tab navigation
- Inserting images into Figma

### Lo-fi designs
With these goals, I started on prototyping some lo-fi designs.

<!-- simple design sketches -->
<!-- figma screenshots -->

### Prototyping the plugin
I wanted to use Vue.js to create the UI of the plugin so that I can create the interface and the interactions easily. So when I started this project, I looked for a Figma plugin template and I found this which turns out was exactly what I was looking for.

<!-- After that I started working on the proof of concept with a rough -->

<!-- code snippets -->

### Hi-fi designs
With the plugin prototype working, it's time to design the rest.

<!-- graphics -->

### Building the MVP
With the designs ready, I coded the rest... and

### Testing
Since this plugin had many interactions, It needed lots of testing to ensure that they are all working properly before publishing this. So it took me about 2 weeks of my free time to test all the features.

<!-- Searching and paginating -->
<!-- Inserting images -->
<!-- Selection modes -->


This plugin is open source. Feel free to open issues/request features or pull requests at https://github.com/nathakits/spottie-figma-plugin

Download it here -> https://www.figma.com/community/plugin/946462676168136646/Spottie
