import { IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class UpdateCarDto {
  @IsUUID()
  @IsOptional()
  readonly id?: UUID;
  @IsString()
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @IsOptional()
  readonly color?: string;
  @IsString()
  @IsOptional()
  readonly model?: string;
}
