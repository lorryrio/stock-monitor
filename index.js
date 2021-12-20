const { default: axios } = require("axios");
const { hot_list, xueqiuHeaders } = require("./config");
const { checkVolume } = require("./tools");

(async () => {
  for (item of hot_list) {
    const symbol = item.symbol;
    const query = {
      symbol,
      period: "1d"
    };
    const { data: res } = await axios({
      method: 'get',
      url: 'https://stock.xueqiu.com/v5/stock/chart/minute.json',
      params: query,
      headers: xueqiuHeaders,
    });

    console.log(checkVolume(res.data.items));
  }
})()
