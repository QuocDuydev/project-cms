'use strict';

/**
 * page-static service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-static.page-static');
