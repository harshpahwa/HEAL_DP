// const nodeMailer = require('../config/nodemailer');


// // this is another way of exporting a method
// exports.newComment = (email) => {
//     console.log('inside newComment mailer');
//     let htmlString = nodeMailer.renderTemplate('mail.ejs');
//     nodeMailer.transporter.sendMail({
//        from: 'b21100@students.iitmandi.ac.in',
//        to: email,
//        subject: "New Comment Published!",
//        html: htmlString
//     }, 
//     //info carries the info of the mail that has been sent
//     (err, info) => {
//         if (err){
//             console.log('Error in sending mail', err);
//             return;
//         }

//         console.log('Message sent', info);
//         return;
//     });
// }



const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newComment = (body) => {
   
    // let htmlString = nodeMailer.renderTemplate('mail.ejs');
    nodeMailer.transporter.sendMail({
        from: 'b21100@students.iitmandi.ac.in',
        to: body.email,
        subject: "Your Health Report",
        //TODO
        html: "<p>Your Report <br>" + "<ul>"
            + "<li> Average Glucose Level: " + body.avg_glucose_level + "</li>"
            + "<li> BMI: " + body.bmi + "</li>"
            + "<li> Systolic Pressure: " + body.systolic + "</li>"
            + "<li> Diastolic Pressure:" + body.diastolic +  "</li>"
            + "<li> Pulse Rate: " + body.pulse + "</li>"
            + "<li> Oxygen Level: " + body.spo2 + "</li>"
            + "<li> Body Temperature: " + body.temp + "</li>" +
            "</ul> Thank You <br> Team HEAL</p>" 
            
    },
        //info carries the info of the mail that has been sent
        (err, info) => {
            if (err) {
                console.log('Error in sending mail', err);
                return;
            }

            console.log('Message sent', info);
            return;
        });
}