
export default async function handler(req, res) {
  res.status(200).send("OAuth callback received. You can now close this tab.");
}
