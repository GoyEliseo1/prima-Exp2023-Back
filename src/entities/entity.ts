import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class users {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  adress: string;

  @Column()
  sick: string;
  @Column()
  email: string;
  @Column()
  color: string;
  @Column()
  phone: string;
}
