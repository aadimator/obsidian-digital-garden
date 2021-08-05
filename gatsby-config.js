module.exports = {
  siteMetadata: {
    title: "Aadam's Notes",
    author: "Aadam",
    description: "A collection of my thoughts and writings.",
    siteUrl: "https://notes.aadimator.com/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/aadimator",
      },
      {
        name: "github",
        url: "https://github.com/aadimator",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/🏠 Home`,
        parseWikiLinks: true,
      },
    },
  ],
}
