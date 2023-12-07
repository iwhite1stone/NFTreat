console.log('Inside of Contract Creation');

var contractAddress = INPUT_ARGUMENTS.contractAddress;
var contractABI = INPUT_ARGUMENTS.contractABI;
                     
console.log('contractAddress');
console.log(contractAddress);
console.log('contractABI');
console.log(contractABI);

var tempContract = new web3.eth.Contract(contractABI, contractAddress);
tempContract.defaultChain = 'Mumbai';
console.log('Connected to Contract');

RESPONSE_OBJECT.OUTPUT_ARGUMENTS.web3ContractObject = tempContract;
console.log('Finished Contract Creation');
QueueExecNextActions(QUEUE_ACTION);
