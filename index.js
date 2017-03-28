/**
 * hound-api-client
 * 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: towyuan@outlook.com
 *
 * NOTE: This library is auto generated by the Open API Codegen program.
 * https://github.com/taoyuan/generator-oac.git
 * Do not edit the class manually.
 *
 */

const Requestor = require('./lib/_requestor');
const Account = require('./lib/Account');
const AchievementImport = require('./lib/AchievementImport');
const AchievementImportRecord = require('./lib/AchievementImportRecord');
const Help = require('./lib/Help');
const Income = require('./lib/Income');
const Settings = require('./lib/Settings');
const SocialGroup = require('./lib/SocialGroup');
const Top = require('./lib/Top');
const Verification = require('./lib/Verification');
const Wechat = require('./lib/Wechat');
const Company = require('./lib/Company');
const CommissionRecord = require('./lib/CommissionRecord');
const SocialGroupStatus = require('./lib/SocialGroupStatus');
/**
 * 
 *
 * @param {String|Object} [baseUrl]
 * @param {Object} [opts]
 */
module.exports = function(baseUrl, opts) {
  if (typeof baseUrl === 'object') {
    opts = baseUrl;
    baseUrl = undefined;
  }
  opts = opts || {};
  opts.baseUrl = opts.baseUrl || baseUrl;

  const client = {};
  const requestor = client.requestor = new Requestor(opts);

  client.authenticate = function(options) {
    requestor.auth(options);
  };

  client.configure = function(options) {
    requestor.configure(options);
  };

  client.account = new Account(requestor);
  client.achievementImport = new AchievementImport(requestor);
  client.achievementImportRecord = new AchievementImportRecord(requestor);
  client.help = new Help(requestor);
  client.income = new Income(requestor);
  client.settings = new Settings(requestor);
  client.socialGroup = new SocialGroup(requestor);
  client.top = new Top(requestor);
  client.verification = new Verification(requestor);
  client.wechat = new Wechat(requestor);
  client.company = new Company(requestor);
  client.commissionRecord = new CommissionRecord(requestor);
  client.socialGroupStatus = new SocialGroupStatus(requestor);

  return client;
};