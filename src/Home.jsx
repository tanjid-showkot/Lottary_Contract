import { useEffect, useState } from 'react'
import web3 from './web3'
import lottery from './lottery';
import {toast} from "react-hot-toast";

const Home = () => {
    const [manager,setManager]=useState('');
    const [players,setPlayers]=useState([]);
    const [balance,setBalance]=useState('');
    const [value,setValue]=useState('');
    const [accounts,setAccounts]=useState('');
   
    useEffect(()=>{
      const fetchdata= async()=>{
  
        const man=await lottery.methods.manager().call();
        const pal=await lottery.methods.getUser().call();
        const bal= await web3.eth.getBalance(lottery.options.address);
        const acc=await web3.eth.getAccounts();
        setAccounts(acc[0])
        setBalance(bal);
        setPlayers(pal)
        setManager(man);
      }
      fetchdata();
       
      
      
    },[])
    const handleSubmit=async ()=>{
      
      if(parseFloat(value)>0){
        const toastId=toast.loading('waiting for completing the transaction')


        try{
          await lottery.methods.enter().send(
            {
              from: accounts,
              value: web3.utils.toWei(value,'ether')
            });
            toast.success('you are entered',{
              id: toastId,
            });

        }catch(error){
          toast.error('Transaction Failed',{id:toastId})
        }
    }
      else{
        toast.error('Please enter a minimum amount of ether');
        
      }
  
      
    };
    const handleWinner= async()=>{
      
      const toastId=toast.loading('waiting for completing the transaction')
      try{
        await lottery.methods.pickWinner().send({
          from:accounts
        })
        toast.success('Winner picked!!!',{
          id: toastId,
        });

      }catch(error){
        toast.error('Transaction failed',{id: toastId})

      }
      


    };
    return (
        <div>
            <h2>This is the Lottery Contract!</h2>
      <p>This Contract is managed by {manager}</p>
      <p>There are currently {players.length}  people entered competing to win {web3.utils.fromWei(balance,'ether')} ether!</p>
      <hr />
      <div>
        <h3>Want to try your luck!!!</h3>
        <form>
          <label>Amount of ether to enter  </label>
          <input type="number"
          onChange={event=>setValue(event.target.value)}
          />
        </form>
        <h2><button
        onClick={handleSubmit}
        >Enter</button> </h2>
       

      </div>
      <hr />
{
  manager==accounts?(<>
       <div>
        <h4>
          Ready to Pick a Winner!
        </h4>
        <button
        onClick={handleWinner}
        >Pick a winner</button>
      </div>
  </>):null  
}

 


            
        </div>
    );
};

export default Home;