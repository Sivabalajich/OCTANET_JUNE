class Heatder extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=
        <style>
        body`{'}'}`
            background-color:rgba(255, 192, 203, 0.573);
            `{'}'}`
.navbar`{'}'}`
    width: 100%;
    height:20%;
    border: 1px;
    display:inline;
    `{'}'}`
.navbar .logo`{'}'}`
    width:50%;
    height:auto;
    `{'}'}`
.navbar ul`{'}'}`
    display:inline;
    display:flex;
    padding: 10px;
    `{'}'}`
.menu`{'}'}`
    display: flex;

    `{'}'}`


img`{'}'}`
    box-shadow: 20px 20px 20px black;

    `{'}'}`
img:hover`{'}'}`
    box-shadow: 20px 20px 20px pink;
    `{'}'}`
        </style>
        `{'}'}`
}
}
<div class="foot">
    <div class="box1">
        <h1>Details</h1>
        <ul>
            <li>Contact:-93xxxxxxxxx</li>
            <li>Narasaraopeta</li>
            <li>522601</li>
        </ul>
    </div>
    <hr></hr>
    <hr></hr>
        <div class="box2">
            <h3>www.sivay2050@gmail.com</h3>
            <a href="https://instagram.com/scorpio_modern?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D "><img src="instagram.jpg"></img></a>
            <a href="https://www.linkedin.com%2Fin%2Fsiva-balaji-ch-3b83a9250&e=AT38Wumw_lN7dWa4fiZlmOGYT_ccZ-v1hMAJhPT8ArvZXdhiQNpcSoCJOsQPGJuxdK51AdcalHWuy0k7mvPeMpjkNSvFhuNjk8ujC6Q"><img src="facebook.jpg"></img></a>
            <a href="https://www.facebook.com%2Fsiva.balaji.395669%3Fmibextid%3DZbWKwL&e=AT3BralYJITwZY8YnotnQz2NRfaZALeZCyfs8TaH-VZFtgHnC7KN-UjXh7xxZ8GmJqMwoR038WwngPh0pobQrVhJFA59bbP0yfA_kz8"><img src="linkedin.jpg"></img></a>

        </div><hr></hr>
        </div>
customElement.define('footer',Header);