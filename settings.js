const fs = require('fs')
const chalk = require('chalk')

global.botName = 'Yaemiko MD'
global.ownerNumber = '6288215523477'
global.ownerName = 'Kenz Market'
global.website = 'https://youtube.com/@KenzzDev'
global.wagc = 'https://whatsapp.com/channel/0029VazCs3v2Jl8Eyr1rSi0X'
global.packname = 'Creator'
global.author = 'Kenz Market'
global.creator = '6288215523477@s.whatsapp.net'
global.premium = ['6288215523477']
global.hituet = 0
global.prefa = ['','.','/'];
global.footer = 'ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.tempatDB = 'database.json'; // Tempat Database
global.saluran = '120363376589165265@newsletter'
global.saluranName = 'Powered By Yaemiko'
global.sessionName = 'session'

global.github = {
      Token: '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', //Token Guthub , Cara ambilnya Liat Yt
      Owner: 'dcode-al', //Nama Github
      Repo: 'database' //Nama Repository Github
}

global.botcahx = '-'

global.setmenu = 'ButtonV2' 
global.typereply = 'v4'
global.autoblocknumber = '92'
global.antiforeignnumber = '91'
global.welcome = true;
global.anticall = false;
global.autoswview = true // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.notifRegister = false // Notif Register
global.onlyRegister = false // Hanya Pendaftar
global.autoClearSesi = false // Otomatis hapus file sesi setiap 1 jam
global.autoClearTmp = true // Otomatis hapus file temp setiap 1 jam

global.limit = {
	free: 30,
	premium: 9999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✅✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})