import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import bcrypt from 'bcrypt';


@Entity()
export default class Citizens {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    first_name: string;

    @Column({ nullable: false })
    second_name: string;

    @Column({ nullable: false })
    third_name: string;

    @Column({ nullable: false })
    fourth_name: string;

    @Column({ nullable: false })
    nationality: string;

    @Column({ nullable: false })
    passport_or_id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    phone_number: number;

    @Column({ nullable: false })
    address: string;

    @Column({ nullable: false })
    job_title: string;

    @Column({ nullable: false, type: "enum", enum: ["male", "female"], default: "male" })
    gender: string;

    @Column({ nullable: false })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    async checkPasswordIsValid(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }

}