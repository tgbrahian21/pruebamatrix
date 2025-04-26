import { Module } from '@nestjs/common';
import { ContactSubmissionsController } from './contact-submissions.controller';
import { ContactSubmissionsService } from './contact-submissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactSubmission } from './entities/contact-submission.entity';
import { MailerService } from './mailer/mailer.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactSubmission])],
  controllers: [ContactSubmissionsController],
  providers: [ContactSubmissionsService, MailerService]
})
export class ContactSubmissionsModule {}
