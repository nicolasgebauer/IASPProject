import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    PointElement,
    LinearScale, 
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LineElement,
    PointElement,
    LineElement,
    LinearScale, 
    Title,
    Tooltip,
    Legend,
    Filler
);

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
var beneficios = [1,-2,13,34,-5,6,7,8,9,10,11,12]
var midata = {
    labels: meses,
    datasets: [
        {
            label: 'beneficios',
            data: beneficios,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255,99,132,0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255,99,132)',
            pointBackgroundColor: 'rgba(255,99,132)',
        },
    ],
};

var misoptions = {
    
};
export default function LinesChart(){
    return <Line data={midata} options={misoptions}/>
}