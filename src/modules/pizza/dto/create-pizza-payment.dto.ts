import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { PizzaDough, PizzaIngredient, PizzaSize } from '../entities';

@InputType('CreatePizzaPaymentPizzaDto')
export class CreatePizzaPaymentPizzaDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '1', description: 'Идентификатор пиццы' })
  id: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'Название пиццы' })
  name: string;

  @Field(() => [PizzaIngredient])
  @ApiProperty({ description: 'Топпинги', type: [PizzaIngredient] })
  toppings: PizzaIngredient[];

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'Описание пиццы' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => [PizzaSize])
  @ApiProperty({ description: 'Размеры пиццы', type: PizzaSize })
  size: PizzaSize;

  @IsString()
  @IsNotEmpty()
  @Field(() => PizzaDough)
  @ApiProperty({ description: 'Тип теста', type: PizzaDough })
  doughs: PizzaDough;
}

@InputType('CreatePizzaPaymentPersonDto')
export class CreatePizzaPaymentPersonDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'firstname', description: 'Имя' })
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'lastname', description: 'Фамилия' })
  lastname: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'middlename', description: 'Отчество', required: false })
  middlename?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '89990009999', description: 'Телефон' })
  phone: string;
}

@InputType('CreatePizzaPaymentAddressDto')
export class CreatePizzaPaymentAddressDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'street', description: 'Улица' })
  street: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'house', description: 'Номер дома' })
  house: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'apartment', description: 'Номер квартиры' })
  apartment: string;

  @IsString()
  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'comment', description: 'Комментарий', required: false })
  comment?: string;
}

@InputType('CreatePizzaPaymentDebitCardDto')
export class CreatePizzaPaymentDebitCardDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '1111 1111', description: 'Номер карты' })
  pan: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '11/11', description: 'Срок действие карты' })
  expireDate: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '111', description: 'Код карты' })
  cvv: string;
}

@ArgsType()
export class CreatePizzaPaymentDto {
  @ValidateNested()
  @Field(() => CreatePizzaPaymentAddressDto)
  @ApiProperty({ description: 'Адрес доставки', type: CreatePizzaPaymentAddressDto })
  receiverAddress: CreatePizzaPaymentAddressDto;

  @ValidateNested()
  @Field(() => CreatePizzaPaymentPersonDto)
  @ApiProperty({ description: 'Данные пользователя', type: CreatePizzaPaymentPersonDto })
  person: CreatePizzaPaymentPersonDto;

  @ValidateNested()
  @Field(() => CreatePizzaPaymentDebitCardDto)
  @ApiProperty({ description: 'Банковская карта', type: CreatePizzaPaymentDebitCardDto })
  debitCard: CreatePizzaPaymentDebitCardDto;

  @ValidateNested()
  @Field(() => [CreatePizzaPaymentPizzaDto])
  @ApiProperty({ example: 'pizzas', description: 'Пиццы' })
  pizzas: CreatePizzaPaymentPizzaDto[];
}
