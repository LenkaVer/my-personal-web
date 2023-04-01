export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`
User-agent: *
Disallow:
Sitemap: https://watsu.verzichova.cz/sitemap.xml
`);
  res.end();
  return { props: {} };
};

const RobotsTxtPage = () => {
  return null;
};

export default RobotsTxtPage;
