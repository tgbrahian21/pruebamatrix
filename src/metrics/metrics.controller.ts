import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('api/metrics')
export class MetricsController {
    constructor(private readonly metricsService: MetricsService){}

    @Get('daily-submissions')
    async getDailySubmissions(){
        const count = await this.metricsService.getTodaySubmissionCount();
        return {conteo: count}
    }
}
