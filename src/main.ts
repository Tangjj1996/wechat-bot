import { Wechaty } from "wechaty";

async function main() {
    const bot = new Wechaty();
    bot.on("scan", (qrcode, status) => {
        console.log(`Scan QR code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`);
    })
        .on("login", (user) => console.log(`User ${user} logged in`))
        .on("message", (messsage) => console.log(`Message: ${messsage}`));
    await bot.start();
}

main().catch(console.error);
