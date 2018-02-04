import Vue from 'vue';
import properties from '@/properties';
import axios from 'axios';

const HttpService = {
  queryTransactionAmount: function (doNotIntercept) {
    /*
    * This is just a placeholder method, replace with actual API calls, once the
    * backend is prepared!
    */
    return Vue.http.get('https://httpbin.org/ip', {
    })
  },
  surpriseFunding: function (options) {
    /*
    * This is just a placeholder method, replace with actual API calls, once the
    * backend is prepared!
    */
    let host = 'https://httpbin.org/post';
    if (options.target && options.target.bazoaddress) {
      return axios.post(host, {
        amount: options.amount,
        target: options.target.bazoaddress,
        token: options.surpriseToken
      })
    }
  },
  getBalances: function (accountAddress, host, silent) {
    return axios.get(`${properties.HOST}/accounts/${accountAddress}/balances`)
  },
  queryAccountInfo: function (accountAddresses, host, silent) {
    let hostbase = `${host || properties.HOST}`
    let url = HttpService.formatHost(hostbase) + 'account/'
    return Promise.all(accountAddresses.map(accountAddress => Vue.http.get(url + accountAddress, {
      method: 'GET',
      headers: 'Accept: application/json',
      showProgressBar: !silent
    })))
  },
  queryTxInfo: function (accountAddress, host, doNotIntercept) {
    let hostbase = `${host || properties.HOST}`
    let url = HttpService.formatHost(hostbase) + 'account/'
    return Vue.http.get(url + accountAddress, {
      method: 'GET',
      headers: 'Accept: application/json'
    })
  },
  createFundsTx: function (recipient, sender, amount, txCount, fee, host) {
    let hostbase = `${host || properties.HOST}`
    let url = HttpService.formatHost(hostbase) + 'createFundsTx/'

    return axios.post(`${url}0/${amount}/${fee}/${txCount}/${sender}/${recipient}`);
  },
  sendSignedFundsTx: function (fundsTxHash, signature, host) {
    let hostbase = `${host || properties.HOST}`
    let url = HttpService.formatHost(hostbase) + 'sendFundsTx/'

    return axios.post(`${url}${fundsTxHash}/${signature}`);
  },
  formatHost: function (hostBase) {
    if (hostBase.slice(-1) === '/') {
      return hostBase
    } return hostBase + '/'
  }
};

export default HttpService;
