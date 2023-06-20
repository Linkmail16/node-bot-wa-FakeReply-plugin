let handler = async (m, { conn, usedPrefix: _p }) => {
    let args = m.text.split('-').map(arg => arg.trim())
    if (args.length < 3) {
      return conn.reply(m.chat, `Uso incorrecto. El uso correcto es: ${_p}fakereply <número de teléfono> - <etiqueta> - <mensaje>`, m)
    }
  
    let phoneNumber = args[0].replace(/\D/g, '')
    let label = args[1]
    let message = args.slice(2).join('-')
  
    let info = message.trim()
    let fakeSender = `${phoneNumber}@s.whatsapp.net`
    let groupId = m.chat
  
    conn.fakeReply(m.chat, info, fakeSender, label, groupId)
  }
  
  handler.command = /^(fakereply)$/i
  handler.help = ["El bot responde a un mensaje falso, uso: .fakereply 'numero' - 'mensaje del numero' - 'respuesta'"];
  
  export default handler
  // by linkmail
  
