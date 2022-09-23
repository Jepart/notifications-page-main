notification = [{
    user: "Mark Webber",
    text: "reacted to your recent post",
    action: "link",
    result: "My first tournament today!",
    time: "1m ago",
    read: true
},
{
    user: "Angela Gray",
    text: "followed you",
    action: false,
    result: false,
    time: "5m ago",
    read: true
},
{
    user: "Jacob Thompson",
    text: "has joined your group",
    action: "link_group",
    result: "Chess Club",
    time: "1 day ago",
    read: true
},
{
    user: "Rizky Hasanuddin",
    text: "sent you a private message",
    action: "message",
    result: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    read: false
},
{
    user: "Kimberly Smith",
    text: "commented on your picture",
    action: "image",
    result: "assets/images/image-chess.webp",
    time: "1 week ago",
    read: false
},
{
    user: "Nathan Peterson",
    text: "reacted to your recent post",
    action: "strong",
    result: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: false
},
{
    user: "Anna Kim",
    text: "left the group",
    action: "group",
    result: "Chess Club",
    time: "2 weeks ago",
    read: false
},
]
let cRead = 0
notification.forEach(e => {
    let action = ""
    let message = ""
    let haveNoti = ""
    if (e.read) c = ++cRead
    if (e.read) c = haveNoti = '<strong class="dot">•</strong>'
    let user = `<img src="assets/images/avatar-${(e.user).replace(" ","-")}.webp">`

    let name = `<strong><a href="" class="name">${e.user}</a></strong>`

    if (e.action == 'link') a = action = `<strong><a href="">${e.result}</a></strong>`
    if (e.action == 'link_group') a = action = `<strong><a href="" class="group">${e.result}</a></strong>`
    if (e.action == 'strong') a = action = `<strong>${e.result}</strong>`
    if (e.action == 'group') a = action = `<strong  class="group">${e.result}</strong>`
    if (e.action == 'message') a = message = `<p>${e.result}</p>`


    let text = `<div class="text"><p>${name}  ${e.text}  ${action}  ${haveNoti}</p><p>${e.time}</p>${message}</div>`
    let x = e.action == 'image' ? image = `<img src="${e.result}">` : image = ''
    let s = `<li read="${e.read}" action-type="${e.action}">${user}${text}${image}</li>`
    $('section > ul').append(s)
})
$(".notification").append(`<span>${cRead}</span>`)
const read_all = () => {
notification.forEach(e => {
    if (e.read) c = e.read = false
})
$(".notification > span").fadeOut(300, () => {
    this.remove()
})
$("strong.dot").fadeOut(300, () => {
    this.remove()
})
$('section > ul > li[read="true"]').attr('read', false)
}