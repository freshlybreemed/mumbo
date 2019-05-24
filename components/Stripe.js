import React, {Component} from 'react'
import axios from 'axios'
class Stripe extends Component {
  constructor(props) {
    super(props);
    this.state = {
        balance: '',
        ticketCount: '',
        tickets: []
    }
    this.getBalance = this.getBalance.bind(this)
    this.getTicketCount = this.getTicketCount.bind(this)
  }
  componentDidMount(){
    this.getBalance()
    this.getTicketCount()
  }
  getBalance(){
    axios({
      url: "https://api.stripe.com/v1/balance", 
      method: "get",
      headers:{
        "Stripe-Version":"2019-05-16",
        "Authorization": "Bearer "+ process.env.STRIPE_SECRET_PROD
      }
  }).then((res)=>{
      console.log(res.data)
      const bal = String(res.data.pending[0].amount)
      console.log(typeof bal)
      const balance = "$"+ bal.slice(2) +"."+ bal.slice(-2)
      this.setState({
        balance: balance
      })
  })
  }

  getTicketCount(){
    axios({
      url: "https://api.stripe.com/v1/charges?limit=100", 
      method: "get",
      headers:{
        "Stripe-Version":"2019-05-16",
        "Authorization": "Bearer sk_live_r3BTZ88DeDWkSSFB7OG4Uotd00zHhoVag0"
      }
  }).then((res)=>{
      console.log(res.data)
      var app=[];
      for (var ticket in res.data.data){
      if (!res.data.data[ticket].refunded)
        app.push(res.data.data[ticket])
      }
      this.setState({
        ticketCount: app.length,
        tickets: app
      })
  })
  }


  render(){
    let array = []
    for(let i = 0; i < this.state.tickets.length; i++) {
      array.push(
        <ul key={i}> {this.state.tickets[i].source.name} </ul>
      );
    }
    console.log(array)
    return (
      <div class="ticket-count">
        <ul>
          <ul>
          Balance: {"$"+ ((this.state.ticketCount)*15)+'.00'}
          </ul>
        </ul>
        <ul>
          Tickets Sold: {this.state.ticketCount}
        </ul>
        {/* {array} */}
      </div>
    )
  }
}
export default Stripe