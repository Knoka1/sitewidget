import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3b294fea43e563",
    pass: "f3e40856888009",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const feedback = await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Alec <docoutoalec@gmail.com>",
      subject,
      html: body,
    });
  }
}
