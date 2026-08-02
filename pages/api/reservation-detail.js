export default async function handler(req, res) {
  const { reservationId } = req.query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/therapy-times/reservation-detail/${reservationId}`,
    { headers: { 'User-Agent': 'watsu-frontend/1.0' } },
  );

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return res.status(502).json({ error: 'Admin API did not return JSON' });
  }

  const json = await response.json();
  res.status(response.status).json(json);
}