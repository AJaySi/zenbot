module.exports = {
  _ns: 'zenbot',
  _folder: 'lib',
  'ta_ema': require('./ta_ema'),
  'ta_macd': require('./ta_macd'),
  'ta_trix': require('./ta_trix'),
  'cci': require('./cci'),
  'ema': require('./ema'),
  'engine': require('./engine'),
  'normalize-selector': require('./normalize-selector'),
  'objectify-selector': require('./objectify-selector'),
  'rsi': require('./rsi'),
  'sma': require('./sma'),
  'srsi': require('./srsi'),
  'stddev': require('./stddev'),
  'notify': require('./notify'),
  'output': require('./output'),
  'tcf': require('./tcf'),
  'vma': require('./vma'),
  'lrc': require('./lrc'),
  'adx': require('./adx'),
  'vwap': require('./vwap'),
  'slow_stochastic': require('./slow_stochastic'),

  'collection-service': require('./services/collection-service'),
  'exchange-service': require('./services/exchange-service'),
  'resume-marker-service': require('./services/resume-marker-service'),
  'trades-service': require('./services/trades-service'),
  'consumeAndProcessService': require('./services/consume-and-process-service'),

  'cmf': require('./cmf'),
  'bollinger': require('./bollinger'),
  'wto': require('./wto'),
  'momentum': require('./momentum'),
  'sar' : require('./sar')
}
