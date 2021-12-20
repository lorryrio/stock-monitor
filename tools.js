const checkVolume = (items) => {
  const count = items.length;
  const volume_sum = items[count - 1].volume_compare.volume_sum;

  return items.map((item, index) => {
    const obj = {
      time: (new Date(item.timestamp)).toLocaleString()
    };

    if (index > 0) {
      const beforePrice = items[index - 1].current;
      const currentPrice = item.current;

      if (item.volume > 2 * volume_sum / count) {
        return {
          up: currentPrice > beforePrice ? 1 : -1,
          ...obj
        };
      }
    }

    return {
      up: 0,
      ...obj
    };
  })
}

module.exports = {
  checkVolume
}