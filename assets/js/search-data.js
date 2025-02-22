// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-book",
    title: "book",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "ideas, bonus material, relevant developments",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-editions",
          title: "editions",
          description: "Overview of all editions of the book.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/editions/";
          },
        },{id: "post-united-states-of-europe",
      
        title: "United States of Europe",
      
      description: "Vision of the future in view of the failure of the USA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/united-states-of-europe/";
        
      },
    },{id: "post-version-1-1",
      
        title: "Version 1.1",
      
      description: "book version 1.1 published (German)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/version1_1/";
        
      },
    },{id: "post-paperback-available",
      
        title: "paperback available",
      
      description: "German paperback can now be ordered by anybody via Amazon",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/paperback/";
        
      },
    },{id: "post-website-live-german-book-available",
      
        title: "website live, German book available",
      
      description: "state of publication of website and book",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/website-live/";
        
      },
    },{id: "post-switching-language",
      
        title: "switching language",
      
      description: "website informations",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/switching-language/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%66%75%74%75%72%65%76%69%73%69%6F%6E%73.%77%6F%72%6C%64", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/zukunftsvisionen.bsky.social", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
