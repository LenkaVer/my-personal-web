export default async function handler(req, res) {
  const { termId } = req.query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/therapy-times/detail/${termId}`,
  );
  const json = await response.json();
  res.status(response.status).json(json);
}