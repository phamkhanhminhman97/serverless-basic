import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity{

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true})
  firstName: string;

  @Field({ nullable: true })
  @Column({ nullable: true})
  lastName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  ageeee: number;
}