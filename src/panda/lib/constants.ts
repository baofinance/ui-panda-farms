import BigNumber from 'bignumber.js/bignumber'
import { PoolType } from '../../contexts/Farms/types'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0x9Ad32bf5DaFe152Cbe027398219611DB4E8753B3',
  uniswapFactoryV2: '0x9Ad32bf5DaFe152Cbe027398219611DB4E8753B3',
  BNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  PNDA: '0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  ETH: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  DAI: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  CAKE: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  ADA: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  DOT: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  XRP: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  LTC: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  LINK: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  DOGE: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
  UNI: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  EOS: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
  ATOM: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
  XTZ: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
  SNX: '0x9ac983826058b8a9c7aa1c9171441191232e8404',
  MKR: '0x5f0da599bb2cccfcf6fdfd7d81743b6020864350',
  COMP: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
  YFI: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  NEAR: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
  ONT: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
  BAT: '0x101d82428437127bf1608f699cd651e6abf9766e',
  VAI: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  PAX: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
  XVS: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
  BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  UST: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  BAND: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
  SFP: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
  ALPHA: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
  SXP: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
  vBTC: '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
  ANKR: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
  TWT: '0x4b0f1812e5df2a09796481ff14017e6005508003',
  LINA: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
  PROM: '0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5',
  ELF: '0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9',
  MATH: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
  AUTO: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  REEF: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  CREAM: '0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888',
  vUSDC: '0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
  SPARTA: '0xe4ae305ebe1abe663f261bc00534067c80ad677c',
  CTK: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
  BURGER: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
  vBUSD: '0x95c78222b3d6e262426483d42cfa53685a67ab9d',
  BRY: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
  STAX: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
  vUSDT: '0xfd5840cd36d94d7229439859c0112a4185bc0255',
  JulD: '0x5a41f637c3f7553dba6ddc2d3ca92641096577ea',
  FOR: '0x658a109c5900bc6d2357c87549b651670e5b0539',
  ANY: '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa',
  HELMET: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
  BIFI: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
  BTCST: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
  BSCX: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  UNFI: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
  BUX: '0x211ffbe424b90e25a15531ca322adf1559779e45',
  MDS: '0x242e46490397acca94ed930f2c4edf16250237fa',
  HGET: '0x794f976c12b2616fa2af3f38a73d3b61fbf68661',
  BAO: '0x47eaf5f54d79d5c2b6537a90a0c58a534ab51c8c',
  FRONT: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
  MIR: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
  ZEE: '0x44754455564474A89358B2C2265883DF993b12F0',
  MATTER: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
  BLK: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
  POLS: '0x7e624fa0e1c4abfd309cc15719b7e2580887f570',
  TLM: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
  UBXT: '0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
  BUNNY: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
  BAMBOO: '0xEF88e0d265dDC8f5E725a4fDa1871F9FE21B11E2',
  RHINO: '0xD2ECa3cff5F09Cfc9C425167d12F0a005Fc97c8c',
}

export const contractAddresses = {
  panda: {
    56: '0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  },
  bamboo: {
    56: '0xEF88e0d265dDC8f5E725a4fDa1871F9FE21B11E2',
  },
  rhino: {
    56: '0xD2ECa3cff5F09Cfc9C425167d12F0a005Fc97c8c',
  },
  masterChef: {
    56: '0x9942cb4c6180820E6211183ab29831641F58577A',
  },
  wbnb: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  wbnbPrice: {
    56: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
  },
  bambooMaker: {
    56: '0xe1a2CD535C4e7d9C2C187e529f9f491cceA41e07',
  },
  pndaPrice: {
    56: '',
  },
}
//
/*
BAO Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export interface SupportedPool {
  pid: number
  lpAddresses: {
    56: string
  }
  tokenAddresses: {
    56: string
  }
  tokenDecimals: number
  name: string
  symbol: string
  tokenSymbol: string
  icon: string
  refUrl: string
  poolType?: PoolType
}

export const supportedPools: SupportedPool[] = [
  {
    pid: 3,
    lpAddresses: {
      56: '0x97f6665ac6b2d7C3d5a2aD11d7a779787F617ce0',
    },
    tokenAddresses: {
      56: '0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
    },
    tokenDecimals: 18,
    name: 'Panda Party',
    symbol: 'PNDA-BNB',
    tokenSymbol: 'PNDA',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  },
  {
    pid: 0,
    lpAddresses: {
      56: '0x059fC92273CdF0809ba45f199E0a12d8899Ab402',
    },
    tokenAddresses: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    tokenDecimals: 18,
    name: 'PNDA-ETH',
    symbol: 'PNDA-ETH',
    tokenSymbol: 'PNDA',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  },
  {
    pid: 1,
    lpAddresses: {
      56: '0xbe01056Bc0e29eb28c9c357c227e320Afd12776C',
    },
    tokenAddresses: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    tokenDecimals: 18,
    name: 'PNDA-USDC',
    symbol: 'PNDA-USDC',
    tokenSymbol: 'PNDA',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  },
  {
    pid: 2,
    lpAddresses: {
      56: '0x0810E97C9FA4cCCebe559509edf74b650B432dcE',
    },
    tokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    tokenDecimals: 18,
    name: 'PNDA-BUSD',
    symbol: 'PNDA-BUSD',
    tokenSymbol: 'PNDA',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  },
  {
    pid: 4,
    lpAddresses: {
      56: '0x7c8ba77476a3e713b27e7c1450227a0ff3411616',
    },
    tokenAddresses: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    tokenDecimals: 18,
    name: 'PNDA-DAI',
    symbol: 'PNDA-DAI',
    tokenSymbol: 'PNDA',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47DcC83a14aD53Ed1f13d3CaE8AA4115f07557C0',
  },
  {
    pid: 5,
    lpAddresses: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    tokenAddresses: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    tokenDecimals: 18,
    name: 'BNB',
    symbol: 'BNB',
    tokenSymbol: 'BNB',
    icon: '/wrap.png',
    refUrl: 'https://pandaswap.xyz/#/swap',
  },
  {
    pid: 6,
    lpAddresses: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    tokenAddresses: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    tokenDecimals: 18,
    name: 'CAKE',
    symbol: 'CAKE',
    tokenSymbol: 'CAKE',
    icon: '/cakey.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  {
    pid: 24,
    lpAddresses: {
      56: '0x640E2c0EcCd822F79951b6E63A44786c475E75b4',
    },
    tokenAddresses: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    tokenDecimals: 18,
    name: 'ETH-BNB',
    symbol: 'ETH-BNB',
    tokenSymbol: 'ETH',
    icon: '/eth.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  {
    pid: 8,
    lpAddresses: {
      56: '0x9c33Ef062513F68672c712cc28673e6861c3B88a',
    },
    tokenAddresses: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    tokenDecimals: 18,
    name: 'Cardano Caviar',
    symbol: 'ADA-BNB',
    tokenSymbol: 'ADA',
    icon: '/caviar.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  },
  {
    pid: 9,
    lpAddresses: {
      56: '0x08857e65ca9771cc7E858F8feDC8a3e3C9b9ecE6',
    },
    tokenAddresses: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    tokenDecimals: 18,
    name: 'Polka Poke',
    symbol: 'DOT-BNB',
    tokenSymbol: 'DOT',
    icon: '/poke.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  },
  {
    pid: 10,
    lpAddresses: {
      56: '0x71252b4704b99fc37c141b2042eD25ffE0005b7D',
    },
    tokenAddresses: {
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    },
    tokenDecimals: 18,
    name: 'Ripple Rice Bowl',
    symbol: 'XRP-BNB',
    tokenSymbol: 'XRP',
    icon: '/rice-bowl.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  },
  {
    pid: 11,
    lpAddresses: {
      56: '0x4524E2b380e590DA205eB923F69865F5f7d54E48',
    },
    tokenAddresses: {
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    },
    tokenDecimals: 18,
    name: 'Lite(coin) Snacker',
    symbol: 'LTC-BNB',
    tokenSymbol: 'LTC',
    icon: '/snackers.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  },
  {
    pid: 12,
    lpAddresses: {
      56: '0x854ea3E74eED7C6cE1372dbF78d0aC1fE815Ac20',
    },
    tokenAddresses: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    tokenDecimals: 18,
    name: 'Link Lunch',
    symbol: 'LINK-BNB',
    tokenSymbol: 'LINK',
    icon: '/sandwich.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  },
  {
    pid: 13,
    lpAddresses: {
      56: '0xAcAeb6859ed08210E05df247e1DC3a2ED4D5FBCB',
    },
    tokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    tokenDecimals: 18,
    name: 'BUSD BLT',
    symbol: 'BUSD-BNB',
    tokenSymbol: 'BUSD',
    icon: '/blt.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  {
    pid: 14,
    lpAddresses: {
      56: '0xfF1E8a21a87b115d73f8Fc9eC9dE29B5276F7E6c',
    },
    tokenAddresses: {
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    tokenDecimals: 8,
    name: 'Dogenuts',
    symbol: 'DOGE-BNB',
    tokenSymbol: 'DOGE',
    icon: '/donut.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xba2ae424d960c26247dd6c32edc70b295c744c43',
  },
  {
    pid: 15,
    lpAddresses: {
      56: '0xA9adA7E53618eB903d6d1d5b94F58F813A712F50',
    },
    tokenAddresses: {
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    tokenDecimals: 18,
    name: 'Uni Unagi',
    symbol: 'UNI-BNB',
    tokenSymbol: 'UNI',
    icon: '/unagi.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  },
  {
    pid: 16,
    lpAddresses: {
      56: '0x6E410AC35e80B64106f0FeE7De4a1E652a9F5EB4',
    },
    tokenAddresses: {
      56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
    },
    tokenDecimals: 18,
    name: 'EOS Egg Rolls',
    symbol: 'EOS-BNB',
    tokenSymbol: 'EOS',
    icon: '/egg-rolls.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
  },
  {
    pid: 17,
    lpAddresses: {
      56: '0x37550AAC6aB58F3E2Ddb7cD9b88E9A46411a5E4A',
    },
    tokenAddresses: {
      56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
    },
    tokenDecimals: 18,
    name: 'Cosmos Custard',
    symbol: 'ATOM-BNB',
    tokenSymbol: 'ATOM',
    icon: '/custard.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x0eb3a705fc54725037cc9e008bdede697f62f335',
  },
  {
    pid: 18,
    lpAddresses: {
      56: '0x3C439733cb83e7894c9aD7a98aF57f106Ab0cEF8',
    },
    tokenAddresses: {
      56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    },
    tokenDecimals: 18,
    name: 'Tezos Tempura',
    symbol: 'XTZ-BNB',
    tokenSymbol: 'XTZ',
    icon: '/tempura.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x16939ef78684453bfdfb47825f8a5f714f12623a',
  },
  {
    pid: 19,
    lpAddresses: {
      56: '0x2D79CEE2Be6E918cf955A9b242017814D5522719',
    },
    tokenAddresses: {
      56: '0x9ac983826058b8a9c7aa1c9171441191232e8404',
    },
    tokenDecimals: 18,
    name: 'Synthetix Snacks',
    symbol: 'SNX-BNB',
    tokenSymbol: 'SNX',
    icon: '/snack.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x9ac983826058b8a9c7aa1c9171441191232e8404',
  },
  {
    pid: 20,
    lpAddresses: {
      56: '0xe79f07C4EB5A76b1ad185A373f59C92CDA3A2880',
    },
    tokenAddresses: {
      56: '0x5f0da599bb2cccfcf6fdfd7d81743b6020864350',
    },
    tokenDecimals: 18,
    name: 'Maker Mooncake',
    symbol: 'MKR-BNB',
    tokenSymbol: 'MKR',
    icon: '/moon-cake.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x5f0da599bb2cccfcf6fdfd7d81743b6020864350',
  },
  {
    pid: 21,
    lpAddresses: {
      56: '0xa5aCC0095f4bB60B9ED0881bdf0Ef0DEf83dc73A',
    },
    tokenAddresses: {
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    },
    tokenDecimals: 18,
    name: 'Compound Congee',
    symbol: 'COMP-BNB',
    tokenSymbol: 'COMP',
    icon: '/congee.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
  },
  {
    pid: 22,
    lpAddresses: {
      56: '0x6bf3E3eDb0e81888F4F9641Aef25abA815Ef593a',
    },
    tokenAddresses: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    tokenDecimals: 18,
    name: 'Dai Dan Tat',
    symbol: 'DAI-BNB',
    tokenSymbol: 'DAI',
    icon: '/egg-tart.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  },
  {
    pid: 23,
    lpAddresses: {
      56: '0xE17642C43da3fA445C441680194331Be984bC714',
    },
    tokenAddresses: {
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    },
    tokenDecimals: 18,
    name: 'YFI Youtiao',
    symbol: 'YFI-BNB',
    tokenSymbol: 'YFI',
    icon: '/churros.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  },
  {
    pid: 7,
    lpAddresses: {
      56: '0x835fAAC7fDdcc18FFA5D31B57Fa4F573cB4B3862',
    },
    tokenAddresses: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    tokenDecimals: 18,
    name: 'Pancakes and Syrup',
    symbol: 'CAKE-BNB',
    tokenSymbol: 'CAKE',
    icon: '/maple-syrup.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  {
    pid: 25,
    lpAddresses: {
      56: '0x83a1Bd9c6Ac29C7CE15331Ca6D7A38b0410Ab549',
    },
    tokenAddresses: {
      56: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
    },
    tokenDecimals: 18,
    name: 'Near Nuggets',
    symbol: 'NEAR-BNB',
    tokenSymbol: 'NEAR',
    icon: '/nuggets.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
  },
  {
    pid: 26,
    lpAddresses: {
      56: '0xCaAee34377a468504e92614b6e69Bd5269EBAaa9',
    },
    tokenAddresses: {
      56: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    },
    tokenDecimals: 18,
    name: 'Ontology Orange Chicken',
    symbol: 'ONT-BNB',
    tokenSymbol: 'ONT',
    icon: '/orange-chicken.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
  },
  {
    pid: 27,
    lpAddresses: {
      56: '0x0774f886B3E15d11dDDA745C7dcDe125128e34E1',
    },
    tokenAddresses: {
      56: '0x101d82428437127bf1608f699cd651e6abf9766e',
    },
    tokenDecimals: 18,
    name: 'Brave Braised Pork',
    symbol: 'BAT-BNB',
    tokenSymbol: 'BAT',
    icon: '/beef.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x101d82428437127bf1608f699cd651e6abf9766e',
  },
  {
    pid: 28,
    lpAddresses: {
      56: '0x9040248eDBD5bfd105B287658536AD2b87dD86D0',
    },
    tokenAddresses: {
      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    },
    tokenDecimals: 18,
    name: 'Vai Pie',
    symbol: 'VAI-BNB',
    tokenSymbol: 'VAI',
    icon: '/pie.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  },
  {
    pid: 29,
    lpAddresses: {
      56: '0x60816ccec71161d69ee883f2be4522622d4a1cc9',
    },
    tokenAddresses: {
      56: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
    },
    tokenDecimals: 18,
    name: 'Paxos Pad Thai',
    symbol: 'PAX-BNB',
    tokenSymbol: 'PAX',
    icon: '/pad-thai.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
  },
  {
    pid: 30,
    lpAddresses: {
      56: '0x7E5c6207A3eC0613227ecc00537Afd5607f74a37',
    },
    tokenAddresses: {
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    tokenDecimals: 18,
    name: 'Venus Venison',
    symbol: 'XVS-BNB',
    tokenSymbol: 'XVS',
    icon: '/ham.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
  },
  {
    pid: 31,
    lpAddresses: {
      56: '0xB793e714d66dF64bc86f19A9AA2332f4C064A929',
    },
    tokenAddresses: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    tokenDecimals: 18,
    name: 'BTCB Bubble Tea',
    symbol: 'BTCB-BNB',
    tokenSymbol: 'BTCB',
    icon: '/bubble-tea.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  {
    pid: 32,
    lpAddresses: {
      56: '0xcee10aE4a3fFdbf428e848CeFA37A9aCdF6388B8',
    },
    tokenAddresses: {
      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
    },
    tokenDecimals: 18,
    name: 'UST-BUSD',
    symbol: 'UST-BUSD',
    tokenSymbol: 'UST',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  },
  {
    pid: 33,
    lpAddresses: {
      56: '0xc2bf2711e5c2C724CC00F6Adb38f3F757653f468',
    },
    tokenAddresses: {
      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
    },
    tokenDecimals: 18,
    name: 'UST-BNB',
    symbol: 'UST-BNB',
    tokenSymbol: 'UST',
    icon: '/pnda.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  },
  {
    pid: 34,
    lpAddresses: {
      56: '0x967432434B2869a87e5be8393039f356514caE3a',
    },
    tokenAddresses: {
      56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    },
    tokenDecimals: 18,
    name: 'Band Bird Nest Soup',
    symbol: 'BAND-BNB',
    tokenSymbol: 'BAND',
    icon: '/bird-nest.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
  },
  {
    pid: 35,
    lpAddresses: {
      56: '0x4669371979FE79F83c276B2e9287A73aF00c9b26',
    },
    tokenAddresses: {
      56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
    },
    tokenDecimals: 18,
    name: 'SafePal Stew',
    symbol: 'SFP-BNB',
    tokenSymbol: 'SFP',
    icon: '/stew.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
  },
  {
    pid: 36,
    lpAddresses: {
      56: '0x65F08aeF277dD40154f75fc2A0cAe0933eB2F166',
    },
    tokenAddresses: {
      56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    },
    tokenDecimals: 18,
    name: 'Alpha Apple Pie',
    symbol: 'ALPHA-BNB',
    tokenSymbol: 'ALPHA',
    icon: '/pie.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xa1faa113cbe53436df28ff0aee54275c13b40975',
  },
  {
    pid: 37,
    lpAddresses: {
      56: '0xa980C3B5D290c6C7050Dc54f4cc4dB00Aa6Ab982',
    },
    tokenAddresses: {
      56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
    },
    tokenDecimals: 18,
    name: 'SXP Suan La Tang',
    symbol: 'SXP-BNB',
    tokenSymbol: 'SXP',
    icon: '/hotsour.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
  },
  {
    pid: 38,
    lpAddresses: {
      56: '0x2058d400f043Da17e622011492ca5C1aEdBa6Ffc',
    },
    tokenAddresses: {
      56: '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
    },
    tokenDecimals: 8,
    name: 'vBTC Tea',
    symbol: 'vBTC-BNB',
    tokenSymbol: 'vBTC',
    icon: '/tea.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
  },
  {
    pid: 39,
    lpAddresses: {
      56: '0x33B9B74F6031D9117d77AfA5977490741F3dC546',
    },
    tokenAddresses: {
      56: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
    },
    tokenDecimals: 18,
    name: 'Ankr Almond Soo Guy',
    symbol: 'ANKR-BNB',
    tokenSymbol: 'ANKR',
    icon: '/fried-chicken.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf307910a4c7bbc79691fd374889b36d8531b08e3',
  },
  {
    pid: 40,
    lpAddresses: {
      56: '0x77ebF4CFaAd95214cF54E24D6E599a2f46E7CEC8',
    },
    tokenAddresses: {
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    },
    tokenDecimals: 18,
    name: 'Trust Wallet Turtle Soup',
    symbol: 'TWT-BNB',
    tokenSymbol: 'TWT',
    icon: '/turtle.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x4b0f1812e5df2a09796481ff14017e6005508003',
  },
  {
    pid: 41,
    lpAddresses: {
      56: '0x5B048F9F00D13bDF900480e12Fd017B30e32C2CE',
    },
    tokenAddresses: {
      56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
    },
    tokenDecimals: 18,
    name: 'Linear Lime',
    symbol: 'LINA-BNB',
    tokenSymbol: 'LINA',
    icon: '/lime.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x762539b45a1dcce3d36d080f74d1aed37844b878',
  },
  {
    pid: 42,
    lpAddresses: {
      56: '0xF4919930F1D7Ea42Ec33421aA41D424C174Ae873',
    },
    tokenAddresses: {
      56: '0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5',
    },
    tokenDecimals: 18,
    name: 'Prometeus Pineapple',
    symbol: 'PROM-BNB',
    tokenSymbol: 'PROM',
    icon: '/pineapple.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5',
  },
  {
    pid: 43,
    lpAddresses: {
      56: '0x163c979bae62d89A5bBC4875cCB562c0F10b9a63',
    },
    tokenAddresses: {
      56: '0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9',
    },
    tokenDecimals: 18,
    name: 'Elf Eggplant (Roasted)',
    symbol: 'ELF-BNB',
    tokenSymbol: 'ELF',
    icon: '/eggplant.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9',
  },
  {
    pid: 44,
    lpAddresses: {
      56: '0x205566d5e3F277A3373CC865E36DaD58B447b1a8',
    },
    tokenAddresses: {
      56: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
    },
    tokenDecimals: 18,
    name: 'Math Mapo Tofu',
    symbol: 'MATH-BNB',
    tokenSymbol: 'MATH',
    icon: '/mapo-tofu.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf218184af829cf2b0019f8e6f0b2423498a36983',
  },
  {
    pid: 45,
    lpAddresses: {
      56: '0x470be64E617ad5561F379A0a24313513d6B05546',
    },
    tokenAddresses: {
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    tokenDecimals: 18,
    name: 'Auto Avocado',
    symbol: 'AUTO-BNB',
    tokenSymbol: 'AUTO',
    icon: '/avocado.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xa184088a740c695e156f91f5cc086a06bb78b827',
  },
  {
    pid: 46,
    lpAddresses: {
      56: '0xFaf88b1fd8895CE109a927011A3184510931b155',
    },
    tokenAddresses: {
      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    },
    tokenDecimals: 18,
    name: 'Reef Roast Chicken',
    symbol: 'REEF-BNB',
    tokenSymbol: 'REEF',
    icon: '/roastchicken.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  },
  {
    pid: 47,
    lpAddresses: {
      56: '0xf021a3000FFde821c36d21524e54adf6568AD547',
    },
    tokenAddresses: {
      56: '0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888',
    },
    tokenDecimals: 18,
    name: 'Cream Cupcakes',
    symbol: 'CREAM-BNB',
    tokenSymbol: 'CREAM',
    icon: '/cupcake.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888',
  },
  {
    pid: 48,
    lpAddresses: {
      56: '0x626E3f0B56B88abFC43c55D4B0A7cb6e9B221CEb',
    },
    tokenAddresses: {
      56: '0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
    },
    tokenDecimals: 8,
    name: 'vUSDC Crab Legs',
    symbol: 'vUSDC-BNB',
    tokenSymbol: 'vUSDC',
    icon: '/crab.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
  },
  {
    pid: 49,
    lpAddresses: {
      56: '0xC20Bed20438Ae1F65BC3863B46593d9311340d03',
    },
    tokenAddresses: {
      56: '0xe4ae305ebe1abe663f261bc00534067c80ad677c',
    },
    tokenDecimals: 18,
    name: 'Spartan Sausage',
    symbol: 'SPARTA-BNB',
    tokenSymbol: 'SPARTA',
    icon: '/sausage.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xe4ae305ebe1abe663f261bc00534067c80ad677c',
  },
  {
    pid: 50,
    lpAddresses: {
      56: '0x4bc50a90df02e8b0742cEfc320ee7c3626443c13',
    },
    tokenAddresses: {
      56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
    },
    tokenDecimals: 6,
    name: 'CertiK Cocktail',
    symbol: 'CTK-BNB',
    tokenSymbol: 'CTK',
    icon: '/cocktail.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
  },
  {
    pid: 51,
    lpAddresses: {
      56: '0xc345EC2878B2b96c0ddA6eA77218FD4DB7572b70',
    },
    tokenAddresses: {
      56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
    },
    tokenDecimals: 18,
    name: 'Burger and Fries',
    symbol: 'BURGER-BNB',
    tokenSymbol: 'BURGER',
    icon: '/fried-potatoes.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
  },
  {
    pid: 52,
    lpAddresses: {
      56: '0x6Da474F985640E18FA181cB4a2298D721cE9CCAF',
    },
    tokenAddresses: {
      56: '0x95c78222b3d6e262426483d42cfa53685a67ab9d',
    },
    tokenDecimals: 8,
    name: 'vBUSD Udon',
    symbol: 'vBUSD-BNB',
    tokenSymbol: 'vBUSD',
    icon: '/instant-noodles.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x95c78222b3d6e262426483d42cfa53685a67ab9d',
  },
  {
    pid: 53,
    lpAddresses: {
      56: '0x16934ec7Be6f6ca8189Cd1727ffD494C4f4045df',
    },
    tokenAddresses: {
      56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
    },
    tokenDecimals: 18,
    name: 'Very Berry Fondue',
    symbol: 'BRY-BNB',
    tokenSymbol: 'BRY',
    icon: '/fondue.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
  },
  {
    pid: 54,
    lpAddresses: {
      56: '0x866C5aAa21164Da0154B1eA57A85703eD7587DE1',
    },
    tokenAddresses: {
      56: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
    },
    tokenDecimals: 18,
    name: 'Stax Salad Rolls',
    symbol: 'STAX-BNB',
    tokenSymbol: 'STAX',
    icon: '/salad-rolls.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
  },
  {
    pid: 55,
    lpAddresses: {
      56: '0x076443CB456B1b3cF137ba97B0aadfD54b51A91c',
    },
    tokenAddresses: {
      56: '0xfd5840cd36d94d7229439859c0112a4185bc0255',
    },
    tokenDecimals: 8,
    name: 'vUSDT Chili',
    symbol: 'vUSDT-BNB',
    tokenSymbol: 'vUSDT',
    icon: '/chili.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xfd5840cd36d94d7229439859c0112a4185bc0255',
  },
  {
    pid: 56,
    lpAddresses: {
      56: '0x910c6754F7AE9ddC7327207a5D99C1F6cA13F113',
    },
    tokenAddresses: {
      56: '0x5a41f637c3f7553dba6ddc2d3ca92641096577ea',
    },
    tokenDecimals: 18,
    name: 'JulD Jifan',
    symbol: 'JulD-BNB',
    tokenSymbol: 'JulD',
    icon: '/jifan.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x5a41f637c3f7553dba6ddc2d3ca92641096577ea',
  },
  {
    pid: 57,
    lpAddresses: {
      56: '0xb99e484d6AD7d8CB2Dc6e97489A328E9D49b0bCc',
    },
    tokenAddresses: {
      56: '0x658a109c5900bc6d2357c87549b651670e5b0539',
    },
    tokenDecimals: 18,
    name: 'Force Fortune Cookies',
    symbol: 'FOR-BNB',
    tokenSymbol: 'FOR',
    icon: '/fortune-cookie.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x658a109c5900bc6d2357c87549b651670e5b0539',
  },
  {
    pid: 58,
    lpAddresses: {
      56: '0x8C5B0E0e8d0DB85a3AEc2F1b8C2B8b740523f75B',
    },
    tokenAddresses: {
      56: '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa',
    },
    tokenDecimals: 18,
    name: 'Any Anchovies',
    symbol: 'ANY-BNB',
    tokenSymbol: 'ANY',
    icon: '/anchovy.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa',
  },
  {
    pid: 59,
    lpAddresses: {
      56: '0x1ec894788Cc06c0a3c657b33Fb38F401E2eCb972',
    },
    tokenAddresses: {
      56: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
    },
    tokenDecimals: 18,
    name: 'Helmet Hot Pot',
    symbol: 'HELMET-BNB',
    tokenSymbol: 'HELMET',
    icon: '/hot.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
  },
  {
    pid: 60,
    lpAddresses: {
      56: '0xdc622DC595b9f561E9A1C368448D2C5D63E53eab',
    },
    tokenAddresses: {
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    },
    tokenDecimals: 18,
    name: 'Beefy Chow Fun',
    symbol: 'BIFI-BNB',
    tokenSymbol: 'BIFI',
    icon: '/beef-chow-fun.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
  },
  {
    pid: 61,
    lpAddresses: {
      56: '0xfA142aCBA2A39DC2a0Cc606EE4D1fAd4072B75ce',
    },
    tokenAddresses: {
      56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
    },
    tokenDecimals: 17,
    name: 'BTCST Bacon',
    symbol: 'BTCST-BNB',
    tokenSymbol: 'BTCST',
    icon: '/bacon.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x78650b139471520656b9e7aa7a5e9276814a38e9',
  },
  {
    pid: 62,
    lpAddresses: {
      56: '0x216EE05E449349E6b873a7e7DDaFBB0c362776b7',
    },
    tokenAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    tokenDecimals: 18,
    name: 'BSCX Black Sesame Soup',
    symbol: 'BSCX-BNB',
    tokenSymbol: 'BSCX',
    icon: '/black-sesame-soup.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  },
  {
    pid: 63,
    lpAddresses: {
      56: '0x1D62c3a2aF69B42F5779274cA7E4151Efb1EC3cB',
    },
    tokenAddresses: {
      56: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
    },
    tokenDecimals: 18,
    name: 'Unifi Fried Chicken',
    symbol: 'UNFI-BNB',
    tokenSymbol: 'UNFI',
    icon: '/fried-chicken.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
  },
  {
    pid: 64,
    lpAddresses: {
      56: '0xfdE31036f39299a6919CDea8e6D7cc58203d3779',
    },
    tokenAddresses: {
      56: '0x211ffbe424b90e25a15531ca322adf1559779e45',
    },
    tokenDecimals: 18,
    name: 'Bux Brochette',
    symbol: 'BUX-BNB',
    tokenSymbol: 'BUX',
    icon: '/brochette.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x211ffbe424b90e25a15531ca322adf1559779e45',
  },
  {
    pid: 65,
    lpAddresses: {
      56: '0xa07db0a15d2815f409BA6c6B9EDc0FBD6Fc31cBb',
    },
    tokenAddresses: {
      56: '0x242e46490397acca94ed930f2c4edf16250237fa',
    },
    tokenDecimals: 18,
    name: 'Midas Matcha Tea',
    symbol: 'MDS-BNB',
    tokenSymbol: 'MDS',
    icon: '/matcha-tea.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x242e46490397acca94ed930f2c4edf16250237fa',
  },
  {
    pid: 66,
    lpAddresses: {
      56: '0x9fe458505bc0236998eCEd9857356B89E78993e3',
    },
    tokenAddresses: {
      56: '0x794f976c12b2616fa2af3f38a73d3b61fbf68661',
    },
    tokenDecimals: 6,
    name: 'Hedget Herbal Tea',
    symbol: 'HGET-BNB',
    tokenSymbol: 'HGET',
    icon: '/herbal-tea.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x794f976c12b2616fa2af3f38a73d3b61fbf68661',
  },
  {
    pid: 67,
    lpAddresses: {
      56: '0x8DA93dDB14e0AeDd116a75bECaf1723703261c2a',
    },
    tokenAddresses: {
      56: '0x47eaf5f54d79d5c2b6537a90a0c58a534ab51c8c',
    },
    tokenDecimals: 18,
    name: 'Bao Party',
    symbol: 'BAO-BNB',
    tokenSymbol: 'BAO',
    icon: '/bao.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x47eaf5f54d79d5c2b6537a90a0c58a534ab51c8c',
  },
  {
    pid: 68,
    lpAddresses: {
      56: '0x4e0dF48A98828b0A67458FD8Ac1575D95bFa4b2a',
    },
    tokenAddresses: {
      56: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
    },
    tokenDecimals: 18,
    name: 'Front Frog Legs',
    symbol: 'FRONT-BNB',
    tokenSymbol: 'FRONT',
    icon: '/frog-prince.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x928e55dab735aa8260af3cedada18b5f70c72f1b',
  },
  {
    pid: 69,
    lpAddresses: {
      56: '0x81900Af6F65E10CBa8F1301f018b6730daa6A345',
    },
    tokenAddresses: {
      56: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
    },
    tokenDecimals: 18,
    name: 'Mirror Miantiao',
    symbol: 'MIR-BNB',
    tokenSymbol: 'MIR',
    icon: '/miantiao.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
  },
  {
    pid: 70,
    lpAddresses: {
      56: '0x6eDC6C69a18d5446f96F13cA3B68eb2BDECAd2Ad',
    },
    tokenAddresses: {
      56: '0x44754455564474A89358B2C2265883DF993b12F0',
    },
    tokenDecimals: 18,
    name: 'Zee Zucchini',
    symbol: 'ZEE-BNB',
    tokenSymbol: 'ZEE',
    icon: '/zucchini.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x44754455564474A89358B2C2265883DF993b12F0',
  },
  {
    pid: 71,
    lpAddresses: {
      56: '0xb4dc9B104aa0504A148c39529974eF7A13413B80',
    },
    tokenAddresses: {
      56: '0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
    },
    tokenDecimals: 18,
    name: 'Matter Mystery Stew',
    symbol: 'MATTER-BNB',
    tokenSymbol: 'MATTER',
    icon: '/mysterystew.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f',
  },
  {
    pid: 72,
    lpAddresses: {
      56: '0x2A9fD86A68bcF5d056a8Fee2106D922924CE92E6',
    },
    tokenAddresses: {
      56: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
    },
    tokenDecimals: 6,
    name: 'BLink Brownie',
    symbol: 'BLK-BNB',
    tokenSymbol: 'BLK',
    icon: '/brownie.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
  },
  {
    pid: 73,
    lpAddresses: {
      56: '0xdb8aD7E2a5B19D7449a2d6BF231467a62141734f',
    },
    tokenAddresses: {
      56: '0x7e624fa0e1c4abfd309cc15719b7e2580887f570',
    },
    tokenDecimals: 18,
    name: 'Polkastarter Pot Stickers',
    symbol: 'POLS-BNB',
    tokenSymbol: 'POLS',
    icon: '/potstickers.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x7e624fa0e1c4abfd309cc15719b7e2580887f570',
  },
  {
    pid: 74,
    lpAddresses: {
      56: '0x30B284AF8D0e1D07cEbe6dF95BF3d904B52a49B3',
    },
    tokenAddresses: {
      56: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
    },
    tokenDecimals: 4,
    name: 'Alien Worlds Octopus',
    symbol: 'TLM-BNB',
    tokenSymbol: 'TLM',
    icon: '/octopus.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x2222227e22102fe3322098e4cbfe18cfebd57c95',
  },
  {
    pid: 75,
    lpAddresses: {
      56: '0xD661f50A548D90746644179401C2D2043D55728D',
    },
    tokenAddresses: {
      56: '0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
    },
    tokenDecimals: 18,
    name: 'UpBots Bento Box',
    symbol: 'UBXT-BNB',
    tokenSymbol: 'UBXT',
    icon: '/bento.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
  },
  {
    pid: 76,
    lpAddresses: {
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenAddresses: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    tokenDecimals: 18,
    name: 'Pancakes and Syrup',
    symbol: 'CAKE-BNB',
    tokenSymbol: 'CAKE',
    poolType: PoolType.CAKE,
    icon: '/maple-syrup.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  {
    pid: 77,
    lpAddresses: {
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    tokenDecimals: 18,
    name: 'BUSD BLT',
    symbol: 'BUSD-BNB',
    tokenSymbol: 'BUSD',
    poolType: PoolType.CAKE,
    icon: '/blt.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  {
    pid: 78,
    lpAddresses: {
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenAddresses: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    tokenDecimals: 18,
    name: 'ETH-BNB',
    symbol: 'ETH-BNB',
    tokenSymbol: 'ETH',
    poolType: PoolType.CAKE,
    icon: '/eth.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  {
    pid: 79,
    lpAddresses: {
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenAddresses: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    tokenDecimals: 18,
    name: 'BTCB Bubble Tea',
    symbol: 'BTCB-BNB',
    tokenSymbol: 'BTCB',
    poolType: PoolType.CAKE,
    icon: '/bubble-tea.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  {
    pid: 80,
    lpAddresses: {
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenAddresses: {
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    tokenDecimals: 18,
    name: 'USDT-BUSD',
    symbol: 'USDT-BUSD',
    tokenSymbol: 'USDT',
    poolType: PoolType.CAKE,
    icon: '/binance.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955',
  },
  {
    pid: 81,
    lpAddresses: {
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    tokenAddresses: {
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    tokenDecimals: 18,
    name: 'USDT Tofu',
    symbol: 'USDT-BNB',
    tokenSymbol: 'USDT',
    poolType: PoolType.CAKE,
    icon: '/tofu.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955',
  },
  {
    pid: 82,
    lpAddresses: {
      56: '0x5aFEf8567414F29f0f927A0F2787b188624c10E2',
    },
    tokenAddresses: {
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    tokenDecimals: 18,
    name: 'Bunny Bacon',
    symbol: 'BUNNY-BNB',
    tokenSymbol: 'BUNNY',
    poolType: PoolType.CAKE,
    icon: '/bacon.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
  },
  {
    pid: 83,
    lpAddresses: {
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    tokenAddresses: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    tokenDecimals: 18,
    name: 'Polka Poke',
    symbol: 'DOT-BNB',
    tokenSymbol: 'DOT',
    poolType: PoolType.CAKE,
    icon: '/poke.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  },
  {
    pid: 84,
    lpAddresses: {
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    tokenAddresses: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    tokenDecimals: 18,
    name: 'USDC Crunch',
    symbol: 'USDC-BUSD',
    tokenSymbol: 'USDC',
    poolType: PoolType.CAKE,
    icon: '/cereals.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  },
  {
    pid: 85,
    lpAddresses: {
      56: '0x133ee93FE93320e1182923E1a640912eDE17C90C',
    },
    tokenAddresses: {
      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    },
    tokenDecimals: 18,
    name: 'Vai Pie',
    symbol: 'VAI-BUSD',
    tokenSymbol: 'VAI',
    poolType: PoolType.CAKE,
    icon: '/pie.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  },
  {
    pid: 86,
    lpAddresses: {
      56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    },
    tokenAddresses: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    tokenDecimals: 18,
    name: 'Link Lunch',
    symbol: 'LINK-BNB',
    tokenSymbol: 'LINK',
    poolType: PoolType.CAKE,
    icon: '/sandwich.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  },
  {
    pid: 87,
    lpAddresses: {
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    tokenAddresses: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    tokenDecimals: 18,
    name: 'Dai Pie (Italian)',
    symbol: 'DAI-BUSD',
    tokenSymbol: 'DAI',
    poolType: PoolType.CAKE,
    icon: '/pizza.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  },
  {
    pid: 88,
    lpAddresses: {
      56: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86',
    },
    tokenAddresses: {
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    },
    tokenDecimals: 18,
    name: 'Ripple Rice Bowl',
    symbol: 'XRP-BNB',
    tokenSymbol: 'XRP',
    poolType: PoolType.CAKE,
    icon: '/rice-bowl.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  },
  {
    pid: 89,
    lpAddresses: {
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
    },
    tokenAddresses: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    tokenDecimals: 18,
    name: 'Cardano Caviar',
    symbol: 'ADA-BNB',
    tokenSymbol: 'ADA',
    poolType: PoolType.CAKE,
    icon: '/caviar.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  },
  {
    pid: 90,
    lpAddresses: {
      56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
    },
    tokenAddresses: {
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    tokenDecimals: 18,
    name: 'Uni Unagi',
    symbol: 'UNI-BNB',
    tokenSymbol: 'UNI',
    poolType: PoolType.CAKE,
    icon: '/unagi.png',
    refUrl:
      'https://pandaswap.xyz/#/swap?outputCurrency=0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  },
]
