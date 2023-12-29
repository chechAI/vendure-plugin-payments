import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    Order,
    patchEntity,
    Payment,
    Permission,
    RequestContext,
    Transaction,
    TransactionalConnection,
    UnauthorizedError,
    UserInputError,
} from '@vendure/core';

import { paymentPermission } from '../constants';
import {
    QueryPaymentArgs,
    QueryPaymentsArgs,
    // MutationCreatePaymentArgs,
    // MutationUpdatePaymentArgs,
} from '../generated-admin-types';


@Resolver()
export class AdminResolver {
    constructor(private connection: TransactionalConnection, private listQueryBuilder: ListQueryBuilder) {}

    @Query()
    @Allow(paymentPermission.Read)
    async payments(@Ctx() ctx: RequestContext, @Args() args: QueryPaymentsArgs) {
        return this.listQueryBuilder
            .build(Payment, args.options || undefined, { 
                ctx,
                relations:['order',],
            })
            .leftJoin('payment.order', 'order')
            .leftJoin('order.channels', 'channel')
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .getManyAndCount()
            .then(([items, totalItems]) => ({ items, totalItems, }));
    }

    @Query()
    @Allow(paymentPermission.Read)
    async payment(@Ctx() ctx: RequestContext, @Args() args: QueryPaymentArgs) {
        return this.connection.getRepository(ctx, Payment).findOne({ where: { id: args.id }, relations: { }, });
    }

    // @Transaction()
    // @Mutation()
    // @Allow(paymentPermission.Create)
    // async createPayment(@Ctx() ctx: RequestContext, @Args() args: MutationCreatePaymentArgs){
    //     const payment = new Payment(args.input);
    //     return this.connection.getRepository(ctx, Payment).save(payment);
    // }

    // @Transaction()
    // @Mutation()
    // @Allow(paymentPermission.Update)
    // async updatePayment( @Ctx() ctx: RequestContext, @Args() args: MutationUpdatePaymentArgs) {
    //     const payment = await this.connection.getEntityOrThrow(ctx, Payment, args.input.id, {});
    //     const updatedPayment = patchEntity(payment, args.input);
    //     return this.connection.getRepository(ctx, Payment).save(updatedPayment);
    // } 
}
