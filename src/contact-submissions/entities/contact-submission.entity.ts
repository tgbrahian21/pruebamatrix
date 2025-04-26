import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


@Entity('contact_submissions')
export class ContactSubmission {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable:true})
    phone: string;

    @Column()
    message: string;


    @CreateDateColumn( {type: 'timestamp'})
    created_at: Date;

}
