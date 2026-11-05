const vehicles = [
["Automóvel","Audi","A3 / A4 / Q3","Alemanha","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","BYD","Dolphin / Dolphin Mini / Song Plus","China","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Chevrolet","Onix / Onix Plus / Tracker / Spin","Brasil / Global","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Fiat","Argo / Cronos / Mobi / Pulse / Fastback / Strada","Brasil / Itália","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Ford","Ka / EcoSport / Ranger / Territory","Global","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Honda","City / Civic / HR-V / ZR-V / CR-V","Japão","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Hyundai","HB20 / Creta / Tucson","Coreia do Sul","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Jeep","Renegade / Compass / Commander","EUA / Global","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Nissan","Kicks / Versa / Sentra / Frontier","Japão","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Renault","Kwid / Stepway / Duster / Kardian","França / Global","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Toyota","Corolla / Corolla Cross / Yaris / Hilux / SW4","Japão","Consultar ficha técnica oficial por ano e versão."],
["Automóvel","Volkswagen","Gol / Polo / Virtus / T-Cross / Nivus / Saveiro","Alemanha","Consultar ficha técnica oficial por ano e versão."],
["Motocicleta","BMW Motorrad","G 310 / F 850 / R 1250","Alemanha","Consultar ficha técnica oficial por ano e versão."],
["Motocicleta","Honda","CG 160 / Biz / Pop / XRE / CB 300","Japão","Consultar ficha técnica oficial por ano e versão."],
["Motocicleta","Yamaha","Factor / Fazer / Lander / Crosser / MT-03","Japão","Consultar ficha técnica oficial por ano e versão."],
["Motocicleta","Haojue","DK / Lindy / Master Ride","China","Consultar ficha técnica oficial por ano e versão."],
["Utilitário","Fiat","Fiorino / Toro","Brasil / Itália","Consultar ficha técnica oficial por ano e versão."],
["Utilitário","Toyota","Hilux / SW4","Japão","Consultar ficha técnica oficial por ano e versão."],
["Caminhão","Mercedes-Benz","Accelo / Atego / Actros","Alemanha","Consultar ficha técnica oficial por ano e versão."],
["Caminhão","Volvo","VM / FH / FM","Suécia","Consultar ficha técnica oficial por ano e versão."],
["Ônibus","Mercedes-Benz","OF / O 500","Alemanha","Consultar ficha técnica oficial por ano e versão."],
["Ônibus","Volkswagen Caminhões e Ônibus","12.180 / 17.230 / 18.280","Brasil","Consultar ficha técnica oficial por ano e versão."]
];
const $=s=>document.querySelector(s);
function render(){let q=$("#q").value.toLowerCase(), t=$("#tipo").value;let a=vehicles.filter(v=>(!t||v[0]===t)&&v.join(" ").toLowerCase().includes(q));$("#count").textContent=`${a.length} resultado(s) • catálogo demonstrativo, não exaustivo`;$("#results").innerHTML=a.map(v=>`<article class="card"><h2>${v[1]} — ${v[2]}</h2><span class="pill">${v[0]}</span><span class="pill">${v[3]}</span><p>${v[4]}</p><p class="muted">Ano/modelo e versão: confirmar na documentação do veículo e fonte oficial do fabricante.</p></article>`).join("")||'<div class="card">Nenhum resultado encontrado.</div>'}
$("#q").addEventListener("input",render);$("#tipo").addEventListener("change",render);render();
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");["catalogo","vin","check","fontes"].forEach(id=>$("#"+id).classList.toggle("hidden",id!==b.dataset.tab))});
const items=["Documento apresentado corresponde aos dados visíveis do veículo?","Marca, modelo, cor e categoria são coerentes com o documento?","Placa e elementos de identificação externos aparentam consistência?","Há divergências que precisam ser registradas e encaminhadas?","A consulta foi realizada em sistema oficial autorizado, quando cabível?","Foram preservados os dados pessoais e observadas as regras de acesso?"];
$("#checks").innerHTML=items.map((x,i)=>`<label style="display:block;padding:10px 0;border-bottom:1px solid #e4eaf0"><input type="checkbox" style="width:auto;margin-right:8px"> ${x}</label>`).join("");$("#reset").onclick=()=>document.querySelectorAll('#checks input').forEach(x=>x.checked=false);
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
