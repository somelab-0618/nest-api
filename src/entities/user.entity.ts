import { Exclude } from 'class-transformer';
import { UserStatus } from 'src/auth/user-status.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  status: UserStatus;

  @OneToMany(() => Item, (item) => item.user) // 関連先の型を返す, 関連先のプロパティを返す
  items: Item[];
}
