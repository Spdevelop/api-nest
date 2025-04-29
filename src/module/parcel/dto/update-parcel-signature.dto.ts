import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class UpdateParcelSignatureDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  idParcels: string[];

  @IsString()
  signatureBase64: string;
}
