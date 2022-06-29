interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
  //attachment não é obrigatório e é do tipo array de strings
}

interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage,
}

interface IEmailService {
  sendMail(Request: IMessageDTO): void
}


class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService;