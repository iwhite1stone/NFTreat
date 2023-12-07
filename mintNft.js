console.log(INPUT_ARGUMENTS.nftURL);
console.log(INPUT_ARGUMENTS.web3ContractObject);
console.log(INPUT_ARGUMENTS.walletAddress);
console.log(INPUT_ARGUMENTS.nftName);
console.log(INPUT_ARGUMENTS.tokenID)

console.log('Made it to the Build NFT Function');


var theContract = INPUT_ARGUMENTS.web3ContractObject;
var walletAddress = INPUT_ARGUMENTS.walletAddress;
var nftURL = INPUT_ARGUMENTS.nftURL;
var nftName = INPUT_ARGUMENTS.nftName;
var tokenID = INPUT_ARGUMENTS.tokenID;

console.log(walletAddress);
console.log(nftURL);
console.log(nftName);
console.log(tokenID);

theContract.methods.safeMint(walletAddress,tokenID,nftURL).send({from: walletAddress})
.then(function() {
    RESPONSE_OBJECT.OUTPUT_ARGUMENTS.statusMessage = 'finished';
    QueueExecNextActions(QUEUE_ACTION);
});
