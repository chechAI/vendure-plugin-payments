import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    PaginatedList,
    patchEntity,
    Payment,
    Permission,
    RequestContext,
    Transaction,
    TransactionalConnection,
} from '@vendure/core';

// import {
//     QueryPaymentArgs,
//     QueryPaymentsArgs,
// } from '../generated-shop-types';



@Resolver()
export class ShopResolver {
    constructor(private connection: TransactionalConnection, private listQueryBuilder: ListQueryBuilder) {}

    // @Query()
    // async payments(@Ctx() ctx: RequestContext, @Args() args: QueryPaymentsArgs) {
    //     return this.listQueryBuilder
    //         .build(Payment, args.options || undefined, { ctx, })
    //         .getManyAndCount()
    //         .then(([items, totalItems]) => ({ items, totalItems, }));
    // }

    // @Query()
    // async payment(@Ctx() ctx: RequestContext, @Args() args: QueryPaymentArgs) {
    //     return this.connection.getRepository(ctx, Payment).findOne({ where: { id: args.id }, relations: { }, });
    // }
}
