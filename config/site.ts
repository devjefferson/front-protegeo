export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ProteGeo",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Mapa",
      href: "/mapa",
    },
    {
      label: "Noticias",
      href: "/noticias",
    },
  
    {
      label: "Sobre Nós",
      href: "/sobrenos",
    },
  ],
  navMenuItems: [
    {
      label: "Perfil",
      href: "/perfil",
    },
    {
      label: "Favoritos/Lista de Regiões",
      href: "/favotiros ",
    },
    {
      label: "Reportar Incidente",
      href: "/report",
    },
    {
      label: "Histórico de Incidentes",
      href: "/historico",
    },
    {
      label: "Sobre Nós",
      href: "/sobrenos",
    },
    {
      label: "Configurações",
      href: "/configuracoes",
    },
    {
      label: "Ajuda e Suporte",
      href: "/help-feedback",
    },
    {
      label: "Sair",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
