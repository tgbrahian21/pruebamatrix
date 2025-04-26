import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from "nodemailer";
import { ContactSubmission } from '../entities/contact-submission.entity';

@Injectable()
export class MailerService {
    private transporter: nodemailer.Transporter;

    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get('mailer.host'),
            port: +this.configService.get('mailer.port'),
            auth: {
                user: this.configService.get('mailer.user'),
                pass: this.configService.get('mailer.password')
            }
        });
    }

    async sendUserConfirmationEmail(submission: ContactSubmission) {
        await this.transporter.sendMail({
            from: `"Consultores Estrategicos" <${this.configService.get('mailer.user')}>`,
            to: submission.email,
            subject: 'Confirmación de formulario recibido',
            text: `Hola ${submission.fullName}, hemos recibido tu mensaje: "${submission.message}". ¡Gracias por contactarnos!`,
        });
    }

    async sendAdminNotification(submission: ContactSubmission) {
        await this.transporter.sendMail({
            from: `"Consultores Estrategico"<${this.configService.get('mailer.user')}>`,
            to: this.configService.get('mailer.adminEmail'),
            subject: 'Nuevo formulario de contacto recibido',
            text: `Nuevo contacto recibido: \n\nNombre: ${submission.fullName}\nEmail: ${submission.email}\nMensaje: ${submission.message}`,
        });
    }

}
