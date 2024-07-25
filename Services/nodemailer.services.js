import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config();

const mail = (senderEmail, verificationString) => {
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    const resetLink = `https://bala-user-management.netlify.app/resetpage/${verificationString}`;


    const details = {
        from: process.env.User,
        to: senderEmail,
        subject: "Reset Your Password",
        html: `
        <h3> Dear user, </h3>
        
        <p>Sorry to hear you’re having trouble logging into your account. We got a message that you forgot your password. If this was you, you can get right back into your account or reset your password now. </p>

        <p>This reset link will be active only for 10 min so change your password now!</p>

        <p> Click the following Link to reset your password \n ${resetLink} </p>

        <p>If you didn’t request a login link or a password reset, you can ignore this message. </P>

        <p>Thank You</P>`
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}

export default mail;