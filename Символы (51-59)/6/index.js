const symbolKey = Symbol('mySymbol'); 

const obj = {
  [symbolKey]: 'value',
  regularKey: 'regularValue',
  currentTime: function() {
    const now = new Date();
    console.log('Текущее время: ' + now.toLocaleTimeString());
  }
};

obj.currentTime();