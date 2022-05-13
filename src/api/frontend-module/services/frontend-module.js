'use strict';

/**
 * frontend-module service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frontend-module.frontend-module');
