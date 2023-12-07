this.web3 = new Web3(
(window.web3 && window.ethereum) ||
new Web3.providers.HttpProvider(this.Contract.endpoint));

//output the current provider to ensure it is working
console.log(web3.currentProvider);

//Enable the Ethereum Package   
window.ethereum.enable();

//Output console information
console.log("enabled ethereum");
console.log("web3::::");
console.log(this.web3);
