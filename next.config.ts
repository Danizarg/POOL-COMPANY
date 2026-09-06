import type { NextConfig } from "next";

/**
 * Permanent redirects preserve every indexed URL from the previous
 * WordPress site — including the broken Spanish slugs that currently
 * 404 across the live site's navigation and footer.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Working English WP slugs
      { source: "/about-us", destination: "/about", permanent: true },
      {
        source: "/swimming-pool-cleaning-and-maintenance",
        destination: "/services/pool-maintenance",
        permanent: true,
      },
      {
        source: "/technical-service-swimming-pools",
        destination: "/services/technical-service",
        permanent: true,
      },
      {
        source: "/building-renovations-swimming-pools",
        destination: "/services/construction-renovation",
        permanent: true,
      },
      {
        source: "/leaks-water-loss-swimming-pools",
        destination: "/services/leak-detection",
        permanent: true,
      },
      { source: "/cubiertas-piscinas", destination: "/services/pool-covers", permanent: true },
      {
        source: "/other-services",
        destination: "/services/additional-services",
        permanent: true,
      },
      // Spanish slugs that 404 on the current live site
      { source: "/contacto", destination: "/contact", permanent: true },
      { source: "/nosotros", destination: "/about", permanent: true },
      {
        source: "/limpieza-mantenimiento-piscinas",
        destination: "/services/pool-maintenance",
        permanent: true,
      },
      {
        source: "/servicio-tecnico-piscinas",
        destination: "/services/technical-service",
        permanent: true,
      },
      {
        source: "/construccion-reformas-piscinas",
        destination: "/services/construction-renovation",
        permanent: true,
      },
      {
        source: "/fugas-perdidas-agua-piscinas",
        destination: "/services/leak-detection",
        permanent: true,
      },
      // Shop stays on the existing WooCommerce installation
      {
        source: "/tienda",
        destination: "https://marbellapoolservice.com/shop/",
        permanent: false,
      },
      {
        source: "/shop",
        destination: "https://marbellapoolservice.com/shop/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
