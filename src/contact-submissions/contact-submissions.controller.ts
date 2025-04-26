import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactSubmissionsService } from './contact-submissions.service';
import { CreateContactSubmissionDto } from './dto/create-contact-submision.dto';

@Controller('api/contact-submissions')
export class ContactSubmissionsController {
    constructor(
        private readonly contactSubmissionsService: ContactSubmissionsService
    ){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createContactSubmissionDto: CreateContactSubmissionDto){
        await this.contactSubmissionsService.create(createContactSubmissionDto);
        return { mensaje: "Formulario recibido correctamente. "}
    }

    @Get()
    async findAll(){
        return this.contactSubmissionsService.findAll();
    }
    
}
