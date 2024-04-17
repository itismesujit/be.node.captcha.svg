const
  app = require('express')(),
  PORT = process.env.PORT || 3000,
  svgCaptcha = require('svg-captcha');

app
  .get('/', (req, res) => res.end('success'))
  .get('/captcha', (req, res) => {

    const
      options = { size: 5, ignoreChars: '0o1i', noise: 1, color: true, },
      { data, text } = svgCaptcha.create(options);

    res
      .setHeader('x-text', text)
      .type('svg')
      .status(200).send(data);
  });

app.listen(PORT, console.info(`Server is running on port ${PORT}`));

