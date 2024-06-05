import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { BaseResolver } from '@/utils/services';

import { LOAN_FEED_ITEMS, LOANS } from './constants';
import { GetLoanDto } from './dto';
import type { LoanFeedItem } from './entities';
import { Loan } from './entities';

@ApiTags('🤖 android')
@Controller('/android')
export class AndroidSampleController extends BaseResolver {
  @Get('/loans')
  @ApiOperation({ summary: 'получить займы' })
  @ApiResponse({
    status: 200,
    description: 'loans',
    type: [Loan]
  })
  getLoanFeed(): LoanFeedItem[] {
    return LOAN_FEED_ITEMS;
  }

  @Get('/loans/:id')
  @ApiOperation({ summary: 'получить займ' })
  @ApiResponse({
    status: 200,
    description: 'loan',
    type: Loan
  })
  getFullLoan(@Param() params: GetLoanDto): Loan {
    return LOANS.find((loan) => loan.id === Number(params.loanId));
  }
}
