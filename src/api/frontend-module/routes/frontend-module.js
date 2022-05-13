'use strict';

/**
 * frontend-module router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::frontend-module.frontend-module');
