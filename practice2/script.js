const manga=document.getElementById('block')
const block=[{
    imagediv:"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    title:"My Hero Academia",
    Author:"Kōhei Horikoshi",
    stdio:"	Bones",
    Status:"July 7, 2014  present",
    Links:"https://en.wikipedia.org/wiki/My_Hero_Academia",
    about:"He is scouted by the world's greatest hero, All Might, who bestows his Quirk to Midoriya after recognizing his potential, and helps to enroll him in a prestigious high school for superheroes in training."

},{
    imagediv:"",
    title:"",
    Author:"",
    stdio:"",
    Status:"",
    Links:"",
    about:""

}]
block.forEach(function(items)
{
    const main=document.createElement('div')
    const imagediv=document.createElement('img')
    const a=document.createElement('p')
    const Author=document.createElement('p')
    const status=document.createElement('p')
    const stdio=document.createElement('p')
    const Links=document.createElement('a')
    const about=document.createElement('p')
    imagediv.src=items.imagediv
    imagediv.setAttribute('alt', items.title)
     imagediv.height=200
     imagediv.width=300


    a.textContent=items.title
    Author.textContent=items.Author
    stdio.textContent=items.stdio
    status.textContent=items.Status
    Links.href=items.Links
    about.textContent=items.about
    main.append(imagediv,a,Author,stdio,status,Links,about)
    main.classList.add('items')
    manga.append(main)


 })