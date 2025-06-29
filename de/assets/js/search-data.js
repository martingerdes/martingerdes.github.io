// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-buch",
    title: "Buch",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Ideen, Zusatzmaterial, relevante Entwicklungen",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-auflagen",
          title: "Auflagen",
          description: "Übersicht aller Auflagen des Buches",
          section: "Navigation",
          handler: () => {
            window.location.href = "/editions/";
          },
        },{id: "post-bilder-freifläche-zu-9-2",
      
        title: "Bilder Freifläche (zu 9.2)",
      
      description: "Bilder der Freifläche des Hochhauskonzeptes (Kapitel 9.2)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/open_space/";
        
      },
    },{id: "post-leserunde-bei-lovelybooks",
      
        title: "Leserunde bei LovelyBooks",
      
      description: "Leserunde bei LovelyBooks",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/leserunde/";
        
      },
    },{id: "post-vereinigte-staaten-von-europa",
      
        title: "Vereinigte Staaten von Europa",
      
      description: "Zukunftsvision in Anbetracht des Ausfalls der USA",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/united-states-of-europe/";
        
      },
    },{id: "post-version-1-1",
      
        title: "Version 1.1",
      
      description: "Buchversion 1.1 veröffentlicht",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/version1_1/";
        
      },
    },{id: "post-taschenbuch-verfügbar",
      
        title: "Taschenbuch verfügbar",
      
      description: "Taschenbuch kann jetzt von jedem via Amazon bestellt werden",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/paperback/";
        
      },
    },{id: "post-webseite-live-buch-verfügbar",
      
        title: "Webseite Live, Buch verfügbar",
      
      description: "Stand der Veröffentlichung von Webseite und Buch",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/website-live/";
        
      },
    },{id: "post-sprache-wechseln",
      
        title: "Sprache wechseln",
      
      description: "Hinweise zur Webseite",
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
