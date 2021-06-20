import Web3 from 'web3';
import { abdiCode, contractAddress } from "../contrractInfo";


const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abdiCode, contractAddress);

    /*
    const handle = async () => {
      const result = await contract.methods.test().call();
      console.log(result);
    }
  */

export const handleButton = async ( inputvalues, outputvalues ) => {
    console.log('input value',inputvalues);
    console.log('output value', outputvalues);
    //e.preventDefault();
        const accounts = await window.ethereum.send('eth_requestAccounts');
        const account = accounts.result[0];
        const nounce = await web3.eth.getTransactionCount(account);
        console.log("nonce", nounce);
        const tx = await contract.methods.setNumber(inputvalues[0]);
        const gas = await tx.estimateGas({ from: account });
        await tx.send('eth_sendTransaction', { from: account, gas });

        const result = await contract.methods.getTable().call();
        outputvalues[1](result);
        console.log(result);

};