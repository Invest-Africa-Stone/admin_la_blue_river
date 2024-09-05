import { FC } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement
);

export const Dashboard:FC = ()=> {

    const { 
        breadcrumbs,
        barData,
        lineData,
        pieData,
        radarData,
        importantFigures,
    } = useControllers();

    return (
        <DashboardWrapper 
            currentPath={NavigationPathsEnum.DASHBOARD}
            breadcrumbs={breadcrumbs}
        >
            <div className="container p-4 h-[80vh] overflow-y-auto bg-neutral rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Dashboard</h2>

                {/* Section des chiffres importants */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-primary text-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Revenus totaux</h3>
                        <p className="text-3xl font-bold">{importantFigures.totalRevenue}</p>
                    </div>

                    <div className="bg-success text-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Utilisateurs actifs</h3>
                        <p className="text-3xl font-bold">{importantFigures.activeUsers}</p>
                    </div>

                    <div className="bg-info text-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Collaborateurs</h3>
                        <p className="text-3xl font-bold">{importantFigures.collaborators}</p>
                    </div>

                    <div className="bg-warning text-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Satisfaction</h3>
                        <p className="text-3xl font-bold">{importantFigures.satisfactionScore}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Graphique en barres */}
                    <div className="card bg-base-200 shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-4">Revenus mensuels</h3>
                        <Bar data={barData} />
                    </div>

                    {/* Graphique en ligne */}
                    <div className="card bg-base-200 shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-4">Utilisateurs actifs</h3>
                        <Line data={lineData} />
                    </div>

                    {/* Graphique en secteurs */}
                    <div className="card bg-base-200 shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-4">Répartition des collaborateurs</h3>
                        <Pie data={pieData} />
                    </div>

                    {/* Graphique radar */}
                    <div className="card bg-base-200 shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-4">Satisfaction client</h3>
                        <Radar data={radarData} />
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    )
}