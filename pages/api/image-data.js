export default async function handler(req, res) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/data/${req.query.hash}`,
  );
  const json = await response.json();
  res.status(200).json(json);
}