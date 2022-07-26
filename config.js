const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://localhost:8000",
  },
  header: {
    title: `DisLex`,
  },
  pages: {
    accueil: {
      link: "/",
      title: "DisLex - Page d'accueil",
    },
    signup: {
      link: "/enregistrement",
      title: "Création d'un compte d'utilisateur",
    },
    signin: {
      link: "/connexion",
      title: "Connexion à votre compte",
    },
    mission: {
        link: "/mission",
        title: "Notre mission en tant que parents",
    },
    blog: {
        link: "/blog",
        title: "Le blog DisLex",
    },
    boite: {
        link: "/boite",
        title: "La boîte à outils de DisLex",
    },
  },
  siteMetadata: {
    title: "DisLex",
    description: "DisLex - Lecture et écriture d'histoires",
    
  },
  responsive: {
    mobile: {
      maxWidth: 768,
    },
    tablet: {
      minWidth: 768,
      maxWidth: 1440,
    },
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: `DisLex - Lecture et écriture d'histoires`,
      short_name: "DisLex",
      start_url: "/",
      background_color: "#FAFAFA",
      theme_color: "#9C27B0",
      display: "standalone",
      crossOrigin: "use-credentials",
      icon: "src/images/dislex.svg",
    },
  },
  
}
module.exports = config
