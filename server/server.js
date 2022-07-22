const express = require('express');
const data = require('./data/data.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/product/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not Found' });
  }
});

app.get('/send', (req, res) => {
  const nodemailer = require('nodemailer');
  const { google } = require('googleapis');
  const CLIENT_ID =
    '203990915070-fvb522gbneso8rttul5qvjidm69d2423.apps.googleusercontent.com';
  const CLEINT_SECRET = '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';
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN =
    '1//04FVbfb7mc9CECgYIARAAGAQSNwF-L9Ir5ALojrXhXL5v_XqQxPkQ9cMP1T226zl2WGYFifTvD4v6vm-38xekQMqGlER-WrDp8s8';
  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'betterbuyhead@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: '<betterbuyhead@gmail.com>',
        to: 'sanskaryerawar@gmail.com',
        subject: 'Hello uiop ',
        text: 'Hello from gmail email using API',
        html: '<h1>Hello from gmail email using API</h1>',
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }

  sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
