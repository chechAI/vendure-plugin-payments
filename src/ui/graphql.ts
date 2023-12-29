import gql from 'graphql-tag';

export const PAYMENT_FRAGMENT = gql`
    fragment Payment on Payment {
        nextStates
        id
        createdAt
        updatedAt
        method
        amount
        state
        transactionId
        errorMessage

        refunds {
            id
            createdAt
            updatedAt
            items
            shipping
            adjustment
            total
            method
            state
            transactionId
            reason
            lines {
                orderLine {
                    id
                }
                orderLineId
                quantity
                refund {
                    id
                }
                refundId
            }
            paymentId
            metadata
        }
        metadata
    }
`;
export const GET_PAYMENTS = gql`
    query GetPayments($options: PaymentListOptions) {
        payments(options: $options) {
            items {
                ...Payment
            }
            totalItems
        }
    }
    ${PAYMENT_FRAGMENT}
`;

export const GET_PAYMENT = gql`
    query GetPayment($id: ID!) {
        payment(id: $id) {
            ...Payment
        }
    }
    ${PAYMENT_FRAGMENT}
`;

// export const CREATE_PAYMENT = gql`
//     mutation CreatePayment($input: CreatePaymentInput!) {
//         createPayment(input: $input) {
//             ...Payment
//         }
//     }
//     ${PAYMENT_FRAGMENT}
// `;

// export const UPDATE_PAYMENT = gql`
//     mutation UpdatePayment($input: UpdatePaymentInput!) {
//         updatePayment(input: $input) {
//             ...Payment
//         }
//     }
//     ${PAYMENT_FRAGMENT}
// `;
