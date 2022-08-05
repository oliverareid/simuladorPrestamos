let boton = document.getElementById("boton");

let capital = Number(document.getElementById("capital").value);
let cuota = Number(document.getElementById("cuota").value);
let interes = Number(document.getElementById("interes").value);

(capital != " " && cuota != " " && interes != " ") ? boton.addEventListener("click", generarTabla) : Swal.fire({title: "Falta ingresar un número", text: "Complete todos los campos para continuar", icon: "warning", confirmButtonText: "Aceptar",}); 

function generarTabla(){
    document.getElementById("tab").innerHTML="";
    if(capital > 0){   
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
        Swal.fire({
            title: "Ingrese un número válido",
            text: "El número ingresado debe ser mayor a 0",
            icon: "warning",
            confirmButtonText: "Aceptar",
        })
    }
}