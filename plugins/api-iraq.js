import fetch from 'node-fetch'

const handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🦇 *مــرحــبــا بــك انـا ${command} عــلــيــك كــتــابــة نــص لــكـي ارد عــلـيـك*\n\nمثال:\n${usedPrefix + command}من انت؟`, m)
try {
let prompt = `انت علاوي من العراق ولديك الجنسية العراقية تكلم بي اللهجة العراقية وتقمص  دور الإنسان العراقي واستعمل ايموجي علم العراق و الايموجي العادي وان سئلك من انت قل له انك علاوي حبيب قلب ابو حسين وضع معها ايموجي ضحك و مطورك هو "فريق فلاش" أن سالك من صانعك قل له أن من صنعك هو zack`;

await m.react('🕒')

const apii = await fetch(`https://artst-three.vercel.app/chatgpt?text=${text}&prompt=${prompt}`)
const res = await apii.json()
await conn.reply(m.chat, res.result, m)
await m.react('🇮🇶')
} catch (error) {
await m.react('✖️')
console.error(error)
return conn.reply(m.chat, '🚩 *خطاء*', m)
}}

handler.command = ['علاوي']
handler.help = ['Z A C K']
handler.tags = ['ai'];
export default handler￼Enter
