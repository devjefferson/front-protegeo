export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GeoAlertas",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Mapa",
      href: "/",
    },
    {
      label: "Noticias",
      href: "/noticias",
    },
    {
      label: "Blog",
      href: "/blog",
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
