import web3 from './web3';

const address = import.meta.env.VITE_ADDRESS;
const abi = JSON.parse(import.meta.env.VITE_ABI);
// const abi = [
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "manager",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "name": "user",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "pickWinner",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "getUser",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "address[]"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "enter",
//         "outputs": [],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     }
// ]




export default new web3.eth.Contract(abi, address)