import React, {Component} from 'react'
import axios from 'axios'
class Stripe extends Component {
  constructor(props) {
    super(props);
    this.state = {
        balance: '',
        ticketCount: '',
        weekendCount: 0,
        gaCount: 0,
        lastCount: 0,
        tickets: [],
        ticketDayCount: 0
    }
    this.getBalance = this.getBalance.bind(this)
    this.getTicketCount = this.getTicketCount.bind(this)
    this.recentSales = this.recentSales.bind(this)
  }
  componentDidMount(){
    this.getBalance()
    this.getTicketCount()
  }

  recentSales(){
    console.log('ticketsSold')
    var date = new Date().getTime()/1000
    var yesterday = date - 86400
    var ticketsSold = 0
    this.state.tickets.forEach((ticket)=>{
      if (ticket.created > yesterday && ticket.created < date)
      {
        ticketsSold++
     }
    })
    this.setState({ticketDayCount: ticketsSold})
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
      const bal = String(res.data.pending[0].amount)
      const balance = "$"+ bal.slice(2) +"."+ bal.slice(-2)
      this.setState({
        balance
      })
  })
  }

  getTicketCount(){
    axios({
      url: "https://api.stripe.com/v1/charges?limit=2000", 
      method: "get",
      headers:{
        "Stripe-Version":"2019-05-16",
        "Authorization": "Bearer "+process.env.STRIPE_SECRET_PROD
      }
  }).then((res)=>{
      console.log(res.data)
      var app=[];
      var tix = 0;
      var weekendCount= 0
      var gaCount= 0
      var lastCallCount = 0
      var quantity
      var orders = []
      for (var ticket in res.data.data){
        if (!res.data.data[ticket].refunded && res.data.data[ticket].captured){
          tix++
          orders.push(res.data.data[ticket])
          if (typeof res.data.data[ticket].metadata.quantity === "string"){
            quantity = parseInt(res.data.data[ticket].metadata.quantity)
            while(quantity>0){
              orders.push(res.data.data[ticket])
              tix++
              quantity--;
            }
          }
          if(typeof res.data.data[ticket].metadata.type === "string" && typeof res.data.data[ticket].metadata.quantity === "string"){
            quantity = parseInt(res.data.data[ticket].metadata.quantity)
            var type = res.data.data[ticket].metadata.type
            switch(type){
              case "weekend":
                weekendCount = weekendCount + quantity
                break
              case "ga":
                  gaCount = gaCount + quantity
                  break
              case "lastCall":
                  lastCallCount = lastCallCount + quantity
                  break
              default:
                break
            }
          }
        }
      }
      this.setState({
        ticketCount: tix,
        tickets: orders,
        weekendCount,
        gaCount,
        lastCallCount
      },()=>{
        this.recentSales()
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
      <div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">TOTAL TIX COUNT</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? this.state.ticketCount+78:0}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">BALANCE</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {"$"+ (this.state.ticketCount? ((52*15)+(16*25)+((this.state.ticketCount -56)*20)) + '.00': 0)}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">24 HOUR SALES</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> { (this.state.ticketCount? this.state.ticketDayCount: 0)}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$15 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? 52:0}</p>  
          </div>
        </div><div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$20 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info">  {this.state.ticketCount? (153+this.state.weekendCount):0}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$25 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? 16+this.state.lastCallCount:0}</p>  
          </div>
        </div>

      </div>
    )
  }
}
export default Stripe