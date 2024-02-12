import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  constructor(
    id: number,
    email: string,
    name: string,
    password: string,
    team: string,
    icon: string,
    bio: string,
    twitterURL: string,
    teamURL: string,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.team = team;
    this.icon = icon;
    this.bio = bio;
    this.twitterURL = twitterURL;
    this.teamURL = teamURL;
  }

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  team: string;
  @Column()
  icon: string;
  @Column()
  bio: string;
  @Column()
  twitterURL: string;
  @Column()
  teamURL: string;

  @CreateDateColumn()
  createdAt?: Date;
}
