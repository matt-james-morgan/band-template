// ─────────────────────────────────────────────
//  Band Template — central configuration file
//  Replace these values to customise your site.
// ─────────────────────────────────────────────

export const bandConfig = {
  // Band name shown in the hero and header
  name: "Your Band",

  // Bio paragraphs shown in the About section
  bio: [
    "A short paragraph about who you are and where you're from.",
    "A second paragraph — your sound, your story, your vibe.",
    "A third paragraph — anything else you want people to know.",
  ],

  // Contact & social links
  contact: {
    email: "band@email.com",
    instagram: {
      handle: "@yourband",
      url: "https://instagram.com/yourband",
    },
    facebook: {
      url: "https://facebook.com/yourband",
    },
  },

  // Streaming platform links — set to "" to hide a platform
  streaming: {
    spotify: "https://open.spotify.com/artist/",
    appleMusic: "https://music.apple.com/",
    youtube: "https://youtube.com/",
    tidal: "https://tidal.com/artist/",
  },

  // Shows: paste your published Google Sheet CSV URL here
  // File → Share → Publish to web → CSV
  showsSheetUrl: "",

  // Navigation links shown in the header
  nav: [
    { label: "About", href: "#about" },
    { label: "Shows", href: "#performances" },
    { label: "Contact", href: "#contact" },
  ],
};
