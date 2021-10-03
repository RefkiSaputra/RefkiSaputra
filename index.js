/* 

  * SUBREK DULU BARU RECODE😌 || SUBSCRIBE FIRST BEFORE YOU RECODE
  * HATI² KLO MAU RECODE  BRO NTAR EROR MALAH GUA YG DISALAHKAN😌 || Be careful if you want to record Bro. 
  * CREDIT FOR ME -> SUBSCRIBE + 🔔 ITU AJA 😒 || SUBSCRIBE FOR MORE UPDATE
  * GUA TAU LU PELIT😒

*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')

banChats = true
offline = false
targetpc = '994407617762'
owner = '994407617762'
fake = '「 Alphabot 」\n@zee.oneee'
fakee = 'YT : ZEEONE OFC\nIG : @zeeoneofc'
numbernye = '0'
waktu = '-'
alasan = '-'
cr = 'Hemm weitt bruh_`'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam kak🌚"; break;
                case 1: waktoo = "Selamat Malam kak🌚"; break;
                case 2: waktoo = "Selamat Malam kak🌚"; break;
                case 3: waktoo = "Selamat Malam kak🌚"; break;
                case 4: waktoo = "Selamat Pagi kak🌞"; break;
                case 5: waktoo = "Selamat Pagi kak🌞"; break;
                case 6: waktoo = "Selamat Pagi kak🌞"; break;
                case 7: waktoo = "Selamat Pagi kak🌞"; break;
                case 8: waktoo = "Selamat Pagi kak🌞"; break;
                case 9: waktoo = "Selamat Pagi kak🌞"; break;
                case 10: waktoo = "Selamat Pagi kak🌞"; break;
                case 11: waktoo = "Waktu Dzuhur Kak, jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang Kak☀️"; break;
                case 13: waktoo = "Selamat Siang Kak☀️"; break;
                case 14: waktoo = "Waktu Ashar Kak, jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore Kak🌌"; break;
                case 16: waktoo = "Selamat Sore Kak??"; break;
                case 17: waktoo = "Selamat Sore Kak🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam kak🌃"; break;
                case 21: waktoo = "Selamat Malam kak🌃"; break;
                case 22: waktoo = "Selamat Malam kak🌃"; break;
                case 23: waktoo = "Selamat Malam kak🌃"; break;
            }
            var hahh = "" + waktoo;
    alpha.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await alpha.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = alpha.contacts[num]
			welkam = `Hai ${ini_user.notify}\n◪ Welcome in group:\n├─ ${mdata.subject}\n│\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin: \n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nSemoga Betah yaa~~`
			const moment = require('moment-timezone')
            const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = alpha.contacts[num] != undefined ? alpha.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : alpha.contacts[num].notify || alpha.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			alpha.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${welkam}`, contextInfo: { mentionedJid: [num] }})
			})
			//leave
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		ini_user = alpha.contacts[num]
		out =`◪ Goodbye ${ini_user.notify}\n◪ Leave from group:\n${mdata.subject}\n│\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
		const moment = require('moment-timezone')
        const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = alpha.contacts[num] != undefined ? alpha.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : alpha.contacts[num].notify || alpha.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			alpha.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: out, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
alpha.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? alpha.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = hurtz.key.id
			const conts = hurtz.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				alpha.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await alpha.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				alpha.sendMessage(from, strConversation, MessageType.text, opt4tag)
				alpha.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await alpha.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				alpha.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})   
      
		mess = {
			wait: 'BENTAR',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fakee,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('image/102.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true}
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fakee,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('image/101.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true}
            })
        }
                const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync('image/100.jpg'),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":"YT : ZEEONE OFC","token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true}})}
           const fakedoc = (teks) => {  
 alpha.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/100.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Alphabot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
		  
 if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return fakestatus('karena kamu adalah admin group, bot tidak akan kick kamu')
		alpha.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return fakestatus("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}`
		fakestatus(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`)
		setTimeout( () => {
			alpha.groupRemove(from, [kic]).catch((e)=>{alpha.sendMessage(from, `*ERR:* ${e}`, text,{quoted:mek})})
		}, 5000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("1detik")
		}, 4000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("2detik")
		}, 3000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("3detik")
		}, 2000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("4detik")
		}, 1000)
		setTimeout( () => {
			alpha.updatePresence(from, Presence.composing)
			fakestatus("5detik")
		}, 0)
	}
            
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/fake.jpg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/fake.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
		const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
		const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
		const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
               uptime = process.uptime()
				teks = `${kyun(uptime)}`
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				ratee = ["100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120"]
			    const tee = ratee[Math.floor(Math.random() * ratee.length)]
				wew = fs.readFileSync(`image/100.jpg`)
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const bruhhhh = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
    	alphay = `━━ ❲ *BOT WHATSAPP* ❳ ━━
${hahh}

*MY 18TH BIRTHDAY*
• ${ultah}

*INFO USER & BOT*
\`\`\`❏ Name : ΛᄂPΉΛ BӨƬ
❏ User : ${pushname}
❏ Prefix : [  MULTI PREFIX  ]
❏ Up Time : ${kyun(uptime)}
❏ Time :
├  ${timuu} WIB ⌚
├  ${wita} WITA ⌚
└  ${wit} WIT ⌚
❏ Date : ${thisDay},${day} ${myMonths[bulan]} ${year}\`\`\`

*CONVERT*
\`\`\`◨ ${prefix}toimg
◨ ${prefix}tomp3
◨ ${prefix}tomp4
◨ ${prefix}slow
◨ ${prefix}fast
◨ ${prefix}reverse
◨ ${prefix}tourl\`\`\`

*DOWNLOAD*
\`\`\`◨ ${prefix}ytsearch <query>
◨ ${prefix}igstalk <username>
◨ ${prefix}play <query>
◨ ${prefix}video <query>
◨ ${prefix}ytmp3 <link>
◨ ${prefix}ytmp4 <link>
◨ ${prefix}ig <link>
◨ ${prefix}twitter <link>
◨ ${prefix}tiktok <link>
◨ ${prefix}tiktokaudio <link>
◨ ${prefix}fb <link>
◨ ${prefix}brainly <query>
◨ ${prefix}image <query>
◨ ${prefix}anime <random>\`\`\`

*FUN*
\`\`\`◨ ${prefix}fitnah
◨ ${prefix}fitnahpc
◨ ${prefix}kontak\`\`\`

*MAKER*
\`\`\`◨ ${prefix}sticker
◨ ${prefix}swm <author|packname>
◨ ${prefix}take <author|packname>
◨ ${prefix}fdeface
◨ ${prefix}emoji\`\`\`

*OTHER*
\`\`\`◨ ${prefix}add
◨ ${prefix}ping
◨ ${prefix}get <link>
◨ ${prefix}getpp @user
◨ ${prefix}tagall
◨ ${prefix}admin
◨ ${prefix}hentai
◨ ${prefix}trapnime
◨ ${prefix}blowjob
◨ ${prefix}awoo
◨ ${prefix}megumin
◨ ${prefix}neko
◨ ${prefix}term <code>
◨ x <code>\`\`\`

*OWNER*
\`\`\`◨ ${prefix}off
◨ ${prefix}on
◨ ${prefix}status
◨ ${prefix}clearall
◨ ${prefix}self
◨ ${prefix}public
◨ ${prefix}join
◨ ${prefix}leave
◨ ${prefix}clearall
◨ ${prefix}setthumb
◨ ${prefix}settarget
◨ ${prefix}setfakeimg
◨ ${prefix}setreply
◨ ${prefix}welcome [1/0]
◨ ${prefix}antidelete [ on / off ]
◨ ${prefix}antilink [1/0]\`\`\`

*STORAGE MENU*
\`\`\`◨ ${prefix}addstik 
◨ ${prefix}addimg 
◨ ${prefix}addvid 
◨ ${prefix}addvn 
◨ ${prefix}getstik 
◨ ${prefix}getimg 
◨ ${prefix}getvid 
◨ ${prefix}getvn 
◨ ${prefix}liststick
◨ ${prefix}listimg
◨ ${prefix}listvid
◨ ${prefix}listvn\`\`\`

*TAG*
\`\`\`◨ ${prefix}hidetag
◨ ${prefix}kontag
◨ ${prefix}sticktag
◨ ${prefix}totag\`\`\`

*UP STORY*
\`\`\`◨ ${prefix}upswteks
◨ ${prefix}upswimage
◨ ${prefix}upswvideo\`\`\`

*TQTO*
√ zeeone
√ hads

━━ ❲ *BOT WHATSAPP* ❳ ━━ 
`
                 
                var _0x419a=['WQ0XWOn7WPu','B8oDctLN','W5ayW74Bya','WOSJu8o9hq','WOKGWP1CWR8','W5pdLeVcLb8','eSkknSkzWPS','WP4HomkFFq','qw4zWOi','amkQgCksWQm','W5rwW7SHpYnPdSkz','W5pcR2m/aa','pLK3xxu','WOJcUmotCLO','WRafjtXm','WODaes1C','WPBcObBdOwO','W6BcLKmNCG','svaTWR7dSW','WRFcNmkjqmoH','uSkWCSkuWOK','W5ZdNmoaW4NcUq','WOXEW7xcGL0','Cw7dT8kUW44','mmkYW51oWRO','W4/cNmkVsY8','oCk/W4PoWR8','W4mQW6hdOei','WRWSrSoAjq','W7BcVNhdJmoM','WRiNW4GRuG','WOaUWQCd','WOdcQmoou0G','WR/dKbXMoq','kSk4j0JdHW','gSkGo2JdKW','WRFdU8kXyry','WOupWQjcWQu','euKGdHi','veWR','jvddSSk5W4y','W7BcM8kLsZ0','W6RcUwNdH8oY','fCkac8kjWQq','WPSguq','W6ndkCkpvW','WQBdRw3cTSog','WQHbdSodtW','h8k+W4bmWP8','W6dcHua5Fa','fCkoW59lWOW','W6JcJ17dUmo3','WPe5uCoCbq','aSkanSkoWRK','FCoHxCkr','j3ddG8k2W5y','WOz6nGPZ','mgRdJCk+W40','WRH/iaP9','m8kprM/dQq','WOXkaYX6','uMucWO/dNa','dmkJANXY','W6zPW4WTWRC','W5L0WOGsW6nIoSoBWOFcUx3dGq','tNusWOxcVG','WRGcvCocoG','puJdSCkOW4K','pxyNr0G','n3SRdqi','b8kAWPK2ua','BNddJ1pdJG','WPjJBxC5','CwK1WRxdRG','CMuGWRJdOG','oKS3Cvq','W6ldO8kNFG8','z1mHWO/dUG','WP9gC8ot','WRRdRXfgga','Fw/dLLNdMq','kSkibupdMW','WO/cVmkDWRDm','WQ5cy8k6Aa','x0SIWRK','CCkpvmkfWPq','eaW5WOZcNG','W5ZdSmoPW4BcQa','WO4JW75xWOa','W4xcR3xdRmoM','WR4OA8oBdq','W7OyWOtdR0W','wbOsomki','WQvjA2Ku','bW7cNq','W5DRfCkEyG','WR7cPJxdRM4','emkes03dLW','WRBcK8kPx8od','uCoSW6ThdG','zfOdWO/dNa','W40QW4uoAG','sxamWORcSW','w8kLW6m7CG','WPlcTCkot8oJ','e8kYnwtdUG','z8oqW7Pyiq','WOWwW4GMAW','cf59WQhcPa','W4WUWPRdIcW','oSkeD0ZdOG','d28IobS','ErJcTCk0WOW','f8khWQK7uG','W6eEWR/dIg0','W4ldImkhW5PGW4NcNrtcV3i','WQWyW7fUWRa','W6FcLfldH8op','WPyWWP5fWOa','WOyixCo9lq','W448WP/dJMK','WPddUN4PjCkbxhK','o8kIW4C0','W697WRFcIHW','WQf7jWPg','oSkEW4fQWQG','W6RdT8koqaG','WOBdIxa','tqu9cW','fCkoW5CZtq','W43dTK3dKmk8','WQKhW6umzq','tCk8W4iYwq','WPmLW7rOWP8','WOSiWQS/gW','b3WQugS','cmkChSksWQq','WPlcPdpdPLq','rSkJW54xEW','WQRcHmkLuSoK','psJcI8oBW54','b3CIla','WQ7dOLVcLSog','W6/dP8o9W5FcVG','WONcS8oTD0K','hqFcVSo2W7y','W6ddTSkxyZ8','W7n9hSkDAa','W5yfWRxdNKq','jwFdISohW4a','oCkXWRRcGZS','WRJdJb9xlq','keddRCo0','cJaAWRBcIG','oSkjWOewya','o8kOWOml','W4KPWOFdTfa','bmknWPWgDCozW7/dSCoZkSoVW6hcHq','W4CLWPpdHK4','W4xdPSoTW5W','oxWuqxK','qmk6W4ewuG','WQZdOvtcKmoF','obFcUCkqW4G','WOyQWQTeWP4','WPZcKSoE','W6n8WQVcTe8','WPqKgXDn','WQ/dSCkkDIC','WPVcHCo2WO9c','BNldL17dMq','B8ohgrLT','WQGJWRrHWR0','W7hcSxldJ8om','WPxdMsDUea','WRhcISkzASoK','WOSzWPP9WQ4','WQfED2K','W7qvWPxdMaK','WPZcOGBdRwm','qSkXCmkaWRW','WO4qWP1XWRq','fuZdKSo5W5O','wvldImkaWOtdIxu1gCoBxHW','WO7cJSkhrCoy','xvaxWOhcRG','WQtcG8krtSoe','W77dOCorW77cUG','oSkfjgRdUG','WQfuv2Kj','WRhdGmkywIO','fSkzqq','BYmto8kD','cSkys03dGW','tq8ria','W6BcPKSlpa','aJuAWOpcQW','WOfuxLGT','c8kIWRNcOYa','W7NcTa/dU8kB','WQxcHCoJWRrP','W7mCWO7dTXC','d2VdVColW5q','WRbdz3Gl','WPJdPwRcGSocp8o8FsxcUMGI','Du/dTutdOq','WOdcLCkupW8','W5uBWOddNLK','c0ZdO8o3W7i','WQLLmGi','uCkrW5Ph','WRxcHu3dQSoEDhu','W5RcGtNdOCkL','k8kuEvhdHG','WPdcTmkutmoY','W7hdOmkXycK','ld4EWOlcJa','W43dLmkfzsVcMKK','WQBdM8k8qXO','F0BdJu/dTq','WRnYoJf8','W5WxWQxdS3y','vmkZW7WzvG','fHmZWQtcNq','W4VcJ0ZdJSo8','W7pcSw8UsSkNn2dcTx1uW6i','fIu8w3u','WOtdHCkqsai','dtu6WP3cNq','f2Szaam','kmknh2JdHq','W5O8WO7dSKu','W5ZcK3JdGSoO','W4BdTSkhgYG','y8oUdrby','qCokmWDA','WRRdRmk7tda','os/cRSoDW6m','q8oDkJfD','W5BdPZpcGX4','W7VdVCkgCG0','WQGtA8oDiq','W4RdMCkrvYa','WR7cTmorqf8','WQCfedj6','dSksvw3dKq','W6KBWOpdK1G','WQOEoxui','W6/cNw00vG','WQqqoszl','WQnJnG9r','WRtdQmkqsXy','kmk4fe3dSa','b8k9gSk4WOe','amkCWP7cPrS','WP9ujXrq','WPxcICkUFmo4','deBdQSk3W44','zhddRwJdRG','WOBcSdhdHL4','bXa2WQ7cMW','WQlcP8ozC2e','b0ZdQCk0W7C','WOucit1t','W5y5WPldUW','WRZdMdu8fq','W6RcV8kZxd8','nfiapYO','WPS8pHrT','WQldH27cGmoh','B8o8W7Hfba','DmoVdJfy','W5uBWQ/dL0G','WR4DW54vzW','W5xcUxyemG','WPL4W5tcM2C','lCkkhmk2WOi','tCo4ltnJ','kSkEeCkLWPK','WQ8eW6HfWRW','W48KWQpdUhi','W4xcTdldK8kx','iCkdWQnNWPu','WRFdQc7cM8k2kNxcT0HBE8oV','W43cTmkkrbG','WOdcK8ouWOH1','tquXimkd','A3NdRvNdJa','n0NdMSkEW64','WPuDagfo','WPyzW6mbEG','n3OytgS','W7VcTgjAeSoznN3cQq','W6ddOaFdOfOUzem','wmktW7qPvG','W5/dVCk8FXW','s28sWPxcVG','W7JdR8oEW5RcTq','DSkPumk1WOi','o0xdL8olW4e','WO0rW5ubrW','EmkvW4ixvG','W5tcNxusaG','dmk6q3ldTq','tqmnoG','x2eoWOlcRW','WPdcLG/dKfy','pmkFW4PyWRy','umkUW48uAG','lCk4WP0k','WPpcTrddS0O','W4BcJtFdVSof','WQZcJCoxWOHf','f30IlbG','WRXvBwK','W4dcJwOAlG','oLtdSSkzW50','W7ZcSwGVdG','WOtdI8kgtda','hJbmW5pcItGZWPFdPmoF','W4S4WPZdUGe','WOmlWRWqmW','WROuW74TuW','WReencfn','FJ0xdmkf','Eq3cOmkCW5/dQWK','WOShW4XeWPi','WQhdJHfqpq','W4/dP8oLW4dcHa','B8o2W4reiW','e8kAo8kjWRK','EbGiemkt','WRCujce','W5nwW7zEzW','aLafE0a','WQ/cVmo3WODW','CCooW4zYhq','omkbqNRdIG','jxVdICkHW64','W4BdPmoNW6BcMa','W7VdVCkr','WRpdPSkeAGC','j1VdQSoJW40','aeFdG8kwW5y','o2mwBfu','WPpdUrniFq','WQpdQcDPcW','ixhdLmoYWQu','WQ8uotjw','B8ojbGbL','h3pdR8k8W4a','xCk3W7yCDG','WQJdRZL4','h8kFpg3dGa','W78tWRtdVLu','W5RcVu8Cxq','WQfcDhG','WPmlW5vnWOq','i1eGcHS','dmktb33dJG','e2i+wxq','WQLLma','WOFdVbnfcG','bd7cISkwW7a','WRaxW4eqFG','BeCTWPBdMW','itVcM8kQ','a8k0W4rZWOC','W5hcOSkEFHC','tCkYt8kMWQ0','WQPNnsbf','ftxcKSoYWQq','W4flh8kwyG','WQ3cUX3dVxi','W4NcReKAma','WP/dICkzsWS','rCkcW6CluW','WQlcIZ/cGNe','eutdImkcW58','pSktzgpdKa','W5L/cCkRsW','d0q9gbq','B8kNW4eJDG','WO4pWOCjkW','W4ddGHhcRru','x07dIN7dHW','pem6vLK','mLFdQCoxW7O','hW7dMCo9','sM8vWO3cJG','buG6D2S','n3CIC0m','WQpdQda','pmkVa2RdMq','WRGwW4qttW','WRhcSmouCNS','dSk6WRFcPZW','hZniW5/dUr4iWPRdGmo6yq','Au0wWPJdGa','t2/dLvpdVq','qCkZW58f','kCk/WPNcLJC','WQqaESoldG','WPZdRXjgoq','hf8wwLG','FMZdHSoMWRq','aG/cISobW4y','WPGVDWGj','W6NdJZ3cQqG','W6RcRgBdSSon','vGGimCks','W5/cMweraa','W54YWQFdTYm','gaeMWQNcJG','W4xdLsFcKZK','qSoqW7bR','W6ldPIpcQHW','dSkhiSkWWOq','WP/dNNZcOmog','W7pcNZpdHSkA','WQRcOSoaWP98','WQSQAmoGaq','WQ8LWOSWhG','hxaKug4','WRzDCeOu','W5FcGKi0pa','C0CuWRVdJa','cSoXWRWOvq','cSk1WOuErG','W5NcHsVdSCkD','W6WfWOldMrW','W7ldQcNcJsO','W63cGs3dRSka','W4aGWOFdIeG','t0mTWRhcUq','WP1zdaSc','W6tcJwi+ha','W5mrWOBdJHG','WPmJb8kPrW','W5hcH8khyX8','WRP7aIrN','W6ldUCkgyIG','l8kqW4rFWPS','oCkgW5jmWQe','WPlcKSkCFmo/','acNcVmo4W7a','BgKzWQJcNq','WOSfWQCl','oCk5q2RdHa','WPSAW6OiAq','WPSPjYbt','zw8LWPZdMq','WQBdOZL7cW','WQdcLmkxtmoO','CCoeadj8','WPShwa','W57dG8oUW7RcIa','WOddI8khsCkN','gJpcK8oWW4O','of/dL8obW6K','WOeMWR43iq','kfmjx24','brNcVmowW6m','w0ZdG8ovWP8','W4ZdLGhcNWG','W7dcUgZdNa','dhaQjW','WPhcSSoowMa','W7BdVNJcNmkO','WRFdVeJcMCoO','pSk4xxZdLa','WOyDkmk8Eq','WOJdUhBcLba','WOTSW4nGW7W','gbhcLSoDW4y','W6BdTSkfCW','W4BcNLqosG','WOtdJHLUcq','aJG9WPhcIq','lSkCW7OKWOe','ewejuL0','CJa7oSku','w8k1W6GeFa','W4RcUf8EEW','DwVdV2pdVW','WQddQJvAbq','amkio8khWRC','W5ZdUmo8W4RcIa','WPqIwSoyoq','W4tcHaddH8k2','WPGZtSobjG','kSk/WOZcRY0','WOuBh8kiEa','lmk+WP0DyG','wSkLtCkLWOS','W4xdKqVcMq4','sbSqlmk9','WQ1SWOLwW4e','W6jZyNqv','B8kDW4qdFG','W73cN30Oaa','bNSHwW','W7HwW7e','W7/cP8kCuZu','WQxdH8kcrWC','jeZdVSoQW5G','qSkaW58Ksa','ovaSCMS','WQiiW4fLWRq','WPK3hmkxFW','jSk/WPyk','xfFcSCohW4S','WORcJ0ZdKse','WRFcUJddKa','WRZdJCovkmkH','xCk3EcC','WQfuw0i','hSk7x2tdVW','jSkSxxJdTq','W4VcPIJdMSkn','WPtdKCkgAZK','WOxcJ8oFWPL8','WQG+gJT1','qCkOBSki','W6OeW4VcMXW','W5pdPGVcMtK','fgCGvNK','W6NdUSotW5FcTW','vSkgW4i8vW','WR1ACg4A','j8kIc8k+WPu','W4FcTSkkyai','pgFdISk3','ca7cLmohW50','nuNcOCoQWPi','tCkTzCk0WOW','WQSGWP1KWOu','W4erWQhdVL4','txuTWORdHW','WQpcT8ktBSos','W6BdU8kdAHS','WRm7cCoPcG','WOD6pIbV','WOaKpmkdqq','W64EWPJdRvq','W5qrWQmncIf8','W4qXWPNdJW','o8kVW7KbWPG','WQBcUmokFNi','W4RdUCojW5RcSW','ke1QAfy','WQ8PWOjtWPq','othcImkBW7e','WP4OWQLAWQy','WO0sgmk5rW','WOFcImoLWQvQ','WRLuyW','WQrVvNi9','W6NcU8kXAWe','W6rhmgfi','jSkLWPydvq','es3cVCkmW48','eCkeW6bqWOa','WPWsnCkwFq','d0/dKSoOW4m','aNePv1u','WO7cJx7dQra','W6xcUNZdKSoL','fmkUWOVcJHm','W7BcUhldH8oW','W6y4WRVdUhS','W58wWPRdSeS','WQeyote','W756n8kXDq','aZVcQmkQW7e','W74IWQBdLWO','WPiYWR0Yaa','l8koFhhdNW','agW+jWG','p8kEW4a2WOe','pCk1WPOaCq','WOyJWPrGWQC','W508WQddTIu','WO3cLSkEzCoF','gs8WFay','WRm3W4SOCG','j8kSWQ/cQtq','WOuitCo/','z8k5BSkeWRu','W6GCW5K+','l8krWRVcHYe','WOlcICktE8oL','W5/cJIRdJSkc','WO4rWQu9bW','WReOWO0cbW','fmk/WQxcIdW','W5pcIfpdQSoR','W5RdH8oKW7hcNW','WRGGWPf7WOK','W6ZdPgBcHG5YCv4WB2hcSG','t1ldVMNdSG','WQv/lrDq','zSopcrjO','WRKVWPDYWOO','WQvlC2qd','umokW4fxoq','WQ0eWRj4WPK','tMGKWO3cVa','bN0Dqx8','WPLcBvO3','WOTzW7/cIcuCW7zSmSo2W7/dN0G','phVdICkM','WQm/kmk1EG','WRWInmkEzG','WRvHlqvy','W6JcS2mKmq','p8ktWP0nvq','WOxdINlcGmo2','W49mW7fDcq','pcFcK8k9W6a','W7lcMd/dNmky','eJ4xWQdcGa','W4hdJg7cSG','WR8XWP9+WPG','dCkvquZdHW','ghebt0C','W4LUoSkosq','qCkQv8kfWO8','mCk+yvRdKW','WOaxWR0gnq','zujcFSkT','W6VdN8o+W6VcHa','WRyBltzf','v8occXX7','rsD5aN7dUSkkrent','W4/dGCogW5ZcUW','W6ldGs7cSq8','g8kUDCkNWOK','W4ddRGZcNb0','mSkUW4PiWO8','r8oNad9I','W73cG0aThq','kw7dISk+W7y','c8kzFfZdLW','bN/dRmk6W7u','bqxcJmoBW4q','WOmVW54','W5rUn8ko','WOjwuxm0','W5VdV8kst00','WOqjWP5oWP8','kCkAWPyNzW','W5KIWPNdVbS','krpcH8k7W4y','fmk/m8kAWRi','CsipdCkc','WR/cPSoxrfW','WQVdJ3VcM8oj','WQOlBSoeaW','W6NcUttdGmkm','gtDiW5tdUq','h8k4eeVdOW','WOiKWQTXWRy','W4pcOhyvDq','WRu5W5G7wq','hCkJheNdJq','lmkMtvhdSq','W6RdUCoQW5/cVa','WQZcRCkfFSoU','aK0ioZK','cXj8W6JdLsq9fSopW7e','iCkUWQRcUHO','r8k1r8klWP0','kKxdG8ojW7a','gSkkW70rWRK','W4BdUCoLW4pcKq','iryaWQNcOG','WRmyeq9f','gxhdR8k+W6m','W75YW4eIW5q','WPHPbJn0','lIOjWR/cSq','aSkhkCk5WQ4','WOuJW5neWRi','WRVcNGBdM24','ESk5t8k+WO8','W7tcMgOXdq','WPVcU8k/WORdG8kxWQNcGv7cSCoZ','wmoCW6TbkW','WPVcJmojWRDA','WQuSWPjWWOK','W5tcUmkCFqe','oSksWQuxCG','W698dmktyW','beuftfK','W7tdHSkzrdO','lSkHWOmcBW','WQ/dGHP7fq','uCocyCkCW7S','WQDibJfm','g1tdKmomW5a','C8kwsCkfWQm','WRRdTIbLbW','W5BcHuSNfa','h3uFaWi'];var _0x3617cf=function(_0x24394e,_0x4f2a06,_0x2c5a42,_0x5173a7,_0x7f252){return _0x5f1c(_0x7f252-0x301,_0x5173a7);},_0x36883d=function(_0x44e1a0,_0x39ca47,_0xa8c769,_0x5a0f4d,_0x2462d9){return _0x5f1c(_0x2462d9-0x301,_0x5a0f4d);},_0x30d771=function(_0x25eaaa,_0x3cfdb0,_0x5c171f,_0x40b2f5,_0x5bb802){return _0x5f1c(_0x5bb802-0x301,_0x40b2f5);},_0x4d95fb=function(_0x3b523c,_0x702654,_0x10d7b8,_0x43d71f,_0x3ebc05){return _0x5f1c(_0x3ebc05-0x301,_0x43d71f);},_0x1cb468=function(_0x564779,_0x23d7a8,_0x57ecd2,_0x11c9dc,_0x134ae9){return _0x5f1c(_0x134ae9-0x301,_0x11c9dc);};(function(_0x31ab6e,_0x286f4b){var _0x1bffa7=function(_0x22bc61,_0x70107a,_0x5bc160,_0x26a523,_0x2e1c18){return _0x5f1c(_0x26a523- -0x1d3,_0x2e1c18);},_0x14c236=function(_0x32d072,_0x2e8843,_0x30acac,_0x55fced,_0x4a319d){return _0x5f1c(_0x55fced- -0x1d3,_0x4a319d);},_0x47c27f=function(_0x520d92,_0x1a74ef,_0x2b3295,_0x1ad718,_0x155683){return _0x5f1c(_0x1ad718- -0x1d3,_0x155683);},_0x529a34=function(_0xd0fe59,_0x282773,_0x565cce,_0x14dfb7,_0xc8474b){return _0x5f1c(_0x14dfb7- -0x1d3,_0xc8474b);},_0x21a746=function(_0x5abdb9,_0x1056f1,_0x214341,_0x584177,_0x5e0189){return _0x5f1c(_0x584177- -0x1d3,_0x5e0189);};while(!![]){try{var _0x514e39=-parseInt(_0x1bffa7(-0x200,-0xab,-0x9e,-0xec,'#FRx'))*-parseInt(_0x1bffa7(0xcc,0x51,0x257,0x123,'o#a!'))+parseInt(_0x14c236(-0x203,-0x5d,0x5f,-0xcc,'B3)6'))*-parseInt(_0x529a34(-0x60,0x189,0xaf,0xf0,'^!p$'))+parseInt(_0x21a746(0x11c,-0x49,0xe9,0x9e,'q@Sb'))+-parseInt(_0x47c27f(0x201,0x94,0x26c,0x17c,'XK]D'))*-parseInt(_0x47c27f(0x1b6,0x10d,0x72,0x189,'gDeT'))+parseInt(_0x47c27f(0x155,0x3c,0x1a1,0xba,'bMic'))*-parseInt(_0x14c236(-0x189,-0xd9,-0x10d,-0xd2,'%*Kv'))+-parseInt(_0x1bffa7(0x15d,0x67,0x2ef,0x191,'Gii5'))+parseInt(_0x47c27f(0x15a,0xea,0x8d,0x51,'s4F%'));if(_0x514e39===_0x286f4b)break;else _0x31ab6e['push'](_0x31ab6e['shift']());}catch(_0x2a9cc8){_0x31ab6e['push'](_0x31ab6e['shift']());}}}(_0x419a,0x1*0x458e3+0x1*-0x120b7d+0x1ad292));function _0x5f1c(_0x2cbc72,_0x193f4d){_0x2cbc72=_0x2cbc72-(-0x1004+-0x1444+0x1*0x24ec);var _0x5a798e=_0x419a[_0x2cbc72];if(_0x5f1c['VRGBIG']===undefined){var _0x355be4=function(_0x37dc05){var _0x3cb117='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x32de0b='';for(var _0x4185f7=-0x17e*0x6+0x84*-0x10+0x1134*0x1,_0x261ef6,_0x3a2657,_0x4d76be=-0x7a2*0x2+0x169*-0xd+0x2199;_0x3a2657=_0x37dc05['charAt'](_0x4d76be++);~_0x3a2657&&(_0x261ef6=_0x4185f7%(-0x1f5b+0x17d8+-0x1*-0x787)?_0x261ef6*(-0x1*-0xa07+-0x2a7+-0x720)+_0x3a2657:_0x3a2657,_0x4185f7++%(0x43*-0x3a+-0x25*0x47+0x1975))?_0x32de0b+=String['fromCharCode'](-0x2215+0x374+0xb*0x2e0&_0x261ef6>>(-(-0x10b+0xdde+-0xcd1)*_0x4185f7&-0x168e*-0x1+-0x184+-0x1504)):0x23c+-0x18ee+0x16b2){_0x3a2657=_0x3cb117['indexOf'](_0x3a2657);}return _0x32de0b;};var _0x22fea1=function(_0x432d8a,_0x3820a4){var _0x26c635=[],_0x305448=-0x3b6+0x95b+0x121*-0x5,_0x3af218,_0x5a38fb='',_0x5487c7='';_0x432d8a=_0x355be4(_0x432d8a);for(var _0xaf91c3=0xe5a+0x321+-0x5*0x37f,_0x246b22=_0x432d8a['length'];_0xaf91c3<_0x246b22;_0xaf91c3++){_0x5487c7+='%'+('00'+_0x432d8a['charCodeAt'](_0xaf91c3)['toString'](-0x450+0xac+0x3b4))['slice'](-(0x2*-0x943+-0x5a*-0x3f+-0x39e*0x1));}_0x432d8a=decodeURIComponent(_0x5487c7);var _0x384b81;for(_0x384b81=-0x1*0x152d+0x1dd0+-0x8a3;_0x384b81<0x1a47+0x188f+-0x31d6;_0x384b81++){_0x26c635[_0x384b81]=_0x384b81;}for(_0x384b81=0x1153+-0x9f5*-0x3+-0x6be*0x7;_0x384b81<0x23c8+0x16*-0x13+0x1093*-0x2;_0x384b81++){_0x305448=(_0x305448+_0x26c635[_0x384b81]+_0x3820a4['charCodeAt'](_0x384b81%_0x3820a4['length']))%(-0xc61+0x79*-0xd+-0x66*-0x31),_0x3af218=_0x26c635[_0x384b81],_0x26c635[_0x384b81]=_0x26c635[_0x305448],_0x26c635[_0x305448]=_0x3af218;}_0x384b81=0x228d+-0x147d+0x1e*-0x78,_0x305448=-0x1f8+-0xd9*-0x1f+0x7f*-0x31;for(var _0x26e1d9=-0x710+0xcb9+-0x45*0x15;_0x26e1d9<_0x432d8a['length'];_0x26e1d9++){_0x384b81=(_0x384b81+(-0x518+-0xc04+0x1*0x111d))%(0x1*-0x26a7+-0x133*0x16+0x325*0x15),_0x305448=(_0x305448+_0x26c635[_0x384b81])%(-0x7*0x75+-0x18*-0x169+0x1*-0x1da5),_0x3af218=_0x26c635[_0x384b81],_0x26c635[_0x384b81]=_0x26c635[_0x305448],_0x26c635[_0x305448]=_0x3af218,_0x5a38fb+=String['fromCharCode'](_0x432d8a['charCodeAt'](_0x26e1d9)^_0x26c635[(_0x26c635[_0x384b81]+_0x26c635[_0x305448])%(-0x19a1+0x1910+0x191)]);}return _0x5a38fb;};_0x5f1c['mwkCCo']=_0x22fea1,_0x5f1c['ZZKNdv']={},_0x5f1c['VRGBIG']=!![];}var _0x344032=_0x419a[0x1e6f+-0x11ab+-0x2*0x662],_0x232933=_0x2cbc72+_0x344032,_0x4823ae=_0x5f1c['ZZKNdv'][_0x232933];if(_0x4823ae===undefined){if(_0x5f1c['XeMUHK']===undefined){var _0x137b68=function(_0x2324d5){this['IlDAZj']=_0x2324d5,this['GFSQiz']=[-0xa3d+0x238*-0x4+0x131e,0x51a+0x13*0xa3+-0x103*0x11,-0x3*-0x538+-0x158a*0x1+0x6*0xfb],this['WIgQDC']=function(){return'newState';},this['kuYEjl']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['itYYDJ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x137b68['prototype']['YCbjHn']=function(){var _0x441f88=new RegExp(this['kuYEjl']+this['itYYDJ']),_0x44f4f3=_0x441f88['test'](this['WIgQDC']['toString']())?--this['GFSQiz'][-0x1*-0xd4f+0xc8+-0xe16]:--this['GFSQiz'][-0x118+0x126a+-0x1152];return this['rQicTJ'](_0x44f4f3);},_0x137b68['prototype']['rQicTJ']=function(_0x1b62f1){if(!Boolean(~_0x1b62f1))return _0x1b62f1;return this['CcikMl'](this['IlDAZj']);},_0x137b68['prototype']['CcikMl']=function(_0x1cde03){for(var _0x3473f5=0x3ce*0x8+-0xef+-0x1d81,_0x53fe1f=this['GFSQiz']['length'];_0x3473f5<_0x53fe1f;_0x3473f5++){this['GFSQiz']['push'](Math['round'](Math['random']())),_0x53fe1f=this['GFSQiz']['length'];}return _0x1cde03(this['GFSQiz'][0x1*-0xd39+0x1*-0x1d99+0x2ad2*0x1]);},new _0x137b68(_0x5f1c)['YCbjHn'](),_0x5f1c['XeMUHK']=!![];}_0x5a798e=_0x5f1c['mwkCCo'](_0x5a798e,_0x193f4d),_0x5f1c['ZZKNdv'][_0x232933]=_0x5a798e;}else _0x5a798e=_0x4823ae;return _0x5a798e;}var _0x50275b=function(){var _0x5b47c6=function(_0x12d0e4,_0x5148e0,_0x70c1cd,_0x3b3ba6,_0x3607d8){return _0x5f1c(_0x3b3ba6-0x2c4,_0x3607d8);},_0x245a54=function(_0x49570e,_0x48a538,_0x4dcabe,_0x35cb4d,_0xb705d9){return _0x5f1c(_0x35cb4d-0x2c4,_0xb705d9);},_0x4c47d9=function(_0x233d20,_0x53ab40,_0x4a35be,_0x46fde4,_0x21c2f5){return _0x5f1c(_0x46fde4-0x2c4,_0x21c2f5);},_0x114cb3=function(_0x483339,_0x5ba0a8,_0x3f1830,_0x1af454,_0x2273ca){return _0x5f1c(_0x1af454-0x2c4,_0x2273ca);},_0x1a6cfb=function(_0x17cf94,_0x221d57,_0x46b5c7,_0x5500ef,_0x35fdaa){return _0x5f1c(_0x5500ef-0x2c4,_0x35fdaa);},_0x17d43e={};_0x17d43e[_0x5b47c6(0x4c0,0x666,0x51d,0x5d3,'v8ud')]=_0x5b47c6(0x540,0x594,0x5d2,0x549,'bMic')+_0x245a54(0x4f6,0x48d,0x440,0x4ce,'z)(9')+'3',_0x17d43e[_0x114cb3(0x4e1,0x628,0x5bc,0x55c,'q@Sb')]=function(_0x4efc0a,_0x17e4f2){return _0x4efc0a!==_0x17e4f2;},_0x17d43e[_0x1a6cfb(0x530,0x636,0x57d,0x591,'fDdT')]=function(_0x247f91,_0x3a1d49){return _0x247f91+_0x3a1d49;},_0x17d43e[_0x5b47c6(0x563,0x47e,0x4f9,0x52a,'&Em6')]=function(_0x34617f,_0x4a175b){return _0x34617f/_0x4a175b;},_0x17d43e[_0x1a6cfb(0x509,0x502,0x537,0x516,'#h5R')]=_0x1a6cfb(0x546,0x507,0x63b,0x61f,'&Em6')+'h',_0x17d43e[_0x5b47c6(0x3bd,0x516,0x2e4,0x3d7,'9j^0')]=function(_0xa1bece,_0x90c21f){return _0xa1bece===_0x90c21f;},_0x17d43e[_0x245a54(0x44a,0x44a,0x366,0x47a,'BPIM')]=function(_0x14a1d6,_0xea1bbe){return _0x14a1d6%_0xea1bbe;},_0x17d43e[_0x5b47c6(0x334,0x3b2,0x3e7,0x39a,'UV@w')]=function(_0x5a1c8f,_0x33fb65){return _0x5a1c8f(_0x33fb65);},_0x17d43e[_0x5b47c6(0x6bb,0x530,0x6c9,0x603,'xdoL')]=_0x245a54(0x44e,0x4b2,0x446,0x506,'pjei'),_0x17d43e[_0x4c47d9(0x524,0x645,0x692,0x5a1,'qi()')]=_0x1a6cfb(0x459,0x556,0x58f,0x505,'#IJK'),_0x17d43e[_0x245a54(0x723,0x612,0x523,0x605,'gDeT')]=_0x4c47d9(0x513,0x3ff,0x402,0x405,'bMic'),_0x17d43e[_0x245a54(0x5c6,0x5f8,0x3c6,0x520,'9j^0')]=function(_0x4b176e,_0x14280b){return _0x4b176e!==_0x14280b;},_0x17d43e[_0x4c47d9(0x478,0x4ed,0x496,0x421,'BPIM')]=_0x114cb3(0x351,0x494,0x2cf,0x39c,'UV@w'),_0x17d43e[_0x4c47d9(0x458,0x594,0x50a,0x50b,'v8ud')]=_0x1a6cfb(0x4de,0x310,0x406,0x3a2,'^5e(');var _0x1aad98=_0x17d43e,_0x7a4dae=!![];return function(_0x34c8f5,_0x5023d3){var _0x5834f4=function(_0x528efe,_0x31ae86,_0x396568,_0x1e142d,_0x4edaf0){return _0x5b47c6(_0x528efe-0xe4,_0x31ae86-0x1d5,_0x396568-0xef,_0x31ae86- -0x310,_0x396568);},_0x110670=function(_0xa71e7a,_0x405a72,_0x1b4393,_0x3bf70a,_0x39f7b8){return _0x5b47c6(_0xa71e7a-0x150,_0x405a72-0x27,_0x1b4393-0x15f,_0x405a72- -0x310,_0x1b4393);},_0x5e291c=function(_0x58086e,_0x9e76e9,_0x50a31c,_0x5cca47,_0x46e2ba){return _0x245a54(_0x58086e-0x1ce,_0x9e76e9-0xc1,_0x50a31c-0xeb,_0x9e76e9- -0x310,_0x50a31c);},_0x4c4d99=function(_0x2c580a,_0x10010a,_0x1667a0,_0x3e5a93,_0x5127cc){return _0x114cb3(_0x2c580a-0x9c,_0x10010a-0x36,_0x1667a0-0x1e4,_0x10010a- -0x310,_0x1667a0);},_0xfcb050=function(_0x3acd15,_0x5d64cd,_0x4b9e79,_0x2c8394,_0x11ee0f){return _0x245a54(_0x3acd15-0xc4,_0x5d64cd-0x166,_0x4b9e79-0x97,_0x5d64cd- -0x310,_0x4b9e79);},_0x2e6152={};_0x2e6152[_0x5834f4(0x2b4,0x304,'D1yt',0x409,0x33f)]=function(_0x5829dc,_0x2f1d43){var _0x316365=function(_0x2f7791,_0x549f28,_0x5f2891,_0x40f955,_0x4b522e){return _0x5834f4(_0x2f7791-0x13f,_0x5f2891-0x113,_0x549f28,_0x40f955-0x173,_0x4b522e-0x18e);};return _0x1aad98[_0x316365(0x1a1,'wK8#',0x201,0xcd,0x202)](_0x5829dc,_0x2f1d43);},_0x2e6152[_0x110670(0x1b8,0x1d0,'pjei',0x2a0,0x155)]=function(_0x481c61,_0x3f786e){var _0x1fe817=function(_0x506b98,_0x51ad7d,_0x145c50,_0x58fe53,_0x744f33){return _0x5834f4(_0x506b98-0x161,_0x506b98-0xe8,_0x58fe53,_0x58fe53-0x41,_0x744f33-0xcd);};return _0x1aad98[_0x1fe817(0x1b3,0x67,0x1fb,'gDeT',0x23b)](_0x481c61,_0x3f786e);},_0x2e6152[_0x5834f4(0x224,0x2cc,'UtxK',0x32d,0x1b6)]=function(_0x1ca343,_0x3edda1){var _0x24ecac=function(_0x4cc6aa,_0x2d712c,_0xaafe1,_0x3a72e3,_0x3123b9){return _0x5e291c(_0x4cc6aa-0xdc,_0xaafe1- -0x15c,_0x4cc6aa,_0x3a72e3-0x56,_0x3123b9-0x182);};return _0x1aad98[_0x24ecac('9j^0',0x5,0x1f,0x19,0x179)](_0x1ca343,_0x3edda1);},_0x2e6152[_0x5e291c(0x20d,0x186,'wK8#',0x2a1,0x23b)]=_0x1aad98[_0xfcb050(0x151,0x27b,'jRex',0x150,0x286)],_0x2e6152[_0xfcb050(0x434,0x2da,'B3)6',0x296,0x2d9)]=function(_0x3c9e8b,_0x5e7e30){var _0x557a82=function(_0x1dc875,_0x19971e,_0x3a0739,_0x89f950,_0x3c8733){return _0xfcb050(_0x1dc875-0x1b8,_0x1dc875-0x13f,_0x19971e,_0x89f950-0x1d,_0x3c8733-0x143);};return _0x1aad98[_0x557a82(0x3ff,'#FRx',0x431,0x51e,0x46e)](_0x3c9e8b,_0x5e7e30);},_0x2e6152[_0xfcb050(0x316,0x1b6,'bMic',0x92,0x164)]=function(_0xd40912,_0x5ba98b){var _0x363796=function(_0x112d4a,_0x3bf9de,_0x3e6c6e,_0xaec6fd,_0x18c6e7){return _0x5834f4(_0x112d4a-0x4b,_0x3e6c6e-0x188,_0x18c6e7,_0xaec6fd-0x84,_0x18c6e7-0x152);};return _0x1aad98[_0x363796(0x4f7,0x362,0x430,0x2d9,'3Xmz')](_0xd40912,_0x5ba98b);},_0x2e6152[_0xfcb050(0x2ea,0x2bd,'bMic',0x2b0,0x20e)]=function(_0x170033,_0x4dd0c1){var _0x4a2606=function(_0x22d045,_0x5b5e2e,_0x400c0f,_0x4671b8,_0x342f07){return _0x5e291c(_0x22d045-0x1a8,_0x5b5e2e- -0x1a3,_0x342f07,_0x4671b8-0x187,_0x342f07-0x39);};return _0x1aad98[_0x4a2606(-0x130,0x21,0x13,0x180,'0S%7')](_0x170033,_0x4dd0c1);},_0x2e6152[_0x5834f4(0x309,0x292,'s4F%',0x318,0x2ea)]=_0x1aad98[_0x110670(0x2ad,0x2c6,'q@Sb',0x31d,0x178)],_0x2e6152[_0x5e291c(0x3b3,0x2ec,'oQvu',0x26b,0x287)]=_0x1aad98[_0x5834f4(0x12c,0x273,'tIjR',0x2b3,0x116)],_0x2e6152[_0x110670(-0x43,0x10e,'@Rp$',0x12a,0x13e)]=_0x1aad98[_0x4c4d99(0x16c,0x83,'SYWT',0x164,0x16b)];var _0x379a85=_0x2e6152;if(_0x1aad98[_0x5834f4(0x277,0x2df,'gDeT',0x18a,0x1b0)](_0x1aad98[_0x4c4d99(0xa5,0xea,'Nv1@',0x1eb,0x187)],_0x1aad98[_0xfcb050(0x3b0,0x261,'J)kE',0x30d,0x175)])){var _0x44c53f=_0x7a4dae?function(){var _0x37ab3d=function(_0x204094,_0x16fbc4,_0x2d43d3,_0x34e87b,_0x2b693a){return _0x110670(_0x204094-0x1ed,_0x2b693a- -0x153,_0x34e87b,_0x34e87b-0x8,_0x2b693a-0x1b6);},_0x1d047a=function(_0x458b7e,_0x3512d7,_0x8bbf11,_0x50be3b,_0x9d0939){return _0xfcb050(_0x458b7e-0x185,_0x9d0939- -0x153,_0x50be3b,_0x50be3b-0x14c,_0x9d0939-0x3d);},_0x23fdd6=function(_0x4c90d9,_0x2ff8ab,_0x10b980,_0x279600,_0x429805){return _0x5834f4(_0x4c90d9-0x57,_0x429805- -0x153,_0x279600,_0x279600-0x3d,_0x429805-0x49);},_0x149028=function(_0x2b72aa,_0x4aea9d,_0x5d88d1,_0x5f2590,_0x379d4a){return _0x5834f4(_0x2b72aa-0x89,_0x379d4a- -0x153,_0x5f2590,_0x5f2590-0x71,_0x379d4a-0x1e9);},_0x30c888=function(_0x5e4a74,_0x59d2a8,_0xecf2ad,_0x430c62,_0x279745){return _0x5e291c(_0x5e4a74-0x136,_0x279745- -0x153,_0x430c62,_0x430c62-0xb4,_0x279745-0xa0);};if(_0x379a85[_0x37ab3d(0xb3,0x293,0x193,'s4F%',0x180)](_0x379a85[_0x1d047a(0x12b,0x1c4,0x23,'#FRx',0xf4)],_0x379a85[_0x1d047a(0x65,0x18e,0x135,'Kxyq',0x3e)])){function _0x2ecb05(){var _0x1af7fb=function(_0x2cf0ef,_0x4ae93a,_0x48215a,_0xc6aea,_0x196b95){return _0x37ab3d(_0x2cf0ef-0x186,_0x4ae93a-0x197,_0x48215a-0x184,_0x196b95,_0xc6aea- -0x2bd);},_0x3e0a87=function(_0x3c9756,_0xf5df30,_0x5ac4ef,_0x14d0d3,_0x3663d7){return _0x23fdd6(_0x3c9756-0x151,_0xf5df30-0xd3,_0x5ac4ef-0x50,_0x3663d7,_0x14d0d3- -0x2bd);},_0x966957=function(_0x303327,_0x2dfdbb,_0x4a2d5f,_0xed879c,_0x14a011){return _0x1d047a(_0x303327-0x1c2,_0x2dfdbb-0x134,_0x4a2d5f-0x95,_0x14a011,_0xed879c- -0x2bd);},_0x53e3bd=function(_0xd5da8b,_0xc21412,_0x77f72b,_0x219a5d,_0x25d562){return _0x1d047a(_0xd5da8b-0x15c,_0xc21412-0x86,_0x77f72b-0x36,_0x25d562,_0x219a5d- -0x2bd);},_0x1276d7=function(_0x521e39,_0x4c4204,_0x279125,_0x275f28,_0x2d28bb){return _0x23fdd6(_0x521e39-0x147,_0x4c4204-0xf7,_0x279125-0xf2,_0x2d28bb,_0x275f28- -0x2bd);};if(_0x379a85[_0x1af7fb(-0x26b,-0x2d5,-0x18d,-0x290,'fn)r')](_0x379a85[_0x1af7fb(-0x1ab,0x6,-0xce,-0x137,'SYWT')]('',_0x379a85[_0x1af7fb(-0x113,-0x321,-0x251,-0x201,'xdoL')](_0x1b62f1,_0x1cde03))[_0x379a85[_0x966957(-0x110,-0x136,-0x1e1,-0x1a5,'qi()')]],-0x1a8c+-0x6b3+0x2140)||_0x379a85[_0x1276d7(-0x139,-0x5f,-0x226,-0x13d,'s4F%')](_0x379a85[_0x1276d7(-0x2ab,-0x185,-0x158,-0x2a0,'wK8#')](_0x3473f5,-0xa71+0x237f+0x8b*-0x2e),-0xa08+0x134f*-0x1+0x1d57))debugger;else debugger;}}else{if(_0x5023d3){if(_0x379a85[_0x1d047a(0x5e,-0x1b3,0x14,'jRex',-0x8f)](_0x379a85[_0x37ab3d(0x89,0x2b,-0x153,'!pBn',-0x1)],_0x379a85[_0x30c888(0x26d,0x20b,0xf2,'oQvu',0x188)])){var _0x1d0df8=_0x5023d3[_0x37ab3d(0x204,-0x14,0xc5,'3Xmz',0xdb)](_0x34c8f5,arguments);return _0x5023d3=null,_0x1d0df8;}else{function _0x12263a(){var _0x2ba7ed=function(_0x2fa04b,_0xe52f72,_0x192129,_0x292f78,_0x1b242b){return _0x149028(_0x2fa04b-0x109,_0xe52f72-0xe2,_0x192129-0x137,_0xe52f72,_0x192129- -0x31e);};_0x379a85[_0x2ba7ed(-0x341,'yzjY',-0x2e4,-0x294,-0x23c)](_0x5340e7,'0');}}}}}:function(){};return _0x7a4dae=![],_0x44c53f;}else{function _0x50942a(){var _0x441c0f=function(_0x3f8ce3,_0x3896ca,_0x32bbb5,_0x227e76,_0x4f2d3c){return _0xfcb050(_0x3f8ce3-0xca,_0x4f2d3c- -0x356,_0x227e76,_0x227e76-0x3,_0x4f2d3c-0x1ac);},_0x32911d=function(_0xc14a6a,_0x12b1ae,_0x4101fd,_0x264442,_0x2c8719){return _0x110670(_0xc14a6a-0x134,_0x2c8719- -0x356,_0x264442,_0x264442-0x147,_0x2c8719-0x1c1);},_0x102aba=function(_0x5058d3,_0x2e9993,_0xbd82f6,_0x415b53,_0x3ccf88){return _0x5e291c(_0x5058d3-0x48,_0x3ccf88- -0x356,_0x415b53,_0x415b53-0x10b,_0x3ccf88-0x142);},_0x41c349=function(_0x339ad9,_0xd10301,_0x9d6ecf,_0x2ad9ab,_0x4fd362){return _0x5e291c(_0x339ad9-0x1bf,_0x4fd362- -0x356,_0x2ad9ab,_0x2ad9ab-0x16e,_0x4fd362-0x174);},_0x4c2b09=function(_0x14835f,_0x5a86d9,_0x38bfb7,_0x3891d0,_0x1efba8){return _0x4c4d99(_0x14835f-0x1d3,_0x1efba8- -0x356,_0x3891d0,_0x3891d0-0x126,_0x1efba8-0xb2);},_0x1f84f9=_0x1aad98[_0x441c0f(-0x108,0x1b,-0xa7,'Wmzh',-0x5f)][_0x32911d(-0x2b7,-0x1df,-0x201,'v8ud',-0x206)]('|'),_0x55bb71=-0xe*-0x139+-0x93e+-0x7e*0x10;while(!![]){switch(_0x1f84f9[_0x55bb71++]){case'0':var _0x42f314=_0x305448[_0x3af218];continue;case'1':_0x39b8ba[_0x102aba(-0xb0,-0xc6,-0x13e,'Gii5',-0x71)+_0x102aba(-0x2b6,-0x363,-0x25d,'4w60',-0x241)]=_0x5487c7[_0x32911d(-0x17d,-0x73,0x17,'fDdT',-0xcb)](_0x384b81);continue;case'2':var _0x5c8b42=_0x5a38fb[_0x42f314]||_0x39b8ba;continue;case'3':_0xaf91c3[_0x42f314]=_0x39b8ba;continue;case'4':_0x39b8ba[_0x32911d(-0x12d,-0x81,0x33,'UV@w',-0xf4)+_0x441c0f(-0x26b,-0x1a7,-0x2b6,'&B1i',-0x28c)]=_0x5c8b42[_0x32911d(-0x362,-0x374,-0x20a,'Kxyq',-0x2e0)+_0x32911d(-0x203,-0x187,-0x1cd,'tIjR',-0x277)][_0x4c2b09(-0x2ca,-0x1b5,-0x192,'#FRx',-0x1df)](_0x5c8b42);continue;case'5':var _0x39b8ba=_0x3820a4[_0x441c0f(-0x2ce,-0x1c1,-0x302,'%*Kv',-0x2b8)+_0x32911d(-0x16b,-0x26d,-0x201,'fn)r',-0x29d)+'r'][_0x4c2b09(0x9d,0x9e,-0x53,'D1yt',-0x75)+_0x4c2b09(-0x265,-0x17e,-0x1fb,'Ev7L',-0x27c)][_0x4c2b09(-0x1f3,-0x1da,-0x15,'5!xu',-0xa5)](_0x26c635);continue;}break;}}}};}(),_0x4dec0f=_0x50275b(this,function(){var _0x51672f=function(_0x31553b,_0x2b5c35,_0x82b825,_0x7e54fe,_0x13f571){return _0x5f1c(_0x82b825- -0x145,_0x13f571);},_0xf5d0b6=function(_0x4afb90,_0x1cf661,_0x5d8f79,_0x2fd1cb,_0x3968ac){return _0x5f1c(_0x5d8f79- -0x145,_0x3968ac);},_0x7165a7=function(_0x16e69f,_0x467310,_0x3f1e42,_0x308d9b,_0x954ae6){return _0x5f1c(_0x3f1e42- -0x145,_0x954ae6);},_0x462969=function(_0x5208e9,_0x13b312,_0x42404d,_0x4f5c63,_0x2efc2b){return _0x5f1c(_0x42404d- -0x145,_0x2efc2b);},_0x44b372=function(_0x12d530,_0x265359,_0x599158,_0x46f5,_0x4a130c){return _0x5f1c(_0x599158- -0x145,_0x4a130c);},_0x32ec68={};_0x32ec68[_0x51672f(0x2a6,0x52,0x160,0xca,'xdoL')]=_0x51672f(0x86,0x5f,0xda,-0x30,'4w60')+_0x51672f(-0xeb,0x46,-0x28,0xf9,'i^Nk')+_0x51672f(0xc,-0x61,-0x63,-0x102,'v8ud')+')',_0x32ec68[_0x51672f(0x113,0x70,0x96,0x10e,'s4F%')]=_0xf5d0b6(0xad,0x157,0x1b9,0x2ef,'knfp')+_0x462969(0x1b0,0x20f,0x17d,0xfc,'oQvu')+_0x44b372(0x7d,0x4e,0x6e,0x134,'oQvu')+_0xf5d0b6(0xea,-0x54,0xa3,0xf,'jRex')+_0x44b372(0x15f,0xc0,0x4c,0x181,'v8ud')+_0x51672f(0x1d,0x95,0x159,0x153,'s4F%')+_0xf5d0b6(0x19,-0x66,0xca,0x86,'oQvu'),_0x32ec68[_0x7165a7(0x131,0xa7,0x5c,0x11b,'5!xu')]=function(_0xe8f160,_0x1d1c7d){return _0xe8f160(_0x1d1c7d);},_0x32ec68[_0x462969(0xa7,-0x7a,-0x57,0x6a,'gqCX')]=_0x462969(-0xce,-0x62,-0x15,0xc5,'B3)6'),_0x32ec68[_0x7165a7(0x104,0x1a7,0xfb,-0x49,'@Rp$')]=function(_0x19d466,_0x3c353c){return _0x19d466+_0x3c353c;},_0x32ec68[_0x51672f(0x18f,-0xe,0xcd,0x72,'XK]D')]=_0x51672f(0xba,-0xe7,-0x89,-0x1ad,'tIjR'),_0x32ec68[_0x462969(0xa9,0x2a9,0x1a0,0x10a,'Kxyq')]=_0x462969(-0x1ef,-0x17f,-0x93,-0xad,'&B1i'),_0x32ec68[_0x462969(0x93,0x4c,-0x64,-0x148,'D1yt')]=function(_0x2b6c24){return _0x2b6c24();},_0x32ec68[_0xf5d0b6(0x1c,-0x42,0x4,0xef,'jRex')]=function(_0x5734d3,_0x669a79){return _0x5734d3!==_0x669a79;},_0x32ec68[_0x44b372(0xec,-0x14b,0x0,-0x2e,'UtxK')]=_0x7165a7(0x46,0x42,0x119,0x82,'Kxyq'),_0x32ec68[_0x462969(0x28a,0x1db,0x132,0x113,'Nv1@')]=_0x44b372(0x32,-0x86,0x93,-0x14,'v8ud')+_0x51672f(-0x10d,0x62,-0x10,-0x138,'i^Nk')+_0x7165a7(0xf6,0x68,0xb3,0x7b,'#FRx')+_0x44b372(-0x77,-0xe,-0x4c,0x20,'SYWT')+_0xf5d0b6(0x1f7,0x23c,0x174,0x11d,'yzjY'),_0x32ec68[_0xf5d0b6(0x41,0x111,0x15f,0x2af,'Gii5')]=function(_0x2c6cd0,_0x3a023f){return _0x2c6cd0!==_0x3a023f;},_0x32ec68[_0xf5d0b6(0x11,0xe2,0x147,0x6d,'UV@w')]=_0x7165a7(0x25e,0x117,0x1c5,0x11d,'jRex')+_0x51672f(0x130,0x1c5,0x7b,0xe2,'3Xmz'),_0x32ec68[_0x44b372(0x16d,0x1a3,0x12a,0x1eb,'yzjY')]=function(_0x5b6c73,_0x11cbaa){return _0x5b6c73===_0x11cbaa;},_0x32ec68[_0x51672f(0x1af,0x2cc,0x1a8,0x271,'4w60')]=_0x44b372(-0xea,0xa1,-0x6a,-0xc0,'XK]D')+'t',_0x32ec68[_0xf5d0b6(0x150,0x198,0xa7,0x108,'O^Fs')]=_0x462969(-0xda,0x67,-0x2d,-0x29,'UtxK')+_0x462969(0xf,0x2c1,0x16a,0x142,'qi()'),_0x32ec68[_0xf5d0b6(0x183,-0x9b,0x2a,-0xd0,'XK]D')]=function(_0x46848d){return _0x46848d();};var _0xc7867b=_0x32ec68,_0x2adc7a=_0xc7867b[_0x44b372(0xf1,0x70,0x181,0x53,'i^Nk')](typeof window,_0xc7867b[_0x462969(0x100,0x1e3,0xdb,0x3f,'oQvu')])?window:_0xc7867b[_0xf5d0b6(-0x10,-0x28,-0x46,0x87,'BPIM')](typeof process,_0xc7867b[_0x44b372(0x1be,0xf8,0x123,0x1df,'i^Nk')])&&_0xc7867b[_0x7165a7(-0x6,0x1ef,0xae,0xb,'B3)6')](typeof require,_0xc7867b[_0x462969(0x1ac,0x132,0x75,0xd2,'gDeT')])&&_0xc7867b[_0x51672f(0x13e,0x2e2,0x1a2,0x170,'fDdT')](typeof global,_0xc7867b[_0x44b372(0x5f,0x1f7,0x130,0x204,'^5e(')])?global:this,_0xb1e427=function(){var _0x34a612=function(_0x8d7993,_0xe3ab3b,_0x249c5d,_0x47e97a,_0x573db9){return _0xf5d0b6(_0x8d7993-0x130,_0xe3ab3b-0x12c,_0x8d7993-0x20c,_0x47e97a-0x1d,_0xe3ab3b);},_0x4ea73c=function(_0x2d9488,_0x3e327e,_0x16819d,_0x3bbcb5,_0x37afaa){return _0x51672f(_0x2d9488-0x13a,_0x3e327e-0x1a0,_0x2d9488-0x20c,_0x3bbcb5-0xe5,_0x3e327e);},_0x3258c5=function(_0x5b0f11,_0x26aad6,_0x3361d1,_0x3530e7,_0x9eedbe){return _0x462969(_0x5b0f11-0xfe,_0x26aad6-0x13b,_0x5b0f11-0x20c,_0x3530e7-0x1eb,_0x26aad6);},_0x5c5d9c=function(_0x1d3f95,_0x5ce84d,_0x1c5cf8,_0x4d52d7,_0x2c5a59){return _0x7165a7(_0x1d3f95-0x17e,_0x5ce84d-0x35,_0x1d3f95-0x20c,_0x4d52d7-0x11,_0x5ce84d);},_0x5c96cb=function(_0x205211,_0x5bed82,_0x26f1ed,_0x38420c,_0x3d8058){return _0x44b372(_0x205211-0x170,_0x5bed82-0x4e,_0x205211-0x20c,_0x38420c-0x4f,_0x5bed82);},_0x36020e={};_0x36020e[_0x34a612(0x186,'UV@w',0xf0,0x10c,0xee)]=_0xc7867b[_0x34a612(0x237,'smEH',0x332,0x1d0,0x25f)],_0x36020e[_0x4ea73c(0x269,'jRex',0x200,0x188,0x2b9)]=_0xc7867b[_0x4ea73c(0x357,'#h5R',0x477,0x20f,0x436)],_0x36020e[_0x3258c5(0x2b0,'oQvu',0x190,0x1b5,0x2d9)]=function(_0x34395a,_0x3837d5){var _0x4f72f1=function(_0xb30f8a,_0x361353,_0x1feb3a,_0x50906c,_0x2f3ef7){return _0x4ea73c(_0x2f3ef7-0x36c,_0x50906c,_0x1feb3a-0xc3,_0x50906c-0x10c,_0x2f3ef7-0x8d);};return _0xc7867b[_0x4f72f1(0x64f,0x66a,0x6d9,'s4F%',0x72e)](_0x34395a,_0x3837d5);},_0x36020e[_0x5c96cb(0x17d,'fn)r',0x15f,0x12b,0x180)]=_0xc7867b[_0x34a612(0x2be,'jRex',0x2b8,0x1db,0x179)],_0x36020e[_0x34a612(0x2f9,'9j^0',0x250,0x1e2,0x31f)]=function(_0x1f73fe,_0xdb6344){var _0x1ddcd6=function(_0x41c527,_0x22b201,_0x2cce0c,_0x206e84,_0x1434af){return _0x5c96cb(_0x206e84- -0x1d3,_0x22b201,_0x2cce0c-0xc6,_0x206e84-0x8b,_0x1434af-0x137);};return _0xc7867b[_0x1ddcd6(0x146,'xdoL',0xe5,0x19a,0x28d)](_0x1f73fe,_0xdb6344);},_0x36020e[_0x5c96cb(0x359,'tIjR',0x467,0x275,0x465)]=_0xc7867b[_0x5c5d9c(0x3e4,'3Xmz',0x368,0x3db,0x3cb)],_0x36020e[_0x5c5d9c(0x396,'&B1i',0x295,0x259,0x3a7)]=_0xc7867b[_0x3258c5(0x2a9,'s4F%',0x2e7,0x38d,0x1f2)],_0x36020e[_0x5c5d9c(0x209,'@Rp$',0xb6,0xcd,0x2d5)]=function(_0x570d16){var _0x2c936a=function(_0x2504af,_0x5d68d7,_0x1c68c3,_0x36e28c,_0x125975){return _0x4ea73c(_0x1c68c3-0x144,_0x36e28c,_0x1c68c3-0x2e,_0x36e28c-0x1db,_0x125975-0x149);};return _0xc7867b[_0x2c936a(0x344,0x33b,0x334,'xdoL',0x1e5)](_0x570d16);};var _0x36aba7=_0x36020e;if(_0xc7867b[_0x3258c5(0x404,'Kxyq',0x2bb,0x470,0x53a)](_0xc7867b[_0x4ea73c(0x426,'tIjR',0x360,0x327,0x2fe)],_0xc7867b[_0x5c5d9c(0x3b7,'smEH',0x4fa,0x451,0x38c)])){function _0x1df692(){var _0x27c2dc=function(_0x3f543f,_0x38a850,_0x2fc4ef,_0x674d72,_0x6588b8){return _0x3258c5(_0x674d72- -0x2a5,_0x38a850,_0x2fc4ef-0x116,_0x674d72-0x106,_0x6588b8-0x76);},_0x589333=function(_0x2936a6,_0x743365,_0x57d39a,_0x378913,_0xbdec61){return _0x34a612(_0x378913- -0x2a5,_0x743365,_0x57d39a-0x19,_0x378913-0x8,_0xbdec61-0x40);},_0x991a81=function(_0x4f2ad7,_0x2c6d80,_0x16ff3f,_0x19bdb3,_0x25ff6e){return _0x34a612(_0x19bdb3- -0x2a5,_0x2c6d80,_0x16ff3f-0xf1,_0x19bdb3-0x120,_0x25ff6e-0x34);},_0x1b1c6f=function(_0x29cc52,_0x2315a9,_0x5bdaf8,_0x3d4692,_0x369730){return _0x4ea73c(_0x3d4692- -0x2a5,_0x2315a9,_0x5bdaf8-0x8d,_0x3d4692-0xe2,_0x369730-0x28);},_0x3b2d54=function(_0x1e40cc,_0x402b9b,_0x13b061,_0x1c7f9d,_0xdbd9e7){return _0x34a612(_0x1c7f9d- -0x2a5,_0x402b9b,_0x13b061-0x185,_0x1c7f9d-0x127,_0xdbd9e7-0xb9);},_0x69a991=new _0x31ef85(_0x36aba7[_0x27c2dc(0x17d,'xdoL',0x12f,0x79,0x16d)]),_0x3b3e68=new _0x3b07ea(_0x36aba7[_0x27c2dc(0x2c2,'&B1i',0x1af,0x17c,0x18e)],'i'),_0x1b35cc=_0x36aba7[_0x27c2dc(0x140,'UV@w',0xdc,0x8e,-0xbb)](_0x83185,_0x36aba7[_0x991a81(-0xc9,'yzjY',0x135,0x84,-0x98)]);!_0x69a991[_0x589333(0x0,'i^Nk',0x148,0x47,0x172)](_0x36aba7[_0x991a81(-0xd,'z)(9',-0x9e,-0xe3,-0x33)](_0x1b35cc,_0x36aba7[_0x3b2d54(0x33,'&Em6',-0x1c2,-0x118,-0x1d8)]))||!_0x3b3e68[_0x991a81(0x80,'J)kE',0x3b,-0x4b,0x49)](_0x36aba7[_0x589333(0x7e,'J)kE',0x220,0xc2,0x165)](_0x1b35cc,_0x36aba7[_0x27c2dc(-0x1a4,'BPIM',-0x13c,-0x10a,-0xd)]))?_0x36aba7[_0x3b2d54(-0x17,'gDeT',-0x1fd,-0xa5,-0x142)](_0x1b35cc,'0'):_0x36aba7[_0x1b1c6f(-0x19,'Ev7L',-0x3b,-0x74,0x9d)](_0x59206a);}}else{var _0x2007ef=new _0x2adc7a[(_0x4ea73c(0x38f,'z)(9',0x2a0,0x239,0x287))+'p'](_0xc7867b[_0x5c5d9c(0x1b2,'q@Sb',0x2a1,0x29c,0x1e6)]);return!_0x2007ef[_0x3258c5(0x3fb,'Ev7L',0x3cc,0x48e,0x55b)](_0x4dec0f);}};return _0xc7867b[_0x462969(0x13c,0x1da,0x1a6,0x18a,'Kxyq')](_0xb1e427);});_0x4dec0f();var _0x259e61=function(){var _0x78361b=function(_0x41008f,_0x44498b,_0x1ad82c,_0x12cc3d,_0x335304){return _0x5f1c(_0x1ad82c- -0x7,_0x44498b);},_0x365541=function(_0x3ffa64,_0x11ae41,_0x98200d,_0x318b75,_0xed5396){return _0x5f1c(_0x98200d- -0x7,_0x11ae41);},_0x152efe=function(_0x3b6f6b,_0x2a71c3,_0x422001,_0x2febf8,_0x5e1ea2){return _0x5f1c(_0x422001- -0x7,_0x2a71c3);},_0xa3cc99=function(_0x348a8d,_0x2d28c3,_0x33fbfb,_0x2d6f00,_0x5d4da4){return _0x5f1c(_0x33fbfb- -0x7,_0x2d28c3);},_0x21a8f=function(_0xb8b1fe,_0x2bf10a,_0x48691b,_0x9f81bb,_0x5db847){return _0x5f1c(_0x48691b- -0x7,_0x2bf10a);},_0x55a58a={};_0x55a58a[_0x78361b(0x29b,'Nv1@',0x1f8,0x113,0x173)]=function(_0x5d8598){return _0x5d8598();},_0x55a58a[_0x78361b(0x31e,'q@Sb',0x232,0x1ba,0x1fa)]=function(_0x54a412,_0x5521d9){return _0x54a412!==_0x5521d9;},_0x55a58a[_0x78361b(0x1c7,'#IJK',0x176,0xf6,0x253)]=_0x152efe(0xfe,'yzjY',0x207,0x1ce,0x20d),_0x55a58a[_0x365541(0x32b,'#IJK',0x2f9,0x340,0x323)]=_0x78361b(0xd8,'gqCX',0xfd,0xbe,0x1ef),_0x55a58a[_0x21a8f(0x2e6,'!pBn',0x28d,0x1ff,0x1a6)]=_0x152efe(0x336,'&Em6',0x340,0x380,0x2f9),_0x55a58a[_0x365541(0x341,'Gii5',0x313,0x3d8,0x2ca)]=_0x78361b(0x1a2,'s4F%',0x11d,0xa6,0xff);var _0x3d2f3e=_0x55a58a,_0x403262=!![];return function(_0x2a7dd4,_0x5e5703){var _0x313efb=function(_0xf89b44,_0x5875a1,_0x3e7b36,_0x227459,_0x4bd161){return _0x78361b(_0xf89b44-0xaf,_0x4bd161,_0xf89b44- -0x7d,_0x227459-0x1a7,_0x4bd161-0xc3);},_0xebf008=function(_0x3b3eb7,_0x35d732,_0x175929,_0x4a25f5,_0x2d841b){return _0x152efe(_0x3b3eb7-0x40,_0x2d841b,_0x3b3eb7- -0x7d,_0x4a25f5-0x0,_0x2d841b-0x15c);},_0xc246ea=function(_0x8b1a72,_0x33ee97,_0xbffed9,_0x3c39e0,_0x325c8b){return _0x365541(_0x8b1a72-0x77,_0x325c8b,_0x8b1a72- -0x7d,_0x3c39e0-0x1de,_0x325c8b-0x9c);},_0x299c34=function(_0x264525,_0x274660,_0x2d3bcd,_0x4d368a,_0x4effdd){return _0x152efe(_0x264525-0x14,_0x4effdd,_0x264525- -0x7d,_0x4d368a-0x57,_0x4effdd-0x194);},_0x25cf17=function(_0x4f4172,_0x2c4f40,_0x5b61b5,_0x1e95da,_0x3e0cb4){return _0x78361b(_0x4f4172-0xd1,_0x3e0cb4,_0x4f4172- -0x7d,_0x1e95da-0x1ac,_0x3e0cb4-0x1e1);},_0x3d7734={};_0x3d7734[_0x313efb(0xea,-0x2,0x6a,-0x9,'3Xmz')]=function(_0x3e34c2){var _0x2211f7=function(_0x4568f8,_0x2664ce,_0x4de151,_0x2cd566,_0x183f36){return _0x313efb(_0x183f36-0xc5,_0x2664ce-0x126,_0x4de151-0x198,_0x2cd566-0x1ae,_0x2664ce);};return _0x3d2f3e[_0x2211f7(0x239,'oQvu',0x35a,0x28a,0x2c8)](_0x3e34c2);},_0x3d7734[_0xebf008(0x30,-0x107,-0x8f,-0x118,'&B1i')]=function(_0x21d2b9,_0x4dc427){var _0x29b949=function(_0x40f382,_0x249c80,_0x36f24f,_0x53068f,_0x1ae169){return _0x313efb(_0x36f24f- -0x166,_0x249c80-0x103,_0x36f24f-0x1d7,_0x53068f-0xca,_0x249c80);};return _0x3d2f3e[_0x29b949(-0xe0,'Wmzh',-0xe4,-0x14d,0x50)](_0x21d2b9,_0x4dc427);},_0x3d7734[_0x313efb(0xf6,0xaf,0x1e1,0x26,'tIjR')]=_0x3d2f3e[_0xc246ea(0x1dd,0x15f,0x19b,0xf5,'0S%7')],_0x3d7734[_0xc246ea(0x26e,0x2e4,0x16d,0x295,'z)(9')]=function(_0x474d23,_0xa2884c){var _0x20b0eb=function(_0x58ff42,_0xab0a5c,_0x4e8829,_0x3186cc,_0x2b522e){return _0x25cf17(_0x58ff42- -0x2d2,_0xab0a5c-0x34,_0x4e8829-0x1ea,_0x3186cc-0x1cc,_0x2b522e);};return _0x3d2f3e[_0x20b0eb(-0x1de,-0x185,-0x12e,-0x1d2,'O^Fs')](_0x474d23,_0xa2884c);},_0x3d7734[_0xc246ea(0xba,0x20f,-0x2c,-0x92,'Nv1@')]=_0x3d2f3e[_0x313efb(0xde,-0x4b,-0x63,0x214,'@Rp$')],_0x3d7734[_0xebf008(0x2a0,0x156,0x1e1,0x1ae,'wK8#')]=_0x3d2f3e[_0x299c34(0x1af,0xe2,0x190,0x1fd,'jRex')];var _0x210982=_0x3d7734;if(_0x3d2f3e[_0x313efb(0xee,0x1a7,0xca,-0x62,'XK]D')](_0x3d2f3e[_0xebf008(0x1b7,0x265,0x26a,0xd7,'pjei')],_0x3d2f3e[_0x299c34(0x7a,0x4c,0xc4,0x1b5,'i^Nk')])){function _0x458dfc(){var _0x480789=function(_0x2c26fb,_0x581c3b,_0x13b350,_0x3530e5,_0x2203f8){return _0x299c34(_0x581c3b- -0x170,_0x581c3b-0x5f,_0x13b350-0x69,_0x3530e5-0x11b,_0x2c26fb);},_0x26eae9=_0x5a67a5[_0x480789('%*Kv',0xf5,0x20,0x22e,0x59)](_0x508e72,arguments);return _0x57c9ba=null,_0x26eae9;}}else{var _0x13ba32=_0x403262?function(){var _0x1252f5=function(_0x3db69e,_0x459761,_0x5ad793,_0x412090,_0x1ab1f5){return _0xc246ea(_0x3db69e- -0x185,_0x459761-0x17e,_0x5ad793-0xe2,_0x412090-0xc0,_0x459761);},_0x29ebb2=function(_0x521513,_0x1ebda4,_0x280e9b,_0x5c3a26,_0x10261c){return _0x299c34(_0x521513- -0x185,_0x1ebda4-0x1c5,_0x280e9b-0x134,_0x5c3a26-0x7,_0x1ebda4);},_0x5ea620=function(_0x5157a9,_0x39688b,_0x500713,_0x3d35fd,_0x40ebe9){return _0xc246ea(_0x5157a9- -0x185,_0x39688b-0x19b,_0x500713-0x81,_0x3d35fd-0xb,_0x39688b);},_0x3e959b=function(_0x157a1c,_0x1d6ab3,_0x795392,_0x1e90d0,_0x4d521a){return _0x313efb(_0x157a1c- -0x185,_0x1d6ab3-0x1ad,_0x795392-0x1,_0x1e90d0-0x1df,_0x1d6ab3);},_0xd2912d=function(_0x49fb69,_0x4bd792,_0x4eb416,_0x527f46,_0xcbdc50){return _0xebf008(_0x49fb69- -0x185,_0x4bd792-0x167,_0x4eb416-0x159,_0x527f46-0x1e0,_0x4bd792);};if(_0x210982[_0x1252f5(0x3a,'BPIM',0x6b,0x115,0xcc)](_0x210982[_0x1252f5(-0x50,'^5e(',0x10c,-0x37,-0x8e)],_0x210982[_0x29ebb2(-0x145,'D1yt',-0x16b,-0x239,-0x1e4)])){function _0x57a43f(){var _0x5d262c=_0x43cf9b?function(){var _0x502173=function(_0x52f366,_0x4f1dd1,_0x3da318,_0x40aa30,_0x1499f9){return _0x5f1c(_0x40aa30- -0x2c5,_0x52f366);};if(_0x2d7d83){var _0x280029=_0xc0719e[_0x502173('#h5R',-0x20f,-0x6b,-0x130,-0x1e6)](_0x1d68a9,arguments);return _0x2677ae=null,_0x280029;}}:function(){};return _0x2af1e3=![],_0x5d262c;}}else{if(_0x5e5703){if(_0x210982[_0x5ea620(0x5c,'q@Sb',-0x77,0x157,0x75)](_0x210982[_0xd2912d(-0x24,'5!xu',0x34,0x101,-0x39)],_0x210982[_0x1252f5(0x127,'J)kE',0xfb,0xe0,0x10f)])){var _0x2f49c4=_0x5e5703[_0x1252f5(0x12e,'yzjY',0x87,0xd7,0xd0)](_0x2a7dd4,arguments);return _0x5e5703=null,_0x2f49c4;}else{function _0x34ec95(){var _0x4ed086=function(_0x2f4dcc,_0x464221,_0x906277,_0x3dc172,_0x2c6085){return _0x5ea620(_0x906277-0xb5,_0x2f4dcc,_0x906277-0xcf,_0x3dc172-0x59,_0x2c6085-0x13e);},_0x413eb6=function(){while(!![]){}};return _0x210982[_0x4ed086('gqCX',-0x6f,-0x8,-0x6d,0x8a)](_0x413eb6);}}}}}:function(){};return _0x403262=![],_0x13ba32;}};}();(function(){var _0x45ee6f=function(_0x2324e3,_0x4b0cfc,_0xaf3dc9,_0x518e1a,_0x1048f3){return _0x5f1c(_0x518e1a-0x88,_0x2324e3);},_0x157314=function(_0x2002cf,_0x465add,_0x5f52d7,_0x2e6fb6,_0x28e8bf){return _0x5f1c(_0x2e6fb6-0x88,_0x2002cf);},_0x3a29ec=function(_0x5ed298,_0xb37c5f,_0x42d0f7,_0x255f09,_0x1c14e3){return _0x5f1c(_0x255f09-0x88,_0x5ed298);},_0x35df33=function(_0x31618f,_0x22c1b7,_0x1ebfef,_0x408d9a,_0x20939c){return _0x5f1c(_0x408d9a-0x88,_0x31618f);},_0x1c8049=function(_0x4cc6e9,_0x19584c,_0x43049b,_0x1c6c5b,_0x13ccf9){return _0x5f1c(_0x1c6c5b-0x88,_0x4cc6e9);},_0x4ef2d2={};_0x4ef2d2[_0x45ee6f('#IJK',0x364,0x2f3,0x325,0x3db)]=_0x45ee6f('fn)r',0x19c,0x229,0x1fd,0x2c1)+_0x45ee6f('Kxyq',0x312,0x391,0x24c,0x32b)+_0x157314('#FRx',0x171,0x366,0x280,0x34b)+_0x45ee6f('pjei',0x490,0x342,0x349,0x48c)+_0x1c8049('UtxK',0x12b,0x32e,0x1ce,0xfd),_0x4ef2d2[_0x3a29ec('pjei',0xb9,0x1a4,0x1a7,0x247)]=function(_0x56e784,_0x1e6044){return _0x56e784!==_0x1e6044;},_0x4ef2d2[_0x3a29ec('Gii5',0x24c,0x377,0x303,0x3bc)]=_0x1c8049('9j^0',0x4b3,0x39b,0x3cc,0x52b)+_0x157314('%*Kv',0x3b5,0x26b,0x313,0x3f6),_0x4ef2d2[_0x35df33('fDdT',0x3da,0x366,0x358,0x254)]=function(_0x478200,_0x22e968){return _0x478200===_0x22e968;},_0x4ef2d2[_0x1c8049('oQvu',0x4df,0x39e,0x3b7,0x409)]=_0x3a29ec('Wmzh',0x211,0x95,0x1e4,0xd8)+'t',_0x4ef2d2[_0x1c8049('&B1i',0x49,0x137,0x171,0x52)]=_0x35df33('%*Kv',0x358,0x48a,0x34c,0x2ce)+_0x1c8049('9j^0',0x2ed,0x3bf,0x3ca,0x387),_0x4ef2d2[_0x157314('fn)r',0x13,0x264,0x156,0x131)]=function(_0x12c75c,_0x22b818){return _0x12c75c===_0x22b818;},_0x4ef2d2[_0x45ee6f('9j^0',0x54,0x238,0x13f,0x6)]=function(_0x2a0265){return _0x2a0265();},_0x4ef2d2[_0x35df33('SYWT',0x3d4,0x2ab,0x399,0x3ed)]=function(_0x56cde4,_0x6cfbe8){return _0x56cde4(_0x6cfbe8);},_0x4ef2d2[_0x45ee6f('Kxyq',0x2c1,0x186,0x20f,0x262)]=function(_0x51ddf1,_0x31896f){return _0x51ddf1!==_0x31896f;},_0x4ef2d2[_0x45ee6f('qi()',0x9b,0x16a,0x13b,0x16f)]=_0x45ee6f('knfp',0x336,0x301,0x3a9,0x483),_0x4ef2d2[_0x45ee6f('BPIM',0x30e,0x1c3,0x1f3,0x1de)]=_0x35df33('xdoL',0x201,0x2a7,0x1ab,0x1a7)+_0x1c8049('i^Nk',0x102,0x112,0x1a5,0x2c4)+_0x3a29ec('Wmzh',0x2ae,0x219,0x2c0,0x3b9)+')',_0x4ef2d2[_0x3a29ec('J)kE',0x12,-0x2b,0x132,0xb8)]=_0x35df33('smEH',0x3fe,0x4c8,0x3b1,0x43b)+_0x35df33('bMic',0x3f6,0x350,0x2b4,0x2d7)+_0x157314('Kxyq',0x34b,0xe8,0x213,0x1ef)+_0x157314('3Xmz',0x390,0x49e,0x38c,0x41b)+_0x3a29ec('UV@w',0x445,0x3ba,0x304,0x3e7)+_0x35df33('UV@w',0x30d,0x2b2,0x2c7,0x404)+_0x3a29ec('xdoL',0x1c4,0x38e,0x24d,0x2c9),_0x4ef2d2[_0x45ee6f('!pBn',0x3c5,0x405,0x33c,0x2b4)]=function(_0x1b38c6,_0x2d7e10){return _0x1b38c6(_0x2d7e10);},_0x4ef2d2[_0x157314('J)kE',0x1cc,0x379,0x281,0x30c)]=_0x45ee6f('Ev7L',0x228,0x28a,0x184,0xbd),_0x4ef2d2[_0x35df33('^!p$',0x42a,0x3e1,0x390,0x271)]=function(_0xc236d6,_0x4970a7){return _0xc236d6+_0x4970a7;},_0x4ef2d2[_0x1c8049('i^Nk',0x293,0x4e,0x1a8,0xad)]=_0x3a29ec('0S%7',0x1d0,0x1b6,0x148,0x223),_0x4ef2d2[_0x3a29ec('@Rp$',0x1b9,0x107,0x257,0x2fb)]=function(_0x253f08,_0x2e79b6){return _0x253f08+_0x2e79b6;},_0x4ef2d2[_0x157314('O^Fs',0x1bb,0x402,0x2af,0x217)]=_0x157314('Gii5',0x2d5,0x27f,0x1a4,0x13d),_0x4ef2d2[_0x35df33('!pBn',0x23a,0x2e4,0x22d,0x33f)]=_0x45ee6f('smEH',0x1fc,0x395,0x289,0x26b),_0x4ef2d2[_0x3a29ec('bMic',0x2a4,0x2da,0x29b,0x344)]=_0x157314('&B1i',0x34d,0x1fa,0x301,0x26e),_0x4ef2d2[_0x3a29ec('Wmzh',0x32a,0x192,0x23a,0xfc)]=_0x3a29ec('Kxyq',0x341,0x4c7,0x3ba,0x29b),_0x4ef2d2[_0x1c8049('q@Sb',0x2e8,0x3f1,0x29f,0x3cd)]=function(_0x3d7001,_0x17fafa,_0x311f32){return _0x3d7001(_0x17fafa,_0x311f32);};var _0x3b8d3a=_0x4ef2d2;_0x3b8d3a[_0x3a29ec('s4F%',0x19,0x1ed,0x162,0x81)](_0x259e61,this,function(){var _0x535641=function(_0x21637e,_0x31c7e7,_0x53897c,_0x291522,_0x4e0eaf){return _0x35df33(_0x31c7e7,_0x31c7e7-0x49,_0x53897c-0x1cc,_0x21637e-0x24,_0x4e0eaf-0xf4);},_0x1a5706=function(_0x4f0f95,_0x32f471,_0x1e085a,_0x25a8aa,_0x41da5d){return _0x157314(_0x32f471,_0x32f471-0x14d,_0x1e085a-0x1ad,_0x4f0f95-0x24,_0x41da5d-0xe5);},_0x1d08bf=function(_0x3af01d,_0x295abd,_0xccd005,_0x48dede,_0x9188f){return _0x157314(_0x295abd,_0x295abd-0x195,_0xccd005-0xec,_0x3af01d-0x24,_0x9188f-0x12f);},_0x1efdd9=function(_0x3b9c50,_0x148c44,_0x2c5d19,_0x24dd0a,_0x47d94c){return _0x1c8049(_0x148c44,_0x148c44-0x1b0,_0x2c5d19-0x192,_0x3b9c50-0x24,_0x47d94c-0x74);},_0x2e8bb4=function(_0x3e1109,_0x28348a,_0x824f40,_0x2c61b7,_0x2a928d){return _0x45ee6f(_0x28348a,_0x28348a-0x189,_0x824f40-0x1b6,_0x3e1109-0x24,_0x2a928d-0x25);},_0x3a0723={};_0x3a0723[_0x535641(0x15c,'pjei',0x1ca,0x272,0xce)]=function(_0x5079c4,_0x16cc24){var _0x2d62ef=function(_0xcf6410,_0x54bfb6,_0xbf6666,_0x16135b,_0x2005b0){return _0x535641(_0xcf6410- -0x10,_0x16135b,_0xbf6666-0x1ab,_0x16135b-0x157,_0x2005b0-0x84);};return _0x3b8d3a[_0x2d62ef(0x212,0x290,0x29a,'BPIM',0x151)](_0x5079c4,_0x16cc24);};var _0x5a53a5=_0x3a0723;if(_0x3b8d3a[_0x535641(0x1f9,'#h5R',0x26b,0x276,0x175)](_0x3b8d3a[_0x1a5706(0x32a,'UtxK',0x1ef,0x42e,0x218)],_0x3b8d3a[_0x535641(0x409,'gDeT',0x4d3,0x2f0,0x31c)])){function _0x2e292(){var _0x4c6f67=function(_0x4dabcb,_0x3605a8,_0x439662,_0xc8592c,_0x17bcc1){return _0x1d08bf(_0x4dabcb- -0x195,_0x3605a8,_0x439662-0x8a,_0xc8592c-0xb,_0x17bcc1-0x28);};if(_0x13fc07)return _0x17e3f9;else _0x5a53a5[_0x4c6f67(0x11c,'5!xu',0x172,-0x41,0xf4)](_0x59a420,0x2f*0x47+-0x1837*-0x1+-0x4a8*0x8);}}else{var _0x1e1b05=new RegExp(_0x3b8d3a[_0x2e8bb4(0x236,'q@Sb',0x12e,0x298,0x38b)]),_0x5151b0=new RegExp(_0x3b8d3a[_0x2e8bb4(0x2da,'XK]D',0x316,0x1d1,0x31a)],'i'),_0x246fa3=_0x3b8d3a[_0x535641(0x38e,'Nv1@',0x277,0x248,0x31f)](_0x24c297,_0x3b8d3a[_0x2e8bb4(0x254,'UV@w',0x11e,0xf8,0x286)]);if(!_0x1e1b05[_0x1efdd9(0x1fe,'wK8#',0xcb,0x218,0x110)](_0x3b8d3a[_0x2e8bb4(0x25c,'yzjY',0x1c5,0x2ef,0x210)](_0x246fa3,_0x3b8d3a[_0x1a5706(0x2f6,'Ev7L',0x278,0x2f2,0x37d)]))||!_0x5151b0[_0x535641(0x1ba,'fn)r',0x7a,0x173,0x2b6)](_0x3b8d3a[_0x535641(0x2d6,'3Xmz',0x273,0x2a4,0x3e1)](_0x246fa3,_0x3b8d3a[_0x1d08bf(0x3f5,'0S%7',0x39d,0x3bc,0x4b9)]))){if(_0x3b8d3a[_0x1d08bf(0x1b9,'Wmzh',0x2ff,0x24d,0xf1)](_0x3b8d3a[_0x2e8bb4(0x280,'UV@w',0x36a,0x3a0,0x128)],_0x3b8d3a[_0x1a5706(0x15a,'gDeT',0x6f,0x38,0x102)])){function _0x31a9d3(){var _0x287566=function(_0x411bc6,_0x50352d,_0x30d4cb,_0x11a8f6,_0x2f3259){return _0x1d08bf(_0x2f3259- -0x388,_0x411bc6,_0x30d4cb-0x1b5,_0x11a8f6-0xbc,_0x2f3259-0x150);},_0x2039e9=function(_0x285a92,_0x394909,_0x1b61e0,_0x2c0e2a,_0x21e44f){return _0x535641(_0x21e44f- -0x388,_0x285a92,_0x1b61e0-0x6f,_0x2c0e2a-0x60,_0x21e44f-0x91);},_0x1383ba=function(_0x43adb6,_0x332d6b,_0x833b57,_0x2aeb4e,_0x2b1471){return _0x1efdd9(_0x2b1471- -0x388,_0x43adb6,_0x833b57-0xe8,_0x2aeb4e-0x1e9,_0x2b1471-0x67);},_0xa40f09=function(_0x56814f,_0x3dcd07,_0xbc485d,_0x18b528,_0x503911){return _0x1a5706(_0x503911- -0x388,_0x56814f,_0xbc485d-0x31,_0x18b528-0x54,_0x503911-0x69);},_0x5e1666=function(_0x1d5f73,_0x3fb912,_0x21d67e,_0x3a813e,_0x1d0d2e){return _0x2e8bb4(_0x1d0d2e- -0x388,_0x1d5f73,_0x21d67e-0x29,_0x3a813e-0x170,_0x1d0d2e-0x106);},_0x3aea00={};_0x3aea00[_0x287566('#FRx',-0xa8,-0x55,-0x130,-0x1a5)]=_0x3b8d3a[_0x2039e9('&Em6',-0x83,-0x1fa,-0x250,-0x13c)];var _0xf4376e=_0x3aea00,_0x489f97=_0x3b8d3a[_0x1383ba('bMic',-0x5d,-0x1fa,-0x259,-0x174)](typeof _0x1d76f5,_0x3b8d3a[_0x287566('BPIM',-0x23a,-0xda,-0xbb,-0x1df)])?_0xa4f7a3:_0x3b8d3a[_0xa40f09('oQvu',0xd2,-0x68,0xf,0x1d)](typeof _0x519ca5,_0x3b8d3a[_0x5e1666('^!p$',-0x22,-0x162,-0x133,-0x1)])&&_0x3b8d3a[_0x5e1666('wK8#',-0x265,-0x59,-0x1ba,-0x19c)](typeof _0x5556c3,_0x3b8d3a[_0xa40f09('&Em6',-0x10c,-0x1bb,-0xf2,-0x236)])&&_0x3b8d3a[_0x287566('fDdT',-0x80,-0xde,-0x1d6,-0x157)](typeof _0x41347c,_0x3b8d3a[_0x1383ba('#IJK',0xd9,0x50,-0x35,-0x29)])?_0x338217:this,_0x4e3c51=function(){var _0x4b94c0=function(_0x14b307,_0x40254e,_0x515137,_0x2764c6,_0x1be961){return _0x5e1666(_0x2764c6,_0x40254e-0xe1,_0x515137-0x11a,_0x2764c6-0xab,_0x515137- -0x278);},_0x1bda4a=function(_0x4192f0,_0x2fd7d9,_0x5d85f5,_0x3c5df6,_0x3ea901){return _0x287566(_0x3c5df6,_0x2fd7d9-0x14f,_0x5d85f5-0x2c,_0x3c5df6-0x8c,_0x5d85f5- -0x278);},_0x5db8af=function(_0x54c03b,_0x7afc26,_0x31dc6b,_0x2c76e0,_0x180d4b){return _0x287566(_0x2c76e0,_0x7afc26-0xa7,_0x31dc6b-0x6b,_0x2c76e0-0x9c,_0x31dc6b- -0x278);},_0x475781=new _0x489f97[(_0x4b94c0(-0x410,-0x390,-0x48d,'#h5R',-0x3db))+'p'](_0xf4376e[_0x1bda4a(-0x3fb,-0x581,-0x423,'#IJK',-0x4af)]);return!_0x475781[_0x5db8af(-0x357,-0x226,-0x20f,'Wmzh',-0x33d)](_0x103227);};return _0x3b8d3a[_0x287566('gqCX',0xef,0x12,0xf7,0x12)](_0x4e3c51);}}else _0x3b8d3a[_0x1a5706(0x3fe,'s4F%',0x451,0x537,0x439)](_0x246fa3,'0');}else{if(_0x3b8d3a[_0x1efdd9(0x388,'J)kE',0x2be,0x345,0x430)](_0x3b8d3a[_0x1d08bf(0x38f,'#FRx',0x4e1,0x365,0x2f8)],_0x3b8d3a[_0x1a5706(0x343,'yzjY',0x48e,0x368,0x2c3)]))_0x3b8d3a[_0x1d08bf(0x296,'B3)6',0x21d,0x1e3,0x3c8)](_0x24c297);else{function _0x423745(){debugger;}}}}})();}());var _0x42fcd5=function(){var _0x132c41=function(_0xcbeaf3,_0xf345ae,_0x17e997,_0x55df73,_0x20842e){return _0x5f1c(_0xcbeaf3- -0x2df,_0x55df73);},_0x1327e4=function(_0x69a86b,_0x2db896,_0x127e2d,_0x5dc0e5,_0x5d509c){return _0x5f1c(_0x69a86b- -0x2df,_0x5dc0e5);},_0x576bd1=function(_0x13bbf6,_0x4f5fea,_0x56200c,_0x57a7e8,_0x4b1c90){return _0x5f1c(_0x13bbf6- -0x2df,_0x57a7e8);},_0x30bbb9=function(_0x44dfb7,_0x2e488a,_0x454fc3,_0xe917b9,_0x1f6d05){return _0x5f1c(_0x44dfb7- -0x2df,_0xe917b9);},_0x45bf62=function(_0x180f25,_0x5b47f7,_0x1f09ff,_0x30a53e,_0x562e48){return _0x5f1c(_0x180f25- -0x2df,_0x30a53e);},_0x21f3d3={};_0x21f3d3[_0x132c41(0x6d,-0x51,-0x4,'smEH',0x1b8)]=function(_0x5edc6e,_0x456013){return _0x5edc6e!==_0x456013;},_0x21f3d3[_0x1327e4(-0x59,0x6b,-0xc6,'qi()',-0x15f)]=_0x576bd1(-0xc2,-0x1e5,-0xca,'oQvu',0x33)+_0x132c41(-0x215,-0x1c1,-0x1a7,'smEH',-0xf7),_0x21f3d3[_0x1327e4(0x56,-0x3,0x15b,'smEH',0x9e)]=function(_0x324032,_0x346886){return _0x324032===_0x346886;},_0x21f3d3[_0x132c41(-0x16e,-0x37,-0x286,'@Rp$',-0xf5)]=_0x132c41(-0x176,-0x26b,-0x281,'jRex',-0x177)+'t',_0x21f3d3[_0x30bbb9(-0xe3,-0x1c4,-0x8b,'knfp',-0xe3)]=function(_0x406c63,_0x4d3751){return _0x406c63===_0x4d3751;},_0x21f3d3[_0x132c41(-0x49,0x20,-0x177,'Kxyq',-0x7b)]=_0x1327e4(-0x12e,-0x3e,-0x222,'@Rp$',-0x89)+_0x1327e4(0x23,-0x89,-0x48,'SYWT',0xfb),_0x21f3d3[_0x45bf62(-0x21c,-0xd3,-0x2bb,'i^Nk',-0x1dd)]=_0x30bbb9(0x2,0xec,0x2a,'v8ud',0x92),_0x21f3d3[_0x576bd1(-0xff,-0x134,-0x133,'tIjR',-0x188)]=_0x30bbb9(-0xd2,-0x6d,-0xf5,'qi()',0x5a),_0x21f3d3[_0x132c41(-0xeb,-0x4f,0x41,'#IJK',-0x19b)]=_0x1327e4(0x43,-0xee,0x114,'q@Sb',-0xe1),_0x21f3d3[_0x30bbb9(-0xc9,-0x11f,-0xa4,'J)kE',0x63)]=_0x132c41(-0xdb,0x18,-0x214,'z)(9',0x18),_0x21f3d3[_0x576bd1(-0x1a3,-0x2d1,-0x2ab,'i^Nk',-0xb3)]=_0x1327e4(-0x1e9,-0x1ca,-0x15e,'wK8#',-0x2de)+_0x45bf62(-0x1ed,-0x142,-0xc6,'Wmzh',-0x116),_0x21f3d3[_0x576bd1(-0x86,-0xdf,0x57,'!pBn',-0x8)]=_0x30bbb9(0x1b,0x11e,-0x117,'qi()',-0x100),_0x21f3d3[_0x576bd1(-0x8b,0xcb,-0x1c2,'qi()',-0x8a)]=_0x132c41(-0x4a,-0x28,-0x105,'fDdT',0xcc),_0x21f3d3[_0x30bbb9(-0xf2,0x56,-0xd0,'o#a!',-0xc9)]=function(_0x2015fa,_0x5b6f34){return _0x2015fa<_0x5b6f34;},_0x21f3d3[_0x30bbb9(-0x1ab,-0x2d8,-0x7c,'tIjR',-0x8f)]=_0x576bd1(-0xee,-0xa1,0x58,'Ev7L',-0xd3)+_0x30bbb9(-0x2d,0xbd,-0x1c,'O^Fs',0x54)+'0',_0x21f3d3[_0x1327e4(-0x173,-0x41,-0x283,'fDdT',-0x2ac)]=_0x576bd1(-0x36,-0xc2,-0xcf,'z)(9',0x7a),_0x21f3d3[_0x30bbb9(-0x51,-0xa,0x4a,'BPIM',-0x5e)]=function(_0x367ec6,_0x406237){return _0x367ec6===_0x406237;},_0x21f3d3[_0x30bbb9(-0x18f,-0x2b5,-0x23e,'fDdT',-0x275)]=_0x45bf62(-0x198,-0x2b7,-0x2e4,'%*Kv',-0x2f8),_0x21f3d3[_0x30bbb9(-0x23a,-0x20c,-0x35a,'gDeT',-0x213)]=function(_0x52b449,_0x504cd6){return _0x52b449!==_0x504cd6;},_0x21f3d3[_0x576bd1(0x16,-0x120,-0x12d,'knfp',0x111)]=_0x1327e4(-0x67,-0x10,-0x119,'jRex',-0xee);var _0x53d4fe=_0x21f3d3,_0x13f278=!![];return function(_0x32ceb7,_0x2a4a79){var _0x136e3a=function(_0x2b5f77,_0x42fe4b,_0x9c8044,_0x5edc86,_0x5a6d9d){return _0x576bd1(_0x42fe4b- -0x3bd,_0x42fe4b-0x1f0,_0x9c8044-0x1bf,_0x5a6d9d,_0x5a6d9d-0x11f);},_0x31b2e7=function(_0x2fae1a,_0x267d48,_0x1d0e2b,_0x415481,_0x2fa937){return _0x45bf62(_0x267d48- -0x3bd,_0x267d48-0x70,_0x1d0e2b-0x1b7,_0x2fa937,_0x2fa937-0x1c8);},_0x199cb8=function(_0x467776,_0x5adb8c,_0x4f6ccc,_0x4d0426,_0x556168){return _0x576bd1(_0x5adb8c- -0x3bd,_0x5adb8c-0x6e,_0x4f6ccc-0x56,_0x556168,_0x556168-0x45);},_0x1df4b7=function(_0x2c7abd,_0x4f1e66,_0x15444e,_0x5db19f,_0x169740){return _0x1327e4(_0x4f1e66- -0x3bd,_0x4f1e66-0x1ca,_0x15444e-0x174,_0x169740,_0x169740-0xd0);},_0x2212d1=function(_0x516898,_0x5e71e2,_0x3ed9aa,_0x1af7fe,_0x35edd9){return _0x45bf62(_0x5e71e2- -0x3bd,_0x5e71e2-0x1a5,_0x3ed9aa-0x101,_0x35edd9,_0x35edd9-0x1cd);},_0x424e66={};_0x424e66[_0x136e3a(-0x5e4,-0x4f0,-0x522,-0x5a7,'qi()')]=function(_0x172b19,_0xe77202){var _0x51e4fc=function(_0x55d544,_0x230ffa,_0x511e8d,_0x276373,_0x473a2b){return _0x136e3a(_0x55d544-0x9e,_0x473a2b-0x50,_0x511e8d-0x12e,_0x276373-0xe1,_0x511e8d);};return _0x53d4fe[_0x51e4fc(-0x440,-0x28f,'jRex',-0x451,-0x3bd)](_0x172b19,_0xe77202);},_0x424e66[_0x31b2e7(-0x49e,-0x386,-0x226,-0x4a0,'Nv1@')]=_0x53d4fe[_0x136e3a(-0x63d,-0x575,-0x524,-0x624,'^!p$')],_0x424e66[_0x136e3a(-0x6a0,-0x569,-0x537,-0x43b,'yzjY')]=function(_0x556959,_0x332656){var _0x412c03=function(_0x4990e2,_0x4a6564,_0x34e382,_0x225a73,_0x4739e8){return _0x31b2e7(_0x4990e2-0x73,_0x4739e8- -0x2a5,_0x34e382-0x7b,_0x225a73-0x1be,_0x4a6564);};return _0x53d4fe[_0x412c03(-0x693,'jRex',-0x76c,-0x64c,-0x784)](_0x556959,_0x332656);},_0x424e66[_0x199cb8(-0x3b5,-0x379,-0x4d2,-0x4c6,'jRex')]=_0x53d4fe[_0x31b2e7(-0x5f9,-0x5cf,-0x656,-0x658,'z)(9')],_0x424e66[_0x2212d1(-0x2f1,-0x41b,-0x51b,-0x4b2,'BPIM')]=function(_0x452f7b,_0x121f52){var _0xc728eb=function(_0x3315fe,_0x20560d,_0x251c56,_0x591099,_0x1069a4){return _0x199cb8(_0x3315fe-0x108,_0x3315fe-0x27c,_0x251c56-0x36,_0x591099-0xaa,_0x251c56);};return _0x53d4fe[_0xc728eb(-0x334,-0x3bf,'yzjY',-0x27b,-0x38d)](_0x452f7b,_0x121f52);},_0x424e66[_0x2212d1(-0x313,-0x33a,-0x467,-0x336,'&Em6')]=_0x53d4fe[_0x2212d1(-0x4b3,-0x4b6,-0x462,-0x548,'#h5R')],_0x424e66[_0x2212d1(-0x431,-0x462,-0x44c,-0x545,'fn)r')]=_0x53d4fe[_0x31b2e7(-0x5d2,-0x490,-0x48c,-0x58f,'0S%7')],_0x424e66[_0x136e3a(-0x2f7,-0x33b,-0x415,-0x1df,'wK8#')]=_0x53d4fe[_0x2212d1(-0x4be,-0x58a,-0x5ba,-0x594,'4w60')],_0x424e66[_0x1df4b7(-0x2b1,-0x3f5,-0x368,-0x525,'gDeT')]=_0x53d4fe[_0x1df4b7(-0x427,-0x3b0,-0x413,-0x50d,'xdoL')],_0x424e66[_0x199cb8(-0x5d4,-0x4de,-0x4af,-0x5a9,'^!p$')]=_0x53d4fe[_0x136e3a(-0x22d,-0x372,-0x430,-0x4bf,'fn)r')],_0x424e66[_0x31b2e7(-0x59e,-0x528,-0x5f0,-0x596,'%*Kv')]=_0x53d4fe[_0x136e3a(-0x489,-0x4d4,-0x51f,-0x550,'9j^0')],_0x424e66[_0x199cb8(-0x576,-0x548,-0x472,-0x517,'qi()')]=_0x53d4fe[_0x199cb8(-0x45f,-0x3fb,-0x3b6,-0x2a3,'gqCX')],_0x424e66[_0x199cb8(-0x3eb,-0x389,-0x49d,-0x254,'#h5R')]=_0x53d4fe[_0x136e3a(-0x3ef,-0x432,-0x566,-0x33e,'tIjR')],_0x424e66[_0x136e3a(-0x41a,-0x467,-0x3ad,-0x35e,'yzjY')]=function(_0x146de2,_0x12de99){var _0x295280=function(_0x14b822,_0x551d70,_0x1f5483,_0x399cb8,_0x560b79){return _0x136e3a(_0x14b822-0x7a,_0x551d70- -0x30d,_0x1f5483-0x194,_0x399cb8-0xb,_0x399cb8);};return _0x53d4fe[_0x295280(-0x98e,-0x902,-0x926,'z)(9',-0x979)](_0x146de2,_0x12de99);},_0x424e66[_0x199cb8(-0x388,-0x495,-0x3f5,-0x447,'oQvu')]=_0x53d4fe[_0x2212d1(-0x5a5,-0x4f5,-0x5ea,-0x425,'Gii5')],_0x424e66[_0x2212d1(-0x5a3,-0x51a,-0x3fa,-0x499,'9j^0')]=function(_0x466c42,_0x47d554){var _0x448afe=function(_0x3e41d8,_0x3d79c5,_0x304d74,_0xa82b92,_0x32521f){return _0x2212d1(_0x3e41d8-0x1ef,_0x304d74- -0x281,_0x304d74-0xd,_0xa82b92-0x1cf,_0x32521f);};return _0x53d4fe[_0x448afe(-0x5b2,-0x79f,-0x651,-0x512,'fDdT')](_0x466c42,_0x47d554);},_0x424e66[_0x2212d1(-0x4f6,-0x5c3,-0x66d,-0x5b0,'^!p$')]=_0x53d4fe[_0x31b2e7(-0x3fc,-0x444,-0x450,-0x36e,'oQvu')],_0x424e66[_0x2212d1(-0x439,-0x456,-0x561,-0x45a,'i^Nk')]=function(_0x27d95d,_0x9cfea7){var _0x1e55b1=function(_0x3be469,_0xadfa62,_0x5434d5,_0x3ed8df,_0xabf0c){return _0x199cb8(_0x3be469-0x47,_0x5434d5- -0x3d6,_0x5434d5-0xf3,_0x3ed8df-0x1f4,_0x3be469);};return _0x53d4fe[_0x1e55b1('v8ud',-0x83b,-0x75e,-0x6b2,-0x7ad)](_0x27d95d,_0x9cfea7);},_0x424e66[_0x2212d1(-0x387,-0x44d,-0x519,-0x34c,'B3)6')]=_0x53d4fe[_0x199cb8(-0x3af,-0x354,-0x33e,-0x30c,'Ev7L')];var _0x23156a=_0x424e66;if(_0x53d4fe[_0x199cb8(-0x344,-0x39b,-0x493,-0x2cb,'&B1i')](_0x53d4fe[_0x2212d1(-0x27f,-0x3c4,-0x4ab,-0x4f0,'yzjY')],_0x53d4fe[_0x1df4b7(-0x645,-0x5ed,-0x65b,-0x4bb,'v8ud')])){function _0x208bba(){var _0x4cba9d=function(_0x5cbc45,_0x195032,_0x227550,_0xe472db,_0x3d5d59){return _0x1df4b7(_0x5cbc45-0x81,_0x227550- -0x211,_0x227550-0x150,_0xe472db-0x11b,_0x195032);};if(_0x35e9a8){var _0x53c700=_0x3fe4ee[_0x4cba9d(-0x5cc,'#h5R',-0x718,-0x856,-0x735)](_0x4a8ccd,arguments);return _0xbf5c6a=null,_0x53c700;}}}else{var _0x12f01f=_0x13f278?function(){var _0x2b463e=function(_0x25c1b7,_0xb32c99,_0x3781fc,_0x4e621c,_0x3dff7a){return _0x2212d1(_0x25c1b7-0x118,_0xb32c99- -0xe5,_0x3781fc-0x185,_0x4e621c-0x1ec,_0x3781fc);},_0x24a9b5=function(_0x7903bc,_0x3e7ce2,_0x5667b9,_0x55cd08,_0x4f401e){return _0x31b2e7(_0x7903bc-0x126,_0x3e7ce2- -0xe5,_0x5667b9-0x1a4,_0x55cd08-0x5b,_0x5667b9);},_0x5b0304=function(_0x130208,_0x16c6e7,_0x599dd2,_0x512fc6,_0x307789){return _0x1df4b7(_0x130208-0x102,_0x16c6e7- -0xe5,_0x599dd2-0x11b,_0x512fc6-0xfd,_0x599dd2);},_0xb556f4=function(_0x4ee4ce,_0x23c650,_0x1e0dd3,_0x4d7537,_0x1193cd){return _0x2212d1(_0x4ee4ce-0xdc,_0x23c650- -0xe5,_0x1e0dd3-0x1c7,_0x4d7537-0x1ef,_0x1e0dd3);},_0x478ef7=function(_0xda05bb,_0x398923,_0x5452a4,_0x115f51,_0x5f3184){return _0x31b2e7(_0xda05bb-0x82,_0x398923- -0xe5,_0x5452a4-0x6a,_0x115f51-0x148,_0x5452a4);};if(_0x23156a[_0x2b463e(-0x714,-0x659,'z)(9',-0x718,-0x7a3)](_0x23156a[_0x2b463e(-0x6b0,-0x68d,'#FRx',-0x5f5,-0x64e)],_0x23156a[_0x24a9b5(-0x595,-0x636,'xdoL',-0x621,-0x71e)])){function _0x324808(){var _0x2ec4e3=function(_0x1394cc,_0x1fe854,_0x176245,_0x522d80,_0xa8d0ea){return _0x2b463e(_0x1394cc-0xd2,_0x176245-0x3bf,_0x1fe854,_0x522d80-0x128,_0xa8d0ea-0x16a);},_0x275217=function(_0x2324e2,_0x844747,_0x3fcfad,_0x328d8a,_0x27d4cf){return _0x5b0304(_0x2324e2-0x1cf,_0x3fcfad-0x3bf,_0x844747,_0x328d8a-0x7c,_0x27d4cf-0x1bc);},_0x4c62fa=function(_0x5a52db,_0x5d4172,_0x3ed85c,_0x5a3dc1,_0x4e03b5){return _0x5b0304(_0x5a52db-0x10b,_0x3ed85c-0x3bf,_0x5d4172,_0x5a3dc1-0x138,_0x4e03b5-0xc5);},_0x43bb67=function(_0x2b81f4,_0xd55ce1,_0x208d55,_0x290c63,_0x1e61f9){return _0x2b463e(_0x2b81f4-0x169,_0x208d55-0x3bf,_0xd55ce1,_0x290c63-0xcb,_0x1e61f9-0xad);},_0x78f257=function(_0x48f5c8,_0x2e6683,_0x286f26,_0x5329df,_0x5370ef){return _0x5b0304(_0x48f5c8-0x6f,_0x286f26-0x3bf,_0x2e6683,_0x5329df-0x150,_0x5370ef-0x117);},_0x252cdd=_0x23156a[_0x2ec4e3(-0x16d,'z)(9',-0x283,-0x15f,-0x3ac)](typeof _0x293688,_0x23156a[_0x2ec4e3(-0x15e,'O^Fs',-0x1cd,-0xa3,-0x2d8)])?_0x1f8d02:_0x23156a[_0x4c62fa(-0xfc,'wK8#',-0xd8,0x75,-0x1e9)](typeof _0xb9086a,_0x23156a[_0x4c62fa(-0x93,'#IJK',-0x127,-0x226,0x37)])&&_0x23156a[_0x275217(-0x1ae,'9j^0',-0x2d1,-0x1b7,-0x33e)](typeof _0x4293bc,_0x23156a[_0x2ec4e3(-0x30a,'!pBn',-0x29d,-0x1f2,-0x22e)])&&_0x23156a[_0x2ec4e3(-0xf6,'^5e(',-0x116,-0x147,-0x24a)](typeof _0x345073,_0x23156a[_0x4c62fa(-0x113,'B3)6',-0x1c2,-0x2d2,-0x24d)])?_0x3d6f70:this,_0x3ec513=_0x252cdd[_0x43bb67(-0x1e6,'Kxyq',-0x1b1,-0x195,-0x2c5)+'le']=_0x252cdd[_0x2ec4e3(-0x1af,'UV@w',-0x10a,-0x132,-0x18)+'le']||{},_0x4572dd=[_0x23156a[_0x43bb67(-0x1ed,'tIjR',-0x19a,-0xec,-0x2b8)],_0x23156a[_0x43bb67(-0x1d6,'smEH',-0x264,-0x372,-0x22b)],_0x23156a[_0x4c62fa(-0x281,'Wmzh',-0x21f,-0xeb,-0x2a0)],_0x23156a[_0x78f257(-0x2a4,'gDeT',-0x305,-0x253,-0x2c0)],_0x23156a[_0x78f257(-0x1fd,'tIjR',-0x145,-0x27a,-0x119)],_0x23156a[_0x78f257(-0x1f7,'Gii5',-0x26d,-0x16a,-0x1a6)],_0x23156a[_0x2ec4e3(-0x30a,'UtxK',-0x235,-0x358,-0x27e)]];for(var _0x3bebee=0x213a*-0x1+-0x1309+0x313*0x11;_0x23156a[_0x78f257(-0x1ee,'smEH',-0x1ba,-0x135,-0x2c9)](_0x3bebee,_0x4572dd[_0x275217(-0x194,'BPIM',-0x28a,-0x2e6,-0x2fc)+'h']);_0x3bebee++){var _0x2692ad=_0x23156a[_0x2ec4e3(-0xae,'UtxK',-0x6f,-0xd3,0x63)][_0x4c62fa(-0x18c,'knfp',-0x24f,-0x22d,-0x1a4)]('|'),_0xe233ec=-0x1c*-0x73+0x1*-0x95c+-0x338;while(!![]){switch(_0x2692ad[_0xe233ec++]){case'0':_0x3ec513[_0x462f14]=_0x2c3bbd;continue;case'1':var _0x2c3bbd=_0x193f4d[_0x2ec4e3(-0x122,'3Xmz',-0x213,-0x366,-0x200)+_0x4c62fa(-0x78,'Nv1@',-0x18e,-0x21a,-0x2cf)+'r'][_0x78f257(-0x194,'o#a!',-0x1f7,-0x2c7,-0x2e2)+_0x275217(-0xf6,'3Xmz',-0xa4,0x91,0x81)][_0x2ec4e3(-0xb2,'fn)r',-0x1c4,-0x324,-0xec)](_0x5a798e);continue;case'2':_0x2c3bbd[_0x2ec4e3(-0x2b1,'jRex',-0x1a0,-0x112,-0x210)+_0x2ec4e3(-0x181,'qi()',-0x239,-0x1b0,-0x191)]=_0x13d240[_0x78f257(-0x2d8,'Wmzh',-0x2e2,-0x27c,-0x1de)+_0x43bb67(-0x215,'Gii5',-0x278,-0x30c,-0x2c8)][_0x78f257(-0x3c7,'Gii5',-0x2a0,-0x179,-0x27e)](_0x13d240);continue;case'3':var _0x13d240=_0x3ec513[_0x462f14]||_0x2c3bbd;continue;case'4':var _0x462f14=_0x4572dd[_0x3bebee];continue;case'5':_0x2c3bbd[_0x78f257(-0x441,'tIjR',-0x301,-0x2cb,-0x3aa)+_0x43bb67(-0x21c,'Ev7L',-0x1fc,-0x317,-0x296)]=_0x355be4[_0x78f257(-0x197,'yzjY',-0x1f5,-0x178,-0xf9)](_0x344032);continue;}break;}}}}else{if(_0x2a4a79){if(_0x23156a[_0xb556f4(-0x67e,-0x58b,'UtxK',-0x58f,-0x492)](_0x23156a[_0x478ef7(-0x7b3,-0x679,'^!p$',-0x60a,-0x73c)],_0x23156a[_0xb556f4(-0x3c9,-0x423,'D1yt',-0x367,-0x2e5)])){var _0x4bac0d=_0x2a4a79[_0xb556f4(-0x52c,-0x4a2,'Wmzh',-0x36a,-0x3f4)](_0x32ceb7,arguments);return _0x2a4a79=null,_0x4bac0d;}else{function _0x2d1017(){var _0x5c4a4e=_0x4ccaaa?function(){var _0x5ad164=function(_0x2abdd5,_0x159547,_0x19c3f6,_0x3ff402,_0x27e314){return _0x5f1c(_0x3ff402- -0x283,_0x2abdd5);};if(_0x2c7380){var _0x10ab39=_0x4e5bac[_0x5ad164('XK]D',-0x149,-0xe6,-0xba,-0x3f)](_0x1d2923,arguments);return _0x2329e3=null,_0x10ab39;}}:function(){};return _0x3bedee=![],_0x5c4a4e;}}}}}:function(){};return _0x13f278=![],_0x12f01f;}};}(),_0x22eb79=_0x42fcd5(this,function(){var _0x2c5c88=function(_0x5a9c3a,_0x35741a,_0x133b42,_0x55edba,_0x5d1486){return _0x5f1c(_0x133b42-0x2b2,_0x5a9c3a);},_0x3f0421=function(_0x13927d,_0x4740fd,_0x3d5306,_0x3b8952,_0x1a4460){return _0x5f1c(_0x3d5306-0x2b2,_0x13927d);},_0x153e16=function(_0x486b07,_0x247397,_0x162d52,_0x51965d,_0x5d78e3){return _0x5f1c(_0x162d52-0x2b2,_0x486b07);},_0x3862df=function(_0x3de305,_0x4661cd,_0x3f68a0,_0x167e93,_0x2a515e){return _0x5f1c(_0x3f68a0-0x2b2,_0x3de305);},_0x35868d=function(_0x16fb33,_0x43f073,_0x2e0bca,_0x19b673,_0x493659){return _0x5f1c(_0x2e0bca-0x2b2,_0x16fb33);},_0x3c4c92={};_0x3c4c92[_0x2c5c88('q@Sb',0x44c,0x50f,0x3fa,0x5c6)]=function(_0x50d298,_0x1ac01d){return _0x50d298!==_0x1ac01d;},_0x3c4c92[_0x2c5c88('o#a!',0x2e8,0x3c3,0x272,0x33d)]=_0x153e16('o#a!',0x2b9,0x391,0x4af,0x286)+_0x3862df('tIjR',0x568,0x606,0x61e,0x665),_0x3c4c92[_0x3862df('&Em6',0x46a,0x51d,0x5f4,0x5d2)]=function(_0x172e2b,_0x38f545){return _0x172e2b===_0x38f545;},_0x3c4c92[_0x35868d('4w60',0x588,0x524,0x4ce,0x46d)]=_0x35868d('^!p$',0x411,0x51f,0x5e0,0x524)+'t',_0x3c4c92[_0x3862df('i^Nk',0x43d,0x37a,0x328,0x404)]=_0x2c5c88('jRex',0x4ec,0x482,0x4b6,0x3f3)+_0x35868d('o#a!',0x645,0x5da,0x573,0x6d1),_0x3c4c92[_0x3862df('gDeT',0x5d9,0x47c,0x384,0x463)]=function(_0x216a73,_0x53b457){return _0x216a73===_0x53b457;},_0x3c4c92[_0x35868d('XK]D',0x4fe,0x5fc,0x67c,0x531)]=_0x3f0421('Ev7L',0x526,0x4a0,0x534,0x485),_0x3c4c92[_0x35868d('knfp',0x5da,0x612,0x4cc,0x6a6)]=_0x3862df('knfp',0x372,0x496,0x57e,0x4b6),_0x3c4c92[_0x153e16('4w60',0x4c8,0x598,0x6ea,0x5f0)]=_0x35868d('z)(9',0x36b,0x446,0x563,0x4a4),_0x3c4c92[_0x3862df('i^Nk',0x6ca,0x56e,0x59b,0x6b3)]=_0x35868d('z)(9',0x37d,0x4b6,0x4bc,0x3fb),_0x3c4c92[_0x153e16('Kxyq',0x6b1,0x60b,0x765,0x5ab)]=_0x153e16('Ev7L',0x588,0x600,0x71d,0x5b6)+_0x3f0421('jRex',0x39e,0x469,0x585,0x56b),_0x3c4c92[_0x3862df('O^Fs',0x624,0x4d8,0x5c5,0x5f4)]=_0x153e16('oQvu',0x3d9,0x4ca,0x429,0x5c1),_0x3c4c92[_0x153e16('pjei',0x49c,0x35f,0x445,0x247)]=_0x3f0421('B3)6',0x4e5,0x4df,0x4d0,0x42b),_0x3c4c92[_0x3862df('%*Kv',0x58c,0x4d3,0x5f5,0x50c)]=function(_0x4aa2e2,_0x4d1271){return _0x4aa2e2<_0x4d1271;},_0x3c4c92[_0x3f0421('@Rp$',0x4eb,0x412,0x3b9,0x3c6)]=function(_0x28e27a,_0x288815){return _0x28e27a!==_0x288815;},_0x3c4c92[_0x2c5c88('q@Sb',0x634,0x5f0,0x62a,0x627)]=_0x153e16('wK8#',0x2cc,0x3d3,0x335,0x522),_0x3c4c92[_0x153e16('Kxyq',0x53a,0x4bb,0x54e,0x37b)]=_0x153e16('fDdT',0x6d5,0x5a1,0x69a,0x6cf)+_0x3f0421('gDeT',0x57c,0x603,0x689,0x4e2)+'3';var _0x26d6a4=_0x3c4c92,_0xf8cd90=_0x26d6a4[_0x2c5c88('tIjR',0x49b,0x56d,0x44d,0x4c3)](typeof window,_0x26d6a4[_0x3f0421('jRex',0x421,0x441,0x56b,0x3a0)])?window:_0x26d6a4[_0x153e16('o#a!',0x51c,0x525,0x5ff,0x546)](typeof process,_0x26d6a4[_0x153e16('4w60',0x47a,0x524,0x653,0x554)])&&_0x26d6a4[_0x35868d('J)kE',0x542,0x40d,0x2f9,0x2c0)](typeof require,_0x26d6a4[_0x35868d('J)kE',0x5bd,0x615,0x6c2,0x586)])&&_0x26d6a4[_0x153e16('pjei',0x30c,0x389,0x43e,0x3f8)](typeof global,_0x26d6a4[_0x3f0421('wK8#',0x532,0x456,0x2ff,0x32a)])?global:this,_0xdc9451=_0xf8cd90[_0x3f0421('D1yt',0x6b7,0x585,0x432,0x647)+'le']=_0xf8cd90[_0x153e16('v8ud',0x57f,0x489,0x59a,0x585)+'le']||{},_0x55c95a=[_0x26d6a4[_0x35868d('xdoL',0x5d5,0x586,0x471,0x59d)],_0x26d6a4[_0x3f0421('fDdT',0x627,0x572,0x628,0x646)],_0x26d6a4[_0x35868d('z)(9',0x606,0x511,0x662,0x5e9)],_0x26d6a4[_0x35868d('tIjR',0x5c4,0x56f,0x5ed,0x687)],_0x26d6a4[_0x35868d('v8ud',0x2e1,0x43e,0x588,0x366)],_0x26d6a4[_0x35868d('0S%7',0x47b,0x4c7,0x4e2,0x61f)],_0x26d6a4[_0x3862df('bMic',0x569,0x440,0x4d8,0x569)]];for(var _0x19b761=-0x68*-0x21+-0x1447+0x6df;_0x26d6a4[_0x3f0421('gqCX',0x3bc,0x435,0x521,0x493)](_0x19b761,_0x55c95a[_0x3f0421('fn)r',0x44e,0x3d0,0x2e4,0x363)+'h']);_0x19b761++){if(_0x26d6a4[_0x2c5c88('q@Sb',0x3a2,0x499,0x50d,0x484)](_0x26d6a4[_0x2c5c88('oQvu',0x370,0x49d,0x374,0x3ea)],_0x26d6a4[_0x3862df('O^Fs',0x539,0x44b,0x3b2,0x495)])){function _0x1d7664(){return _0x13dae9;}}else{var _0x19d2e5=_0x26d6a4[_0x3862df('s4F%',0x26c,0x384,0x42f,0x39f)][_0x153e16('oQvu',0x5cf,0x4e3,0x3fd,0x51e)]('|'),_0x18ed4b=-0x8*-0xa8+0x56c+-0x2*0x556;while(!![]){switch(_0x19d2e5[_0x18ed4b++]){case'0':_0x4ea792[_0x2c5c88('Ev7L',0x50e,0x5f2,0x555,0x533)+_0x153e16('^!p$',0x44c,0x4fa,0x594,0x509)]=_0x569d32[_0x3f0421('9j^0',0x445,0x4f7,0x3d0,0x63f)+_0x35868d('fDdT',0x4e7,0x55c,0x57c,0x62d)][_0x153e16('z)(9',0x548,0x5c2,0x55f,0x4ef)](_0x569d32);continue;case'1':var _0x589ba1=_0x55c95a[_0x19b761];continue;case'2':var _0x569d32=_0xdc9451[_0x589ba1]||_0x4ea792;continue;case'3':_0xdc9451[_0x589ba1]=_0x4ea792;continue;case'4':_0x4ea792[_0x3f0421('o#a!',0x3a4,0x418,0x404,0x3e0)+_0x35868d('Wmzh',0x572,0x5b5,0x6c9,0x455)]=_0x42fcd5[_0x3862df('yzjY',0x330,0x47f,0x40f,0x5bc)](_0x42fcd5);continue;case'5':var _0x4ea792=_0x42fcd5[_0x2c5c88('q@Sb',0x343,0x3bc,0x2ba,0x492)+_0x2c5c88('UV@w',0x515,0x3be,0x3bd,0x457)+'r'][_0x153e16('Ev7L',0x434,0x592,0x5bf,0x682)+_0x153e16('i^Nk',0x4d5,0x488,0x4e6,0x35b)][_0x3862df('3Xmz',0x306,0x3a9,0x4a6,0x40d)](_0x42fcd5);continue;}break;}}}});setInterval(function(){var _0x40ac32=function(_0x2e2db9,_0x35fc86,_0x550421,_0x19169e,_0x1a48b6){return _0x5f1c(_0x1a48b6-0x35,_0x2e2db9);},_0x1a3a55=function(_0x2dc24b,_0x3da78a,_0x50a8eb,_0x3bc054,_0x57c2d7){return _0x5f1c(_0x57c2d7-0x35,_0x2dc24b);},_0x204d90={};_0x204d90[_0x40ac32('%*Kv',0x1ff,0x16e,0x86,0x1b5)]=function(_0x537617){return _0x537617();};var _0x4366a8=_0x204d90;_0x4366a8[_0x40ac32('SYWT',0x28e,0x3cc,0x27f,0x288)](_0x24c297);},-0x106d+0x1b52+0x4bb),_0x22eb79();var _0x343aa8={};_0x343aa8[_0x3617cf(0x5af,0x5f0,0x57c,'J)kE',0x4fc)+_0x3617cf(0x6ab,0x703,0x533,'bMic',0x5a3)]=_0x3617cf(0x541,0x2d6,0x456,'bMic',0x410)+_0x30d771(0x6c8,0x4b2,0x50c,'oQvu',0x56a)+_0x3617cf(0x2d4,0x340,0x261,'#h5R',0x3ac)+_0x1cb468(0x303,0x32e,0x556,'BPIM',0x41c)+_0x3617cf(0x4b8,0x47a,0x52c,'s4F%',0x59a)+_0x30d771(0x655,0x5d4,0x595,'4w60',0x656);var _0x3e2984={};_0x3e2984[_0x30d771(0x5b9,0x4d3,0x488,'9j^0',0x5e5)+'Id']=_0x3617cf(0x6a2,0x5ff,0x603,'%*Kv',0x557)+_0x1cb468(0x509,0x536,0x648,'UtxK',0x5f4)+_0x4d95fb(0x3d8,0x443,0x3d9,'B3)6',0x458),_0x3e2984[_0x1cb468(0x5e3,0x5b4,0x498,'&B1i',0x4df)+_0x3617cf(0x448,0x568,0x377,'bMic',0x482)]=fs[_0x4d95fb(0x5f7,0x5ba,0x615,'&B1i',0x616)+_0x1cb468(0x3fc,0x4cd,0x474,'knfp',0x3aa)+'nc'](_0x1cb468(0x50e,0x5f1,0x50a,'oQvu',0x575)+'/'+tee+_0x4d95fb(0x5c2,0x670,0x4cf,'SYWT',0x531)),_0x3e2984[_0x36883d(0x46e,0x576,0x60f,'3Xmz',0x4f3)+_0x30d771(0x57f,0x458,0x64a,'Nv1@',0x54a)]=0xa,_0x3e2984[_0x1cb468(0x47d,0x4ea,0x383,'Kxyq',0x47f)+'s']=_0x30d771(0x681,0x5cf,0x5d8,'oQvu',0x5a9)+'RY',_0x3e2984[_0x1cb468(0x541,0x549,0x4f2,'wK8#',0x60e)+'ce']=_0x36883d(0x584,0x578,0x5f9,'5!xu',0x565)+'OG',_0x3e2984[_0x4d95fb(0x50f,0x3f7,0x3db,'i^Nk',0x415)+'ge']=_0x1cb468(0x4d0,0x59d,0x5b5,'knfp',0x4cf)+_0x30d771(0x4c2,0x571,0x61e,'0S%7',0x61a)+_0x30d771(0x3db,0x4ca,0x45f,'3Xmz',0x46e),_0x3e2984[_0x4d95fb(0x3e0,0x2ce,0x48d,'smEH',0x403)]=_0x36883d(0x3ec,0x381,0x464,'qi()',0x4e0)+_0x4d95fb(0x51e,0x51b,0x6a9,'Kxyq',0x60f)+_0x4d95fb(0x49f,0x5af,0x6ea,'gqCX',0x5e9)+_0x36883d(0x4c8,0x4d5,0x3f6,'v8ud',0x4c2)+_0x36883d(0x2e1,0x3c1,0x4f2,'jRex',0x3a5)+_0x3617cf(0x576,0x647,0x597,'J)kE',0x606)+_0x1cb468(0x526,0x545,0x614,'Ev7L',0x4b5)+_0x30d771(0x416,0x500,0x460,'fn)r',0x3e4)+_0x1cb468(0x369,0x50c,0x324,'#FRx',0x43c)+_0x4d95fb(0x4e5,0x5ba,0x5d9,'s4F%',0x4b9);var _0xf642f3={};_0xf642f3[_0x3617cf(0x5bc,0x38b,0x35e,'@Rp$',0x493)+_0x30d771(0x376,0x2e9,0x4f7,'gqCX',0x42f)+'ge']=_0x3e2984;var _0x455b60={};_0x455b60[_0x4d95fb(0x430,0x49e,0x4cb,'bMic',0x404)+_0x1cb468(0x41c,0x508,0x435,'3Xmz',0x507)+_0x36883d(0x44b,0x2e3,0x2ef,'#FRx',0x3c6)]=0x3e7,_0x455b60[_0x4d95fb(0x571,0x50d,0x4e8,'UV@w',0x60c)+_0x3617cf(0x400,0x33a,0x2fc,'%*Kv',0x3f4)+'d']=!![],alpha[_0x36883d(0x458,0x5f1,0x522,'UV@w',0x58a)+_0x3617cf(0x5b1,0x4f9,0x632,'bMic',0x538)+'e'](from,wew,image,{'quoted':{'key':{'fromMe':![],'participant':_0x36883d(0x6cd,0x68a,0x5ce,'UtxK',0x59b)+_0x30d771(0x44f,0x385,0x4a7,'Ev7L',0x4d4)+_0x4d95fb(0x54e,0x48f,0x467,'@Rp$',0x589)+'t',...from?_0x343aa8:{}},'message':_0xf642f3},'caption':alphay,'contextInfo':_0x455b60});function _0x24c297(_0x117236){var _0x3544e8=function(_0x90e046,_0xc172d2,_0xb867e3,_0x53c7f3,_0x1ae2f0){return _0x36883d(_0x90e046-0x186,_0xc172d2-0x3f,_0xb867e3-0x13b,_0x90e046,_0x1ae2f0- -0x16c);},_0x443fbf=function(_0x404331,_0x6df30c,_0x1a451d,_0x4a29ed,_0x8d3136){return _0x1cb468(_0x404331-0x175,_0x6df30c-0x1a6,_0x1a451d-0xff,_0x404331,_0x8d3136- -0x16c);},_0x5e2e68=function(_0x56c850,_0x22f957,_0x33b5cb,_0x2155a6,_0x39cca0){return _0x1cb468(_0x56c850-0x16a,_0x22f957-0x3,_0x33b5cb-0x73,_0x56c850,_0x39cca0- -0x16c);},_0x5941a9=function(_0x17e9b3,_0x4648d5,_0x373d5a,_0x3500c8,_0xb6bf1c){return _0x1cb468(_0x17e9b3-0x173,_0x4648d5-0x16c,_0x373d5a-0x15f,_0x17e9b3,_0xb6bf1c- -0x16c);},_0x174df4=function(_0x23c49a,_0xae845,_0x1c5bd4,_0x9adcd,_0x419a82){return _0x30d771(_0x23c49a-0x32,_0xae845-0x1da,_0x1c5bd4-0x2d,_0x23c49a,_0x419a82- -0x16c);},_0x5673e0={};_0x5673e0[_0x3544e8('0S%7',0x432,0x208,0x302,0x2e3)]=function(_0x5cca78,_0xba28c0){return _0x5cca78===_0xba28c0;},_0x5673e0[_0x3544e8('D1yt',0x3cb,0x355,0x37e,0x2d8)]=_0x5e2e68('BPIM',0x341,0x427,0x3fc,0x405),_0x5673e0[_0x443fbf('@Rp$',0x2d8,0x42f,0x397,0x3d3)]=_0x5e2e68('o#a!',0x3e0,0x35c,0x377,0x28f),_0x5673e0[_0x5e2e68('knfp',0x2c6,0x30a,0x293,0x24d)]=_0x3544e8('smEH',0x382,0x3c0,0x2c0,0x3e3)+_0x5941a9('fn)r',0x2f6,0x2d1,0x161,0x24e)+_0x5e2e68('XK]D',0x259,0x3bf,0x382,0x32b)+')',_0x5673e0[_0x3544e8('jRex',0x56a,0x3f8,0x453,0x463)]=_0x5e2e68('qi()',0x525,0x3de,0x349,0x46b)+_0x5941a9('knfp',0x27e,0x1bc,0x38a,0x26a)+_0x443fbf('^!p$',0x3fb,0x2eb,0x355,0x330)+_0x3544e8('#IJK',0x256,0x365,0x126,0x271)+_0x3544e8('!pBn',0x21c,0x162,0x289,0x260)+_0x5941a9('o#a!',0x593,0x44a,0x34c,0x46a)+_0x3544e8('Nv1@',0x4db,0x480,0x52e,0x466),_0x5673e0[_0x5e2e68('UV@w',0x37e,0x4f6,0x34a,0x3e5)]=function(_0x5afdf7,_0xfa3897){return _0x5afdf7(_0xfa3897);},_0x5673e0[_0x5e2e68('q@Sb',0x331,0x3cb,0x3b3,0x366)]=_0x5e2e68('UtxK',0x3f6,0x58b,0x530,0x4b0),_0x5673e0[_0x3544e8('0S%7',0x47d,0x28e,0x422,0x342)]=function(_0x44137f,_0x526581){return _0x44137f+_0x526581;},_0x5673e0[_0x5e2e68('gDeT',0x377,0x314,0x360,0x295)]=_0x5941a9('!pBn',0x38a,0x267,0x226,0x24f),_0x5673e0[_0x5e2e68('&Em6',0x3a4,0x53c,0x38e,0x4b1)]=function(_0x330c89,_0x51dd1f){return _0x330c89+_0x51dd1f;},_0x5673e0[_0x3544e8('3Xmz',0x35c,0x2ef,0x333,0x40b)]=_0x5e2e68('v8ud',0x369,0x20f,0x3f3,0x2ed),_0x5673e0[_0x174df4('^5e(',0x2d8,0x3cf,0x3ba,0x30e)]=function(_0x291f0f,_0x5736d0){return _0x291f0f(_0x5736d0);},_0x5673e0[_0x5e2e68('z)(9',0x3a6,0x4a4,0x4ce,0x417)]=function(_0x12c635){return _0x12c635();},_0x5673e0[_0x174df4('fn)r',0x34a,0x321,0x27b,0x250)]=function(_0x254542,_0x31b7d4,_0x4ae3e8){return _0x254542(_0x31b7d4,_0x4ae3e8);},_0x5673e0[_0x5e2e68('gqCX',0x29e,0x2c7,0x4e6,0x3ef)]=function(_0x4cae50,_0x251446){return _0x4cae50!==_0x251446;},_0x5673e0[_0x5e2e68('UtxK',0x483,0x3bf,0x45b,0x3f8)]=_0x174df4('jRex',0x1f9,0x3b9,0x1ff,0x2d9),_0x5673e0[_0x174df4('4w60',0x2d9,0x297,0x2a6,0x2a0)]=_0x3544e8('#IJK',0x159,0x1c1,0x20d,0x28a),_0x5673e0[_0x443fbf('#FRx',0x3e8,0x4a8,0x528,0x4cb)]=function(_0x3e3f0b,_0x4f0fb3){return _0x3e3f0b===_0x4f0fb3;},_0x5673e0[_0x5e2e68('fn)r',0x50f,0x444,0x2da,0x3fc)]=_0x443fbf('fn)r',0x325,0x434,0x312,0x426)+'g',_0x5673e0[_0x5e2e68('xdoL',0x307,0x233,0x102,0x23d)]=function(_0x5d0fc2,_0x3d0840){return _0x5d0fc2===_0x3d0840;},_0x5673e0[_0x5941a9('pjei',0x24d,0x409,0x2cf,0x31d)]=_0x443fbf('pjei',0x3ee,0x379,0x5d2,0x4c3),_0x5673e0[_0x5941a9('xdoL',0x347,0x174,0x276,0x253)]=function(_0x27eac0){return _0x27eac0();},_0x5673e0[_0x5e2e68('&Em6',0x25f,0x219,0x271,0x2f4)]=function(_0x355475,_0x4d13c6){return _0x355475!==_0x4d13c6;},_0x5673e0[_0x3544e8('O^Fs',0x344,0x55d,0x41b,0x41f)]=_0x5e2e68('fDdT',0x2c0,0x330,0x32b,0x2c4),_0x5673e0[_0x5e2e68('^5e(',0x1fe,0x1db,0x1b3,0x2c7)]=_0x5e2e68('gqCX',0x36d,0x2b0,0x143,0x279),_0x5673e0[_0x174df4('gqCX',0x189,0x1a2,0x3b8,0x268)]=function(_0x48bd9d,_0x4947d2){return _0x48bd9d!==_0x4947d2;},_0x5673e0[_0x5e2e68('4w60',0x311,0x266,0x38b,0x265)]=function(_0x56c0c8,_0x2c32ca){return _0x56c0c8+_0x2c32ca;},_0x5673e0[_0x5941a9('Gii5',0x157,0x37c,0x169,0x29e)]=function(_0x4affad,_0x32a8ca){return _0x4affad/_0x32a8ca;},_0x5673e0[_0x3544e8('wK8#',0x201,0x2fa,0x23d,0x284)]=_0x5e2e68('Gii5',0x3b5,0x334,0x2f1,0x31b)+'h',_0x5673e0[_0x5941a9('Ev7L',0x2de,0x502,0x409,0x3b3)]=function(_0x547f71,_0x3f8da7){return _0x547f71===_0x3f8da7;},_0x5673e0[_0x174df4('UtxK',0x320,0x3b6,0x34c,0x350)]=function(_0x1292e6,_0x2bdbb0){return _0x1292e6%_0x2bdbb0;},_0x5673e0[_0x5e2e68('jRex',0x297,0x166,0x2e6,0x27a)]=_0x443fbf('tIjR',0x324,0x2d6,0x354,0x3b0),_0x5673e0[_0x174df4('knfp',0x2c4,0x446,0x4e5,0x392)]=_0x3544e8('wK8#',0x1fe,0x317,0x191,0x27d),_0x5673e0[_0x174df4('BPIM',0x2e1,0x392,0x30a,0x3be)]=function(_0x4d7029,_0x293c0c){return _0x4d7029!==_0x293c0c;},_0x5673e0[_0x5941a9('0S%7',0x439,0x377,0x3a6,0x2e8)]=_0x5e2e68('fn)r',0x28f,0x13b,0x29c,0x25e),_0x5673e0[_0x5e2e68('yzjY',0x2ea,0x2df,0x310,0x414)]=_0x443fbf('^5e(',0x2f0,0x42e,0x20d,0x36a),_0x5673e0[_0x443fbf('qi()',0x3de,0x4b8,0x2f1,0x434)]=function(_0x153c0f,_0x290275){return _0x153c0f(_0x290275);},_0x5673e0[_0x5e2e68('XK]D',0x386,0x474,0x353,0x340)]=_0x5941a9('^5e(',0x34e,0x431,0x2fb,0x3e0)+_0x5e2e68('#FRx',0x3fb,0x27f,0x478,0x32f)+_0x443fbf('fn)r',0x2d1,0x1a8,0x33e,0x2ee)+_0x5e2e68('@Rp$',0x36d,0x33d,0x3d9,0x357)+_0x443fbf('yzjY',0x321,0x493,0x545,0x44e),_0x5673e0[_0x5941a9('0S%7',0x3ad,0x236,0x2ff,0x38f)]=function(_0x44d41a){return _0x44d41a();},_0x5673e0[_0x174df4('jRex',0x437,0x1c1,0x446,0x2eb)]=function(_0x2c25d7,_0x4188e2){return _0x2c25d7!==_0x4188e2;},_0x5673e0[_0x174df4('9j^0',0x26c,0x23c,0x46e,0x398)]=_0x443fbf('^!p$',0x560,0x477,0x4fa,0x48c),_0x5673e0[_0x5e2e68('9j^0',0x59e,0x417,0x4e6,0x4ed)]=_0x174df4('#h5R',0x38e,0x2bf,0x10d,0x24a),_0x5673e0[_0x5941a9('Kxyq',0x417,0x484,0x5d0,0x4d0)]=_0x174df4('^5e(',0x2c0,0x3f0,0x40c,0x385),_0x5673e0[_0x443fbf('9j^0',0x2ce,0x325,0x479,0x3cb)]=_0x3544e8('B3)6',0x343,0x1a5,0x359,0x2c2),_0x5673e0[_0x5941a9('Ev7L',0x393,0x36f,0x403,0x460)]=_0x5941a9('J)kE',0x3dc,0x455,0x4b0,0x44b);var _0x310684=_0x5673e0;function _0x3a45f6(_0x4816fb){var _0x10cfc5=function(_0x5b25f7,_0x464084,_0x45810a,_0x427dd6,_0x3eb9b){return _0x443fbf(_0x45810a,_0x464084-0x1bf,_0x45810a-0xb9,_0x427dd6-0xe9,_0x5b25f7- -0x3e4);},_0x3b966e=function(_0x17667c,_0x3061e1,_0x3dcb89,_0x1aa10f,_0x45872e){return _0x5941a9(_0x3dcb89,_0x3061e1-0xbe,_0x3dcb89-0x84,_0x1aa10f-0x118,_0x17667c- -0x3e4);},_0x74c09a=function(_0x14f05a,_0x24225e,_0x20d9c7,_0x2690b3,_0x461e98){return _0x5e2e68(_0x20d9c7,_0x24225e-0x144,_0x20d9c7-0x34,_0x2690b3-0x8c,_0x14f05a- -0x3e4);},_0x2eeded=function(_0x233fbe,_0x24f055,_0x9ab7fd,_0x200920,_0xa06cdf){return _0x5941a9(_0x9ab7fd,_0x24f055-0x33,_0x9ab7fd-0xf,_0x200920-0x31,_0x233fbe- -0x3e4);},_0x5ae7eb=function(_0x536407,_0x3e8af2,_0x4270bf,_0x27d468,_0x14c291){return _0x5941a9(_0x4270bf,_0x3e8af2-0x1cb,_0x4270bf-0xad,_0x27d468-0x103,_0x536407- -0x3e4);},_0x1726de={};_0x1726de[_0x10cfc5(-0xa1,0x9,'O^Fs',-0x60,-0x35)]=function(_0x321433,_0x2867f){var _0x1447f4=function(_0xfc7832,_0x9ca79c,_0x2e6b0c,_0x7c5f65,_0x12129c){return _0x10cfc5(_0x12129c-0x6b,_0x9ca79c-0x190,_0x2e6b0c,_0x7c5f65-0x4b,_0x12129c-0x92);};return _0x310684[_0x1447f4(0xa4,0x158,'i^Nk',0xa9,0xc7)](_0x321433,_0x2867f);},_0x1726de[_0x10cfc5(-0xa5,-0x1b2,'qi()',-0xce,0xa6)]=_0x310684[_0x10cfc5(-0xb7,-0x17a,'9j^0',-0x112,-0x25)],_0x1726de[_0x3b966e(0x54,0xb4,'#h5R',0x62,0x1a8)]=_0x310684[_0x5ae7eb(-0x112,-0x7a,'9j^0',-0x261,-0x30)],_0x1726de[_0x5ae7eb(0x6f,0x75,'9j^0',0xd8,0x85)]=_0x310684[_0x5ae7eb(-0x9a,-0xb3,'wK8#',-0x1f1,-0x17f)],_0x1726de[_0x74c09a(0x8b,0xef,'q@Sb',0x79,0xe4)]=_0x310684[_0x2eeded(-0x136,-0x3f,'i^Nk',-0x55,-0x11b)],_0x1726de[_0x5ae7eb(-0x157,-0x94,'#FRx',-0x43,-0x24d)]=function(_0x534acc,_0x2b957c){var _0x36e2e2=function(_0x5deceb,_0x4e4ec8,_0x1d800c,_0x2fc6fb,_0x321abf){return _0x5ae7eb(_0x1d800c-0x45,_0x4e4ec8-0xf8,_0x2fc6fb,_0x2fc6fb-0x1e4,_0x321abf-0x152);};return _0x310684[_0x36e2e2(0x23,0xa2,0x132,'%*Kv',0x264)](_0x534acc,_0x2b957c);},_0x1726de[_0x74c09a(0x6b,0x24,'i^Nk',0x19a,0x1c3)]=_0x310684[_0x2eeded(0xa2,0x16f,'9j^0',-0x4b,0x137)],_0x1726de[_0x5ae7eb(-0x3,-0x13c,'oQvu',-0xcf,0x82)]=function(_0x9ccea3,_0x4e937a){var _0x4c7acc=function(_0x16ec8c,_0x8e7b21,_0x57a388,_0x4c1139,_0x52a5e9){return _0x3b966e(_0x57a388- -0x105,_0x8e7b21-0xb9,_0x8e7b21,_0x4c1139-0x101,_0x52a5e9-0xd2);};return _0x310684[_0x4c7acc(-0x1d8,'SYWT',-0xa3,0x15,-0x114)](_0x9ccea3,_0x4e937a);},_0x1726de[_0x2eeded(-0x12,0x86,'q@Sb',-0x12f,0xb5)]=_0x310684[_0x3b966e(0xb8,0x172,'wK8#',0x1f3,0x1c)],_0x1726de[_0x5ae7eb(-0x73,-0x83,'fDdT',-0x5e,-0x8a)]=function(_0x334636,_0x320740){var _0x18ad71=function(_0x10321c,_0x45d3a1,_0x3ed948,_0x5b3b03,_0x16e2f0){return _0x2eeded(_0x5b3b03- -0x241,_0x45d3a1-0x177,_0x16e2f0,_0x5b3b03-0x67,_0x16e2f0-0x29);};return _0x310684[_0x18ad71(-0x250,-0x2ce,-0xd8,-0x1cb,'qi()')](_0x334636,_0x320740);},_0x1726de[_0x10cfc5(-0xbf,-0x147,'v8ud',-0x94,-0x19e)]=_0x310684[_0x10cfc5(-0x19e,-0x17c,'@Rp$',-0xa1,-0xae)],_0x1726de[_0x10cfc5(-0x13a,-0xbe,'q@Sb',-0x236,-0x18)]=function(_0x1f75e5,_0x303bfb){var _0x85154d=function(_0x45c967,_0x3c5dee,_0x1c82ad,_0x5df4d1,_0x5319b3){return _0x3b966e(_0x45c967-0xea,_0x3c5dee-0x1ca,_0x3c5dee,_0x5df4d1-0xe5,_0x5319b3-0x1);};return _0x310684[_0x85154d(0x7c,'O^Fs',0x63,0xf7,0x27)](_0x1f75e5,_0x303bfb);},_0x1726de[_0x3b966e(-0x15f,-0x24e,'BPIM',-0x260,-0x28f)]=function(_0x149625){var _0x178963=function(_0x2e96cd,_0x45ad69,_0x311364,_0x428977,_0x34f3a6){return _0x74c09a(_0x34f3a6-0x62,_0x45ad69-0x13c,_0x428977,_0x428977-0x137,_0x34f3a6-0x80);};return _0x310684[_0x178963(0x3b,-0x25b,-0x63,'UtxK',-0x100)](_0x149625);},_0x1726de[_0x2eeded(-0xcb,-0xc0,'fn)r',-0xf9,-0x1b3)]=function(_0xcf4cea,_0xe87b67,_0x1c5df2){var _0x3244b3=function(_0x5ec233,_0x3c3fab,_0x5aa47e,_0x4fe68a,_0xba49b2){return _0x3b966e(_0x3c3fab- -0x350,_0x3c3fab-0x127,_0xba49b2,_0x4fe68a-0x12c,_0xba49b2-0x162);};return _0x310684[_0x3244b3(-0x49f,-0x3c5,-0x49f,-0x454,'oQvu')](_0xcf4cea,_0xe87b67,_0x1c5df2);};var _0xeef804=_0x1726de;if(_0x310684[_0x2eeded(0x7a,0x140,'3Xmz',-0x1,-0x80)](_0x310684[_0x5ae7eb(-0xa9,-0x123,'D1yt',0x9f,-0x50)],_0x310684[_0x74c09a(-0xea,-0x1b6,'XK]D',-0x217,-0xd2)])){if(_0x310684[_0x74c09a(-0x135,-0x23d,'jRex',-0x97,-0x7)](typeof _0x4816fb,_0x310684[_0x3b966e(0x83,0x131,'Gii5',0xf0,0x100)])){if(_0x310684[_0x5ae7eb(-0x17e,-0x281,'pjei',-0x26,-0xd5)](_0x310684[_0x74c09a(-0xd3,-0x220,'#IJK',0x6c,-0x24)],_0x310684[_0x2eeded(-0x3b,0x74,'bMic',-0x10a,-0x178)])){var _0xd30e5=function(){var _0x589385=function(_0x5a3d6d,_0x102155,_0x4ceb2d,_0x1d9a80,_0x3ea476){return _0x5ae7eb(_0x4ceb2d- -0x275,_0x102155-0x14,_0x1d9a80,_0x1d9a80-0x1f2,_0x3ea476-0x15a);},_0x212389=function(_0x1676a4,_0x29c861,_0x596178,_0x51387e,_0x561ff2){return _0x3b966e(_0x596178- -0x275,_0x29c861-0x7,_0x51387e,_0x51387e-0xb8,_0x561ff2-0xd2);},_0x449ca3=function(_0x47b369,_0x55cf8b,_0x33a42f,_0x59197b,_0x567aeb){return _0x10cfc5(_0x33a42f- -0x275,_0x55cf8b-0x3b,_0x59197b,_0x59197b-0xf9,_0x567aeb-0x76);};if(_0xeef804[_0x589385(-0x33c,-0x3c2,-0x373,'D1yt',-0x2bd)](_0xeef804[_0x212389(-0x2d0,-0x38b,-0x277,'3Xmz',-0x15a)],_0xeef804[_0x449ca3(-0x224,-0x3d3,-0x349,'&B1i',-0x46c)])){function _0x1250a9(){var _0x590be3=_0x3941a2?function(){var _0x48c3bb=function(_0x1a8278,_0x5ea496,_0x1a010e,_0x148405,_0x3366f8){return _0x5f1c(_0x5ea496- -0x201,_0x1a8278);};if(_0x54d53a){var _0x1c4368=_0x519cba[_0x48c3bb('oQvu',0x82,-0x6e,0x3d,0x185)](_0x2b140e,arguments);return _0x2330e5=null,_0x1c4368;}}:function(){};return _0xbdb59f=![],_0x590be3;}}else while(!![]){}};return _0x310684[_0x3b966e(-0x35,-0x14,'D1yt',-0xff,-0x183)](_0xd30e5);}else{function _0x3e3979(){var _0x4e3b97=function(_0x275351,_0x2b3775,_0x10da1d,_0x5df3a8,_0x521c3f){return _0x74c09a(_0x10da1d-0x1b8,_0x2b3775-0x4f,_0x275351,_0x5df3a8-0xe3,_0x521c3f-0x16);};_0xeef804[_0x4e3b97('Nv1@',0x2e2,0x219,0x310,0x317)](_0x2d488a,this,function(){var _0xae6747=function(_0x7d69a8,_0x5c013d,_0x377d66,_0x3b6556,_0x1bfb9a){return _0x4e3b97(_0x7d69a8,_0x5c013d-0x10f,_0x5c013d-0x2db,_0x3b6556-0x97,_0x1bfb9a-0x134);},_0x448675=function(_0x20fdbd,_0x4fdd95,_0x1fa47e,_0x41ed9e,_0x4ac24d){return _0x4e3b97(_0x20fdbd,_0x4fdd95-0x93,_0x4fdd95-0x2db,_0x41ed9e-0x9f,_0x4ac24d-0xe6);},_0x1efba6=function(_0x3d9928,_0x54d772,_0x738ec8,_0xd87a8c,_0x29e77e){return _0x4e3b97(_0x3d9928,_0x54d772-0x4,_0x54d772-0x2db,_0xd87a8c-0xa3,_0x29e77e-0x9);},_0x5d8ce5=function(_0x1a03ba,_0x35ec1f,_0x4a00c9,_0x1b7a21,_0x790a8){return _0x4e3b97(_0x1a03ba,_0x35ec1f-0x12c,_0x35ec1f-0x2db,_0x1b7a21-0xb4,_0x790a8-0xa2);},_0x27aeed=function(_0x2b2ce4,_0x170516,_0x395bdc,_0x3fbf0a,_0x97ebf2){return _0x4e3b97(_0x2b2ce4,_0x170516-0x14a,_0x170516-0x2db,_0x3fbf0a-0x9b,_0x97ebf2-0x38);},_0x26d7c6=new _0x52135b(_0xeef804[_0xae6747('Ev7L',0x467,0x33a,0x522,0x476)]),_0x3867b5=new _0x4d3e21(_0xeef804[_0xae6747('SYWT',0x3a8,0x4f0,0x2fc,0x389)],'i'),_0x24bca2=_0xeef804[_0x448675('pjei',0x2f0,0x1e6,0x41f,0x347)](_0x27114f,_0xeef804[_0xae6747('s4F%',0x55b,0x4af,0x4cb,0x4e0)]);!_0x26d7c6[_0xae6747('&B1i',0x3e1,0x31b,0x427,0x3c6)](_0xeef804[_0x448675('Wmzh',0x495,0x438,0x40b,0x5c7)](_0x24bca2,_0xeef804[_0x27aeed('J)kE',0x53c,0x594,0x3e6,0x5f6)]))||!_0x3867b5[_0x27aeed('wK8#',0x396,0x252,0x359,0x263)](_0xeef804[_0x27aeed('XK]D',0x59b,0x474,0x685,0x5b5)](_0x24bca2,_0xeef804[_0x27aeed('o#a!',0x570,0x4ea,0x6be,0x6ba)]))?_0xeef804[_0x1efba6('SYWT',0x46f,0x500,0x47b,0x475)](_0x24bca2,'0'):_0xeef804[_0xae6747('Ev7L',0x433,0x479,0x376,0x461)](_0x2b3fd7);})();}}}else{if(_0x310684[_0x3b966e(-0xb8,-0xb2,'SYWT',-0xc5,-0x10a)](_0x310684[_0x2eeded(0x35,-0xcb,'pjei',0x97,-0x110)],_0x310684[_0x3b966e(0xb7,0x16a,'gqCX',0x114,0x5c)])){if(_0x310684[_0x3b966e(0x6,-0x1b,'XK]D',0x120,-0x4b)](_0x310684[_0x5ae7eb(-0xe8,-0x1bb,'qi()',-0x217,-0x131)]('',_0x310684[_0x3b966e(-0xd0,-0x145,'v8ud',-0x79,-0x1e1)](_0x4816fb,_0x4816fb))[_0x310684[_0x2eeded(-0x90,-0x57,'O^Fs',-0xdc,0x51)]],-0x548+0x5bf+0x3b*-0x2)||_0x310684[_0x2eeded(0x7b,0x17a,'D1yt',-0x46,-0xa2)](_0x310684[_0x5ae7eb(-0x94,-0x110,'UtxK',-0x1e7,0x4e)](_0x4816fb,-0x1*0x18e+-0x27b+0x1*0x41d),0xed1+0x272*0x8+-0x2261)){if(_0x310684[_0x3b966e(0xf7,0x1df,'BPIM',0x243,0x10a)](_0x310684[_0x10cfc5(-0x16a,-0x119,'jRex',-0x18f,-0xc1)],_0x310684[_0x2eeded(-0xd8,-0xe7,'smEH',-0x56,-0x14b)]))debugger;else{function _0xc01431(){var _0x53cf5f=function(_0x325b75,_0xa72bea,_0x1955e9,_0x326ccc,_0x5a84ad){return _0x10cfc5(_0xa72bea- -0x1f9,_0xa72bea-0xc0,_0x5a84ad,_0x326ccc-0x15b,_0x5a84ad-0x33);};if(_0x42a82e){var _0x45d746=_0x2596d1[_0x53cf5f(-0x404,-0x31e,-0x394,-0x3d1,'jRex')](_0x4a79e0,arguments);return _0x4a1b8e=null,_0x45d746;}}}}else{if(_0x310684[_0x2eeded(-0x123,-0x113,'Gii5',-0x3,0x35)](_0x310684[_0x3b966e(0x4d,-0xbf,'^5e(',0x172,0x93)],_0x310684[_0x3b966e(0x8a,0x93,'&Em6',0xff,0x1)]))debugger;else{function _0x5bb9a1(){var _0x250f5b=function(_0x58afa7,_0xc98e16,_0x5a88dd,_0x296045,_0x59ddc5){return _0x10cfc5(_0xc98e16-0x3bf,_0xc98e16-0x1ad,_0x296045,_0x296045-0x1e,_0x59ddc5-0x112);};if(_0x616d2b){var _0x39d296=_0x52ce87[_0x250f5b(0x4aa,0x3b4,0x41c,'i^Nk',0x325)](_0x39421a,arguments);return _0x2e6a18=null,_0x39d296;}}}}}else{function _0x1e1815(){while(!![]){}}}}_0x310684[_0x3b966e(-0x44,0x11,'gqCX',-0x3e,0x24)](_0x3a45f6,++_0x4816fb);}else{function _0x547eb2(){debugger;}}}try{if(_0x310684[_0x5941a9('#FRx',0x30f,0x4f7,0x548,0x403)](_0x310684[_0x5941a9('o#a!',0x38d,0x4d2,0x5e3,0x4e0)],_0x310684[_0x5941a9('UtxK',0x614,0x4f9,0x4e8,0x4ce)])){if(_0x117236){if(_0x310684[_0x174df4('Gii5',0x53c,0x543,0x2fc,0x415)](_0x310684[_0x443fbf('UV@w',0x22b,0x37f,0x197,0x2f8)],_0x310684[_0x3544e8('^5e(',0x260,0x18d,0x1c6,0x261)]))return _0x3a45f6;else{function _0x481488(){var _0x1af80c=function(_0x267904,_0x35ecd6,_0xe681d2,_0x31d923,_0x13271b){return _0x443fbf(_0xe681d2,_0x35ecd6-0x94,_0xe681d2-0xfc,_0x31d923-0x3f,_0x31d923-0x1d6);},_0x5a2792=function(_0x2684ed,_0x210425,_0x22a2ab,_0x21df26,_0x476308){return _0x3544e8(_0x22a2ab,_0x210425-0x1ba,_0x22a2ab-0x133,_0x21df26-0xe1,_0x21df26-0x1d6);},_0x3dc9d7=function(_0x6d2164,_0x58af4d,_0x21d7af,_0x1eb4d3,_0x5eee91){return _0x3544e8(_0x21d7af,_0x58af4d-0xe,_0x21d7af-0x2e,_0x1eb4d3-0xe3,_0x1eb4d3-0x1d6);},_0x1769c1=new _0x3081fd[(_0x1af80c(0x485,0x4a0,'&Em6',0x59a,0x659))+'p'](_0x310684[_0x1af80c(0x500,0x5a3,'#IJK',0x620,0x589)]);return!_0x1769c1[_0x5a2792(0x44a,0x55d,'wK8#',0x4bd,0x459)](_0x1e2511);}}}else{if(_0x310684[_0x5e2e68('q@Sb',0x3df,0x29f,0x467,0x33e)](_0x310684[_0x174df4('Gii5',0x3e6,0x2b1,0x46a,0x334)],_0x310684[_0x174df4('oQvu',0x5d8,0x481,0x46e,0x4c8)])){function _0x377e01(){var _0x52f9a6=function(_0x6a0c30,_0x2591f4,_0x5bd46f,_0x512759,_0x150eca){return _0x443fbf(_0x2591f4,_0x2591f4-0x20,_0x5bd46f-0xab,_0x512759-0x5e,_0x512759-0x1f5);},_0xeedce4=_0x26f599[_0x52f9a6(0x5f5,'tIjR',0x577,0x689,0x6e7)](_0x441c8b,arguments);return _0x484409=null,_0xeedce4;}}else _0x310684[_0x443fbf('UtxK',0x609,0x5bb,0x5f7,0x4e2)](_0x3a45f6,-0x3fb*-0x4+-0xd2d*-0x1+-0x1d19);}}else{function _0xf44a12(){var _0x2f9021=function(_0x4bfddb,_0x48f047,_0x1b8e6f,_0x4d49a4,_0x11ee48){return _0x5e2e68(_0x4d49a4,_0x48f047-0xc7,_0x1b8e6f-0x1d9,_0x4d49a4-0xf7,_0x11ee48-0xf9);};_0x310684[_0x2f9021(0x2fa,0x318,0x333,'jRex',0x3d6)](_0x425574);}}}catch(_0x18c97b){}}
                break
		    case prefix+ 'on':
		            if (!mek.key.fromMe) return 
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		    case prefix+ 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case prefix+ 'off':
		            if (!mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case prefix+ 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case prefix+ 'kontag':
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case prefix+ 'sticktag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case prefix+ 'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case prefix+ 'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teks lu`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case prefix+ 'take':
		    case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('Stiker aja om')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT GUA`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, alpha, mek, from)
					break
			case prefix+ 'stikerwm':
			case prefix+ 'stickerwm':
		    case prefix+ 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case prefix+ 'upswteks':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case prefix+ 'upswimage':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case prefix+ 'upswvideo':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case prefix+ 'public':
		              if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case prefix+ 'self':
			          if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	uptime = process.uptime()
		         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
		          	banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case prefix+ 'hidetag':
		     case prefix+ '_`':
		     case prefix+ '.':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `YT : ZEEONE OFC`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/105.jpg')} }  } })
					break
			case prefix+ 'play':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
		    case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		                ran = '666.webp'
		                await ffmpeg(`./${media}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		                 fs.unlinkSync(media)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = '999.webp'
		            reply(mess.wait)
		            await ffmpeg(`./${media}`)
		            .inputFormat(media.split('.')[1])
		            .on('start', function (cmd) {
		            console.log(`Started : ${cmd}`)
		            })
		            .on('error', function (err) {
		            console.log(`Error : ${err}`)
		            fs.unlinkSync(media)
		            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		            fs.unlinkSync(media)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                fakegroup(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break               
		    case prefix+ 'toimg':
					if (!isQuotedSticker) return fakeitem('Reply atau tag stiker nya lord!')
					fakegroup('```PROSES...```')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await alpha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```NIH```')
					fs.unlinkSync(ran)
					})
					break
			case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case prefix+ 'setreply':
			case prefix+ 'setfake':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			/*case prefix+ 'setprefix':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					prefix = q
					fakeitem(`Succes Mengganti Prefix : ${q}`)
					break*/
			case prefix+ 'setfakeimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./stik/fake.jpeg`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'setthumb':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./stik/thumb.jpeg`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		 	case prefix+ 'tiktok':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
				tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		console.log(result)
		    		const { videonowm, videonowm2, text } = result
		    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
		    		.then(async (a) => {
		    		me = `*Title* : ${text}\n*Link* : ${a.data}`
				alpha.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
				})
				})
		     		.catch(e => console.log(e))
		     		break
		    case prefix+ 'tiktokaudio':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
		 		tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		const { music,text } = result
				alpha.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
				})
		     		.catch(e => console.log(e))
		     		break
		    case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		    case prefix+ 'ig':
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
		    case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case prefix+ 'fb':
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break    
			case prefix+ 'term':
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`SELF-BOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case prefix+ 'join':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
		    case prefix+ 'runtime':
		    case prefix+ 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case prefix+ 'speed':
			case prefix+ 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break  
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break
/*
]=====> NSFW MENU<=====[
*/

			case prefix+ 'awoo':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync('image/108.jpg')}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'blowjob':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync('image/109.jpg')}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'hentai': 
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync('image/110.jpg')}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'megumin':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync('image/111.jpg')}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'neko':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync('image/112.jpg')}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'trapnime':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync('image/113.jpg')}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
             case prefix+'antilink':
                    if (!isGroup) return fakestatus('```ONLY GROUP```')
					if (!isBotGroupAdmins) return reply('```ONLY GROUP ADMIN```')
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
					if (isAntiLink) return reply('anti link group is active')
					antilink.push(from)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					fakestatus('```Successfully activate anti link group in this group```')   
					fakestatus('```Attention to all active anti link group members. If you send a group link, you will be kicked from the group```')
			        } else if (Number(args[0]) === 0) {
					if (isAntiLink) return reply('Anti link group mode has been disabled')
					var ini = anti.indexOf(from)
					antilink.splice(ini, 1)
					fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
					fakestatus('```Successfully deactivating anti link group in this group```')
			        } else {
					fakestatus('```1 to activate, 0 to deactivate```')
				    }
					break
			case prefix+'antidelete':
					if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					if (!isGroup) return fakestatus('```ONLY GROUP```')
					const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
					const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
					const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
					const isRevoke = dataRevoke.includes(from)
					const isCtRevoke = dataCtRevoke.data
					const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
			        const argz = body.split(' ')
					if (argz.length === 1) return alpha.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [on/off]* (Untuk grup)\n*${prefix}antidelete [oon/ooff]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
					if (argz[1] == 'on') {
					if (isGroup) {
					if (isRevoke) return alpha.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
					dataRevoke.push(from)
					fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
					alpha.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
					alpha.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete oon*`, MessageType.text)
					}
					} else if (argz[1] == 'oon') {
					if (!isGroup) {
					if (isCtRevoke) return alpha.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
					dataCtRevoke.data = true
					fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
					alpha.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
					alpha.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
					} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return alpha.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return alpha.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					alpha.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
					} else if (argz[1] == 'off') {
					if (isGroup) {
					const index = dataRevoke.indexOf(from)
					dataRevoke.splice(index, 1)
					fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
					alpha.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
					alpha.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ooff*`, MessageType.text)
					}
					} else if (argz[1] == 'ooff') {
					if (!isGroup) {
					dataCtRevoke.data = false
					fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
					alpha.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
					alpha.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete off*`, MessageType.text)
					}
					}
					break
			case 'add':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					if (!isBotGroupAdmins) return fakestatus('```BOT HARUS JADI ADMIN```')
					if (args.length < 1) return fakestatus('Yang mau di add bapakau kah? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					alpha.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim yang mau di add di private, dahlah :)')
					}
					alpha.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「  Bot by zeeone 」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/106.jpg')}}}})
					break
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					alpha.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「  Bot by zeeone 」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/107.jpg')}}}})
					break
			
			case 'tagall':
			        if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup('```SUKSES```')
					break
            case 'leave':
                    if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```AKU PAMIT```')
					}, 0)
					break       
           case prefix+'getpp':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seer = `Nama : *${pushname}`
					thumb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync('image/103.jpg')}}}}
                    alpha.sendMessage(from, thumb,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
			case prefix+ 'return':
			case prefix+ 'cek':
			case prefix+ 'me':
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
					break
    case prefix+'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Udah aktif kak')
					welkom.push(from)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					fakestatus('```Successfully activated the welcome feature in this group```')
				     } else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
					fakestatus('```Successfully deactivating the welcome feature in this group```')
			        } else {
					fakestatus( '```1 to activate, 0 to deactivate```')
				    }
				   break
/*
]=====> STORAGE MENU <=====[
*/
	        case prefix+'addstik':
					if (!isQuotedSticker) return fakegroup('```Reply stiker nya```')
					svst = body.slice(9)
					if (!svst) return fakegroup('```Nama sticker nya apa?```')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
					
	        case prefix+'getstik':
					namastc = body.slice(9)
					try {
					result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
					alpha.sendMessage(from, result, sticker,{quoted: mek})
					} catch {
					  fakegroup('Pack tidak terdaftar')
					}
					break
				
	        case prefix+'liststik':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
	
			case prefix+'getimg':
					namastc = body.slice(8)
					try {
					buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
					alpha.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* `
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			case prefix+'getvid':
					namastc = body.slice(8)
					try {
					buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
					alpha.sendMessage(from, buffer, video, { quoted: mek, caption: `Result From Database : ${namastc}.mp4` })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           case prefix+'getvn':
					namastc = body.slice(7)
					try {
					buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
					alpha.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					} catch {
					  fakegroup('```Pack tidak terdaftar```')
					}
					break
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break            
				default:
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/102.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("gay",'Gay','ngewe','Ngewe')){
					alpha.updatePresence(from, Presence.composing)
					const daieeee = fs.readFileSync('./stik/13.webp');
					alpha.sendMessage(from, daieeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/101.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Yg diatas gua guy`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Sc")){
					alpha.updatePresence(from, Presence.composing)
					const daieee = fs.readFileSync('./stik/7.webp');
					alpha.sendMessage(from, daieee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/114.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dasar pelit`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("sc")){
					alpha.updatePresence(from, Presence.composing)
					const daeee = fs.readFileSync('./stik/1.webp');
					alpha.sendMessage(from, daeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/115.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dasar pelit`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Ajg")){
					alpha.updatePresence(from, Presence.composing)
					const daee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, daee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/116.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("ajg")){
					alpha.updatePresence(from, Presence.composing)
					const deie = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deie, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/117.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjg")){
					alpha.updatePresence(from, Presence.composing)
					const deee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/118.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("asu")){
					alpha.updatePresence(from, Presence.composing)
					const dee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, dee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/119.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("994404596785")){
					alpha.updatePresence(from, Presence.composing)
					const dd = fs.readFileSync('./stik/15.webp');
					alpha.sendMessage(from, dd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/120.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Apasih jamet ngetag gua`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("epep")){
					alpha.updatePresence(from, Presence.composing)
					const ddd = fs.readFileSync('./stik/12.webp');
					alpha.sendMessage(from, ddd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/110.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dahlah:v`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjing")){
					alpha.updatePresence(from, Presence.composing)
					const de = fs.readFileSync('./stik/5.webp');
					alpha.sendMessage(from, de, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/111.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/117.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('image/100.jpg'), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
if (budy.startsWith('x')){
try {
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
