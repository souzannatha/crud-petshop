export class CreatePetDto {
  readonly name: string;

  readonly type: string;

  readonly age: number;

  readonly breed?: string;

  readonly isDangerous: boolean;
}
