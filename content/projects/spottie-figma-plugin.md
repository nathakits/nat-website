---
title: Spottie
subtitle: Insert album and track covers from Spotify into your designs
date: Fri Mar 12 2021 01:05:38 GMT+0700 (Indochina Time)
hero_img: "spottie/plugin-file-cover.jpg"
link: https://www.figma.com/community/plugin/946462676168136646/Spottie
tech_stack: "Vue.js / Tailwind CSS"
tag: plugin
version: v1.2.0
---

My first Figma plugin got published! This is my first coding project that I actually completed and released to the public!

In this post, I outlined my process of designing and developing this plugin. This is a condensed overview of my creative and development process. Since this is my first plugin, I was still figuring lots of things out. So there were lots of going back and forth on testing out proof of concepts and designs and coding. So the real process is a lot more messier than it might seem when you are reading this.

Spottie uses Spotify API to get new release, album and track images which you can can insert directly into Figma. Similar to [Unsplash](https://www.figma.com/community/plugin/738454987945972471/Unsplash) plugin. For this project, I designed the user interface in Figma and wrote all the code.

## How it works
Check out the walkthrough to see how the plugin works.

<video width="100%" controls>
  <source src="/projects/spottie/walkthrough.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

The primary goal of this plugin is to make the designer more efficient. More time focusing on creating and less time wasted on going to the browser and searching for images. Spottie is here to help solve that problem! Just search and insert, right in Figma!

### Basic usage
- Run Spottie
- Click on an image to insert into the canvas
- Long press to multi-select images and insert all at the same time.

If no image is selected then a new image is created and inserted into the canvas. But if a fillable object is selected then the image will be added to the fill property. Bonus! You could also play song previews in the Tracks tab by double clicking on the thumbnail.

### Features
Here are all the main features of the plugin.

- New releases on plugin start up
- Search album, artist and track covers
- Insert single image with single click
- Long press on an image to enable multi-select mode
- Selected object(s) in the canvas will get replaced with the inserted image(s)
- Browser-level image lazy-loading
- In the Tracks tab, double-click on any thumbnail to listen to the preview track!

## Proof of concept
Before I even begin to design and code the plugin, I had to make sure that this idea was even possible. Since the main feature of this plugin required using the Spotify API, I need the test the API first.

So I signed up for a Spotify developer account and tested the search API. The code example below shows `The Killers` as the query input and then the API returns a JSON.

```js
// Spotify Search endpoint - https://api.spotify.com/v1/search
axios({
  method: "get",
  url: `https://api.spotify.com/v1/search?q=the+killers&type=artist`,
  headers: {
    "Authorization": `Bearer ${access_token}`,
    "Content-Type": `application/x-www-form-urlencoded`
  }
})
.then ( response => {
  let res = response.data
  console.log(res)
})
```

```json
// example response data
{
  "artists": {
    "items": [
      {
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/c85f1ea9f92dc0cc43965a0c727c4a1cdd1c2540",
            "width": 640
          }
        ],
        "name": "The Killers"
      }
    ]
  }
}
```

Success! I now have the data and validated my idea, so the next step is to develop the plugin.

## Designing and coding the plugin

### Lo-fi Design
For the design, I looked at other similar plugins first, like Unsplash. Looking at the UI/UX, the interactions and started writing out what I need for my own plugin. So I did a little brainstorming and write down the essential features for the Spottie, then started designing the first prototype.
#### Features
- Search bar
- Tab navigation
- Displaying search results
- Search controls
- Inserting images into Figma

At this point, instead of designing the high fidelity design right away, I start working on the lo-fi designs in Figma first. This is to test out the placements of the UI elements and interactions.

<figure>
  <nuxt-picture
    src="/projects/spottie/lofi-ui.jpg"
    format="webp"
    sizes="xs:400px md:800px lg:1640"
  >
  </nuxt-picture>
</figure>

### Tech Stack
Before prototyping, I already picked out my tech stack for developing this plugin. I wanted to use Vue.js and Tailwind CSS to create the UI of the plugin so that I can create the interface and the interactions quickly and easily. So when I started this project, I looked for a Figma plugin template that was using Vue.js and I found this [template](https://github.com/itsmnthn/figma-plugin-vue) which turned out to work great for creating Figma plugins. So thank you to [Manthankumar Satani](https://github.com/itsmnthn) for this plugin template.

### Hi-fi Design
With the prototype working, it's time to fully flesh out the rest of the design. For my plugins, I try to keep it as simple as possible and also follow Figma plugin best practices. So that means following the design guideleine of the Figma UI as much as possible.

<figure>
  <nuxt-picture
    src="/projects/spottie/hifi-ui.png"
    format="webp"
    sizes="xs:400px md:800px lg:1640"
  >
  </nuxt-picture>
</figure>

As you can see from the hi-fi design, it didn’t change much from the lo-fi design. I adjusted the dimension of the plugin, updated the UI to follow Figma guidelines, added info icon and removed the search result count in the tab. Thr rest stayed the same as it was working well already.

### Building the MVP
To move quickly and release as soon as possble without getting stuck on design and development loop, I had to build and release an MVP version of the plugin. So I made a list of features for the MVP that I want to release first and other features for future updates.

With the final design ready, I coded the rest of the UI and the interactions. This part took the most time because for most of the code I didn’t use any libraries, except for the long click which was a bit difficult and time consuming to implement. I had to code most of them which meant lots of bugs and debugging and testing. Multiple selections and multiple inserts were the most complex interaction for this plugin.

#### Testing, debuggin, testing, debugging...
I approach testing by listing out all the interations here:

- New releases on plugin start up
- Search album, artist and track covers
- Insert single image with single click
- Long press on an image to enable multi-select mode
- Selected object(s) in the canvas will get replaced with the inserted image(s)
- Browser-level image lazy-loading
- Bonus! In the Tracks tab, double-click on any thumbnail to listen to the preview track!

Since the plugin had lots of interactions, It needed a lot of testing to ensure that all features were working properly before publishing. So it took me about 2 weeks of my free time to test all the features.

## Publishing and promoting the plugin

### Preparing assets
The plugin is ready to be published, but before I can do that I need to prepare all the logos and banner image first. So that took a few more days to get all the assets ready. First I designed the logo, which after going through abstract designs, I thought I would go with a logotype instead.

<figure>
  <nuxt-picture
    src="/projects/spottie/draft-logo-designs.png"
    format="webp"
    sizes="xs:400px md:800px lg:1640"
  >
  </nuxt-picture>
</figure>

While looking at all the other plugin logos, I decided that the logotype should be a Thai letter since all the other logotypes were all Alphabets. I wanted my work to connect to my Thainess in some ways so it seemed appropriate to design the logo this way. So I used the ส which is the equivanent to S in the alphabet. This is the final logo design that I ened up with.

<figure>
  <nuxt-picture
    src="/projects/spottie/final-logo.png"
    format="webp"
    sizes="xs:400px md:800px lg:1640"
  >
  </nuxt-picture>
</figure>

### Published!
I felt a huge relief when I hit that publish button 😆. All of 2 months-ish of hard work that I have done is finally going to be used by real people! But Figma still needs to review the plugin first so that took around 10 days until it got published to the public.

### Getting the word out
Once the plugin has been approved, I can now do some promoting! I prepared some text and started posting on Product Hunt, Facebook, Instagram and Twitter. People started responding and the installs started going up!

### Bug fixes, patches and updates
The work is not done yet! The plugin had been published and a few days had gone by. People were installing it and using it. Even though no one had reported any bugs, I went back to use it again and found some bugs! So I went back into coding mode again. There were issues with the pagination that were sometimes returning duplicate results and **Load More** button was not disabling correctly. Once the bugs were fixed, I worked on more feature updates since I was already coding. I added the **New Releases** tab so that users can quickly insert images straightaway without having to search.

## Analytics
Spotify provides a dashboard for developers to create and manage integrations. So for this project, I can monitor the API usage for the plugin. As you can see below, the graph shows the total number of requests from the Search and New Releases API when the users were using the plugin.

<figure>
  <nuxt-picture
    src="/projects/spottie/spotify-dashboard.png"
    format="webp"
    sizes="xs:400px md:800px lg:1640"
  >
  </nuxt-picture>
</figure>

## Open source
Creating in open source can be very exciting. Knowing that people are actually using something that you made is really rewarding. I was so excited I kept checking the install numbers on my Figma profile 😆

For most of my personal projects, I try to make it open source, so that means all the code and assets are available to the public. So anyone can see the code and help improve it or make feature requests or report bugs.

This plugin is open source. Feel free to open issues/request features or pull requests at <a href="https://github.com/nathakits/spottie-figma-plugin" target="_blank" rel="noreferrer noopener">https://github.com/nathakits/spottie-figma-plugin</a>


<div class="py-16 text-center">
Thank you for reading 🙂
</div>z