export default async function handler(req, res) {
  const { reservationId } = req.query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/therapy-times/reservation-detail/${reservationId}`,
  );
  const json = await response.json();
  res.status(response.status).json(json);
}