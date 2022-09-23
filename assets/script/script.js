let cRead = 0
notification.forEach(e => {
    let action = ""
    let message = ""
    let haveNoti = ""
    if (e.read) c = ++cRead
    if (e.read) c = haveNoti = '<strong class="dot">•</strong>'
    let user = `<img src="assets/images/avatar-${(e.user).replace(" ","-").toLowerCase()}.webp">`

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
    $(".notification > span").text(0)
    $("strong.dot").fadeOut(300)
    $('section > ul > li[read="true"]').attr('read', false)
}