
import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

interface EmailOptions {
    email: string;
    subject: string;
    html: string;
}

const sendMail = async (options: EmailOptions): Promise<void> => {
    const transporter: Transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const { email, subject, html } = options;

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject,
        html,
    };

    await transporter.sendMail(mailOptions);
};

export default sendMail;





// import nodemailer, {Transporter} from 'nodemailer'
// import dotenv from 'dotenv'
// dotenv.config()
// import ejs from 'ejs'
// import path from 'path'

// interface EmailOptions{
//     email :string,
//     subject : string,
//     template : string,
//     data : {[key : string]:any};
// }

// const sendMail = async(options: EmailOptions):Promise <void> => {
//     const transporter : Transporter = nodemailer.createTransport({
//         host :process.env.SMTP_HOST,
//         port : parseInt(process.env.SMTP_PORT || '587'),
//         service : process.env.SMTP_SERVICE,
//         auth : {
//             user : process.env.SMTP_MAIL,
//             pass : process.env.SMTP_PASSWORD
//         }
//     });

//     const {email, subject,template,data} = options;

//     const html : string = await ejs.renderFile(template,data);

//     const mailOptions = {
//         from : process.env.SMTP_MAIL,
//         to : email,
//         subject,
//         html     
//     };

//     await transporter.sendMail(mailOptions);

//  };
//  export default sendMail;