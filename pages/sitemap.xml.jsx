const generateSiteMap = (sites) => {
  const baseUrl = 'https://watsu.verzichova.cz';
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${sites
         .map(({ url }) => {
           return `
         <url>
             <loc>${`${baseUrl}${url}`}</loc>
             <lastmod>${date.toISOString()}</lastmod>
         </url>
       `;
         })
         .join('')}
     </urlset>
   `;
};

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export const getServerSideProps = async ({ res }) => {
  const sites = [
    {
      url: '/',
    },
    {
      url: '/o-watsu',
    },
    {
      url: '/rezervace',
    },
    {
      url: '/kontakt',
    },
    {
      url: '/gdpr',
    },
    {
      url: '/obchodni-podminky',
    },
    {
      url: '/o-watsu/ucinky',
    },
    {
      url: '/o-watsu/prubeh-terapie',
    },
    {
      url: '/o-watsu/kontraindikace',
    },
    {
      url: '/rezervace/email-o-terminech',
    },
  ];
  const sitemap = generateSiteMap(sites);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
