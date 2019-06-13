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
    console.log(date + '  between '+ yesterday)
    this.state.tickets.forEach((ticket)=>{
      console.log(ticket.created)
      if (ticket.created > yesterday && ticket.created < date)
      {
        ticketsSold++
     }
    })
    this.setState({ticketDayCount: ticketsSold})
    console.log(ticketsSold)
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
        balance: balance
      })
  })
  }

  getTicketCount(){
    axios({
      url: "https://api.stripe.com/v1/charges?limit=1000", 
      method: "get",
      headers:{
        "Stripe-Version":"2019-05-16",
        "Authorization": "Bearer sk_live_r3BTZ88DeDWkSSFB7OG4Uotd00zHhoVag0"
      }
  }).then((res)=>{
      // console.log(res.data)
      var app=[];
      for (var ticket in res.data.data){
        if (!res.data.data[ticket].refunded && res.data.data[ticket].captured){
          app.push(res.data.data[ticket])
          var tix = 0
          while (res.data.data[ticket].metadata.quantity>tix){
            app.push(res.data.data[ticket])
            tix++
          }
          // console.log()
        }
      }
      console.log(app)
      this.setState({
        ticketCount: parseInt(app.length),
        tickets: app
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
              <h2 class="ticket-list__item__text--title" itemprop="performer">24-HOUR SALES</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketDayCount? this.state.ticketDayCount:0}</p>  
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
              <p class="manage-list__item__text--info">  {this.state.ticketCount? (this.state.ticketCount -56):0}</p>  
          </div>
        </div>
        <div class="media">
          <div class="ticket-content">
              <h2 class="ticket-list__item__text--title" itemprop="performer">$25 TIXS</h2>          
              {/* <p class="ticket-list__item__text--support">$30 + 3.98 FEE</p>           */}
              <p class="manage-list__item__text--info"> {this.state.ticketCount? 16:0}</p>  
          </div>
        </div>

      </div>
    )
  }
}
export default Stripe