import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactSubmission } from './entities/contact-submission.entity';
import { CreateContactSubmissionDto } from './dto/create-contact-submision.dto';
import { MailerService } from './mailer/mailer.service';

@Injectable()
export class ContactSubmissionsService {
    constructor(
        @InjectRepository(ContactSubmission)
        private readonly contactSubmissionRepository: Repository<ContactSubmission>,
        private readonly mailerService: MailerService
    ){

    }

    async create(createContactSubmissionDto: CreateContactSubmissionDto): Promise<ContactSubmission>{
        const submision = this.contactSubmissionRepository.create(createContactSubmissionDto);
        const saveSubmission = await this.contactSubmissionRepository.save(submision);

        await this.mailerService.sendAdminNotification(submision);
        await this.mailerService.sendUserConfirmationEmail(submision);

        return saveSubmission;
    }

    async findAll() {
        return await this.contactSubmissionRepository.find();
    }
}
