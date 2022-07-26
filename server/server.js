require('dotenv').config();
const express = require('express');
const data = require('./data/data.js');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());

const entryRouter = require('./routes/entryRouter.js');
app.use('/api/entries', entryRouter);

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
const User = {
  email: '',
  text: '',
};

app.post('/create', function (req, res) {
  User.email = req.body.email;
  User.text = req.body.text;

  console.log(User);
  res.send('Received');
});

app.get('/send', (req, res) => {
  const nodemailer = require('nodemailer');
  const { google } = require('googleapis');
  const CLIENT_ID =
    '785173687554-7b364finnjpo6eb28jd4r2gb0gsnrtac.apps.googleusercontent.com';
  const CLEINT_SECRET = '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';
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN =
    '1//04QOEt5E_-vMeCgYIARAAGAQSNwF-L9IrOhb-fMy5o7JQhPKgWAdGpMKDElbCirpywS5t2314L5tCUAJFr-K7MSgedasdaOdJYjg';
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
        to: User.email,
        subject: 'Your Digital Warranty Card',
        text: User.text,
        html: `<head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>${User.text}</p>
        <br/>
        <p>You can import your digital warranty in Metamask wallet: https://play.google.com/store/apps/details?id=io.metamask&hl=en_IN&gl=US</p>
        <br/>
        <p>View your digital warranty https://goerli.pixxiti.com/nfts/ token_address/token_id<p/>
      </body>`,
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

  res.send('Mail Sent');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// Connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
});
