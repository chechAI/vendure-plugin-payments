import { CrudPermissionDefinition } from '@vendure/core';

export const PAYMENTS_PLUGIN_OPTIONS = Symbol('PAYMENTS_PLUGIN_OPTIONS');
export const loggerCtx = 'PaymentsPlugin';
export const paymentPermission = new CrudPermissionDefinition('Payment');