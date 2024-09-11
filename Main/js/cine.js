const getCine = async()=>{
    const id = new URLSearchParams(window.location.search).get('id')
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`);
    const data2 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`)
    const data3 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas`)

    if(data.status == 200){
        const cine = await data.json() 
        const tarifas = await data2.json()
        const horarios = await data3.json()
        tarifa = ''
        horario = ''


        tarifas.forEach((tarifas, index) => {
            const claseParImpar = index % 2 === 0 ? 'par' : 'impar'
        
            tarifa += `<div class="${claseParImpar}">
                        <div class="celda-titulo">${tarifas.DiasSemana}</div>
                        <div class="celda">${tarifas.Precio}</div>
                    </div>`;
        });

        horarios.forEach((horarios,index) =>{
            const claseParImpar = index % 2 === 0 ? 'par' : 'impar'
            
            horario += `<div class="${claseParImpar}">
                            <div class="celda-titulo">${horarios.Titulo}</div>
                            <div class="celda">${horarios.Horarios}</div>
                        </div>`
        })


        
        let html = `<h2>${cine.RazonSocial}</h2>
        <div class="cine-info">
					<div class="cine-info datos">
						<p>${cine.Direccion} - ${cine.Detalle}</p>
						<p>Teléfono: ${cine.Telefonos} anexo 865</p>
						<br/>
                        <div class="tabla">
                        ${tarifa}
                        </div>
						<div class="aviso">
							<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
						</div>
					</div>
					<img src="img/cine/${cine.id}.2.jpg"/>
					<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
					<div class="cine-info peliculas">
						<div class="tabla">
                        <div class="fila">
								<div class="celda-cabecera">Películas</div>
								<div class="celda-cabecera">Horarios</div>
							</div>
                        ${horario}
                    </div>
					</div>
				</div>
				<div>
					<img style="float:left;" src="img/cine/${id}.3.jpg" alt="Imagen del cine"/>
					<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
						Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
						<br/><br/>
						Visitános y diviértete con nosotros. 
						<br/><br/>
						<b>CINESTAR</b>, siempre pensando en tí. 
					</span>		
				</div>
                        
        `
        

    document.getElementById('contenido-interno').innerHTML= html
    
    }
    
}
getCine()


