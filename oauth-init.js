
export default async function handler(req, res) {
  const redirect_uri = encodeURIComponent("https://truthbeforefire-backend.vercel.app/api/oauth-callback");
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const scope = encodeURIComponent("https://www.googleapis.com/auth/youtube.upload");
  const auth_url = \`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=\${client_id}&redirect_uri=\${redirect_uri}&scope=\${scope}&access_type=offline\`;
  res.redirect(auth_url);
}
