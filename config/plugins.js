module.exports = ({ env }) => ({
  email: {
    provider: "smtp",
    providerOptions: {
      host: "smtp.gmail.com", //SMTP Host
      port: 465, //SMTP Port
      secure: true,
      username: "assethomezit@gmail.com",
      password: "tlvmzbawysadeaem",
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: "noreply@assethomez.com",
      replyTo: "noreply@assethomez.com",
    },
  },
});
