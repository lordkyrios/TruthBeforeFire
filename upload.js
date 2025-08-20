
export const config = {
  api: {
    bodyParser: false
  }
};

import formidable from 'formidable';
import { google } from 'googleapis';

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ success: false, error: 'Form parse error' });
      return;
    }

    // Simulate a video upload success
    res.status(200).json({ success: true, videoId: 'demo12345' });
  });
}
