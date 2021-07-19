import { Column } from 'typeorm';

export class Record {
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  // TODO: 나중에 고쳐야 함
  @Column({
    nullable: true,
  })
  createdBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({
    nullable: true,
  })
  updatedBy: string;
}
