// import nodemailer from "nodemailer";


// const transporter = nodemailer.createTransport(
//     {
//         service: "Gmail",
//         auth: {
//             user: process.env.REACT_APP_NODEMAILER_USER,
//             pass: process.env.REACT_APP_NODEMAILER_PASS
//         }
//     })

// export const sendPasswordToEmail = async (email, password) => {
//     await transporter.sendMail({
//         from: `<${process.env.REACT_APP_NODEMAILER_USER}>`,
//         to: email,
//         subject: "Sua senha de acesso",
//         html: `<p>Sua senha de acesso é: ${password} </p>`,
//         text: `Sua senha de acesso é: ${password} `,
//     });
// }

// export const sendResetPasswordLink = async (email, resetLink) => {
//     await transporter.sendMail({
//         from: `<${process.env.REACT_APP_NODEMAILER_USER}>`,
//         to: email,
//         subject: "Link para redefinir senha",
//         html: `<p>Link para redefinir senha: ${resetLink} </p>`,
//         text: `Link para redefinir senha: ${resetLink} `,
//     });
// }

