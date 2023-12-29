import { LanguageCode, PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import path from 'path';

import { AdminResolver } from './api/admin-resolver';
import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { ShopResolver } from './api/shop-resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [AdminResolver],
    },
    shopApiExtensions: {
        // schema: shopApiExtensions,
        // resolvers: [ShopResolver],
    },
    controllers: [],
    providers: [],
    compatibility: '^2.0.0',
})
export class PaymentsPlugin {
    static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'payments', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
        translations: { en: path.join(__dirname, 'i18n-messages/en.json'), }
    };
}
