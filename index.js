const weightlessRoundRobin =  (array, index) =>  {
  index = index || 0;
  if (!array || !Array.isArray(array)) {
    throw new Error('Please pass array argument to the round robin algorithm.')
  }
  else {
    return () =>  {
      if (index >= array.length) {
        index = 0;
      }
      return array[index++];
    }
  }
}
module.exports = weightlessRoundRobin