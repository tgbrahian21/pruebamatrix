import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactSubmission } from 'src/contact-submissions/entities/contact-submission.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class MetricsService {
    constructor(
        @InjectRepository(ContactSubmission)
         private readonly  contactSubmissionRepository: Repository<ContactSubmission>
){}

 async getTodaySubmissionCount(): Promise<number> {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)

    return this.contactSubmissionRepository.count({
        where: {
            created_at: Between(startOfDay, endOfDay)
        }
    });

 }
}
