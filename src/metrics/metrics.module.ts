import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactSubmission } from 'src/contact-submissions/entities/contact-submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactSubmission])],
  controllers: [MetricsController],
  providers: [MetricsService]
})
export class MetricsModule {}
