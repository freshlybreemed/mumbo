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
    axios.get("/balance").then((res)=>{
      console.log(res.data)
      var app=[];
      var tix = 0;
      var weekendCount= 0
      var earlyCount= 0
      var gaCount= 0
      var lastCallCount = 0
      var quantity
      var orders = []
      var metaCount = 0
      var count = 0
      console.log(res)
      for (var ticket in res.data){
        if (!res.data[ticket].refunded && res.data[ticket].captured){
          tix++
          count++
          orders.push(res.data[ticket])
          if (typeof res.data[ticket].metadata.quantity === "string"){
            quantity = parseInt(res.data[ticket].metadata.quantity)
            var counter = quantity
            while(counter>1){
              orders.push(res.data[ticket])
              tix++
              counter--;
            }
            
          }
          if(typeof res.data[ticket].metadata.type !== "string" && typeof res.data[ticket].metadata.quantity === "string"){
            weekendCount++
            console.log(weekendCount)
          }
          if(typeof res.data[ticket].metadata.type === "string" && typeof res.data[ticket].metadata.quantity === "string"){
            quantity = parseInt(res.data[ticket].metadata.quantity)
            var type = res.data[ticket].metadata.type
            console.log("type at "+ type + " at "+ quantity + " units")
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
      console.log("last:"+lastCallCount)
      console.log("early:"+earlyCount)
      console.log("ga:"+gaCount)
      console.log("last:"+lastCallCount)
      console.log("week:"+weekendCount)
      console.log(orders.length)
      this.setState({
        ticketCount: tix+64,
        tickets: orders,
        weekendCount: weekendCount+65,
        gaCount:gaCount,
        earlyCount: 52,
        lastCallCount
      },()=>{
        console.log(this.state)
        this.recentSales()
      })
  })
  }

  render(){
    return (
      <div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">TOTAL TIX COUNT</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? this.state.ticketCount:0}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">BALANCE</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {"$"+ (this.state.ticketCount? ((this.state.gaCount*25)+((this.state.lastCallCount)*30)+(this.state.weekendCount*20)+(this.state.earlyCount*15)) + '.00': 0)}</p>  
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
              <p class="manage-list__item__text--info"> {this.state.ticketCount? this.state.earlyCount:0}</p>  
          </div>
        </div><div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$20 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info">  {this.state.ticketCount? (this.state.weekendCount):0}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$25 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? this.state.gaCount:0}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$30 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? this.state.lastCallCount:0}</p>  
          </div>
        </div>

      </div>
    )
  }
}
export default Stripe