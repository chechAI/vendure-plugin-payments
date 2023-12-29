import gql from 'graphql-tag';

export const commonApiExtensions = gql`
    extend type Payment {
        order: Order
    }

    type PaymentList implements PaginatedList {
        items: [Payment!]!
        totalItems: Int!
    }

    extend type Query {
        payments(options: PaymentListOptions): PaymentList!
        payment(id: ID!): Payment
    }

    # Auto-generated at runtime
    input PaymentListOptions

`;

export const shopApiExtensions = gql`
`;

export const adminApiExtensions = gql`
    ${commonApiExtensions}

    # extend type Mutation {
        # createPayment(input: CreatePaymentInput!): Payment!
        # updatePayment(input: UpdatePaymentInput!): Payment!
    # }

    # input CreatePaymentInput {
    # }

    # input UpdatePaymentInput {
    #     id: ID!
    # }
`;
