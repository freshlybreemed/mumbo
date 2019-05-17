const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const stripe = require("stripe")("sk_test_JBNJTNK46jdUvLLug42ez1hW00eL4QQdjU");


const stripeChargeCallback = (res, token) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes, token: token });
  }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.GMAIL_USER,
           pass: process.env.GMAIL_PASS
       }
});

const readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};
const ticketApi = app => {   
    
    app.post("/ticket",  (req,res) => {
        const body = {
            source: req.body.token.id,
            amount: req.body.amount,
            currency: "usd",
        };
        console.log(req.body)
        // res.
        stripe.charges.create(body, stripeChargeCallback(res, req.body.token));
        readHTMLFile(__dirname + '/crank.html', function(err, html) {
            var template = handlebars.compile(html);
            var replacements = {
                username: "John Doe"
            };
            var htmlToSend = template(replacements);
            const mailOptions = {
                to: req.body.token.email, // sender address
                from: 'Chicken & Mumbo Sauce', // list of receivers
                subject: 'Crank Credentials', // Subject line
                html: htmlToSend,// plain text body
                icalEvent: {
                    method: 'PUBLISH',
                    path: __dirname+'/event.ics'
                }
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                console.log(err)
                else{
                    console.log(info);
                    console.log("sending-")
                    res.send('/confirmation')
                    // res.writeHead(302, {
                    //     'Location': 'http://localhost:8000/confirmation',
                    //     'Content-Type': 'text/html'
                    // });
                    // res.end();
                    console.log("sent")
                }
            })
        })

    })
    app.post("/tickettest",  (req,res) => {
        readHTMLFile(__dirname + '/crank.html', function(err, html) {
            var template = handlebars.compile(html);
            var replacements = {
                username: "John Doe"
            };
            var htmlToSend = template(replacements);
            const mailOptions = {
                to: req.body.email, // sender address
                from: 'Chicken & Mumbo Sauce', // list of receivers
                subject: 'Crank Credentials', // Subject line
                html: htmlToSend,// plain text body
                icalEvent: {
                    method: 'PUBLISH',
                    path: __dirname+'/event.ics'
                }
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                console.log(err)
                else{
                console.log(info);
                console.log("sending")
                // res.redirect('/confirmation')
                res.writeHead(302, {
                    'Location': 'http://localhost:8000/confirmation',
                    'Content-Type': 'text/html'
                });
                res.end();
                console.log("sent")
            }

            })
        })

    })
};
module.exports = ticketApi;