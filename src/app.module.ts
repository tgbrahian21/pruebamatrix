import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactSubmissionsModule } from './contact-submissions/contact-submissions.module';
import { MailerService } from './contact-submissions/mailer/mailer.service';
import { MetricsModule } from './metrics/metrics.module';


import databaseConfig from './config/database.config';
import mailerConfig from './config/mailer.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, mailerConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      })
    }),
    ContactSubmissionsModule,
    MetricsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
