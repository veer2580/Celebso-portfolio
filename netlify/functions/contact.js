// const nodemailer = require("nodemailer");

// exports.handler = async (event) => {
//   const { name, email, phone, message } = JSON.parse(event.body);

//   if (!name || !email || !message) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({ success: false }),
//     };
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.MAIL_USER,
//       to: process.env.MAIL_TO,
//       subject: "New Contact Query - Celebso",
//       html: `
//         <h3>New Query</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Message:</b><br/>${message}</p>
//       `,
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ success: true }),
//     };

//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ success: false }),
//     };
//   }
// };
