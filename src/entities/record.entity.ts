import { Column } from 'typeorm';

export class Record {
  @Column({ type: 'timestamp with time zone' })
  createdAt: string;

  @Column()
  createdBy: string;

  @Column({ type: 'timestamp with time zone' })
  updatedAt: string;

  @Column()
  updatedBy: string;
}
