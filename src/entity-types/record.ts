import { Column } from 'typeorm';

export class Record {
  @Column({ type: 'timestamp' })
  createdAt: string;

  @Column()
  createdBy: string;

  @Column({ type: 'timestamp' })
  updatedAt: string;

  @Column()
  updatedBy: string;
}
