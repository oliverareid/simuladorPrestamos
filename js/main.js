let boton = document.getElementById("btnCalcular");

let capital = Number(document.getElementById("capital").value);
let cuota = Number(document.getElementById("cuota").value);
let interes = Number(document.getElementById("interes").value);

(capital != " " && cuota != " " && interes != " ") ? boton.addEventListener("click", generarTabla) : alert("Ingrese todos los valores"); 

function generarTabla(){
    document.getElementById("tab").innerHTML="";
    if(capital>0){   
        for(i=1;i<=cuota;i++){
            let montoPorMes = capital/cuota;
            let montoPorMesStr = montoPorMes.toFixed(2);
            let interesesPorMes = ((capital*interes)/100)/cuota;
            let interesesPorMesStr = interesesPorMes.toFixed(2);
            let totalMes = montoPorMes + interesesPorMes;
            let totalMesStr = totalMes.toFixed(2);
            document.getElementById("tab").innerHTML = document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${montoPorMesStr}</td>
                        <td> ${interesesPorMesStr}</td>
                        <td> ${totalMesStr}</td>
                    </tr>`;
        }
        let capitalStr = capital.toFixed(2);
        let totalIntereses = interesesPorMes*cuota;
        let totalInteresesStr = totalIntereses.toFixed(2);
        let total = totalMes*cuota;
        let totalStr= total.toFixed(2);
        document.getElementById("t1").innerHTML = capitalStr;
        document.getElementById("t2").innerHTML = totalInteresesStr;
        document.getElementById("t3").innerHTML = totalStr;        
    }else{
        alert("Falta ingresar un Número");
    }
}