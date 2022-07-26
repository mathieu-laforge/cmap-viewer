const fs = require("fs")
const gracefulFs = require("graceful-fs")
gracefulFs.gracefulify(fs)
const config = require("./config")

const siteMetadata = {
  title: `DisLex`,
  description: `DisLex - Lecture et écriture d'histoires`,
  author: `@Mathieu_Ouellet_Laforge`,
  docsLocation: config.siteMetadata.docsLocation,
  headerTitle: config.header.title,
  acceuil: config.pages.accueil,
  signup: config.pages.signup,
  signin: config.pages.signin,
  mission: config.pages.mission,
  blog: config.pages.blog,
  boite: config.pages.boite,
}
const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: { ...config.pwa.manifest },
  },
]
module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata,
  plugins,
  flags: {
    FAST_DEV: true,
  },
}
