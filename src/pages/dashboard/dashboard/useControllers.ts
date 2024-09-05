import { useMemo } from "react"

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Dashboard'], []);

    // Données pour les graphiques
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
        {
            label: 'Revenus (en K€)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
        {
            label: 'Utilisateurs actifs',
            data: [30, 45, 60, 50, 70, 80],
            borderColor: 'rgba(54, 162, 235, 0.6)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
        ],
    };

    const pieData = {
        labels: ['Administrateurs', 'Collaborateurs', 'Sous-administrateurs', 'Propriétaires'],
        datasets: [
        {
            label: 'Collaborateurs',
            data: [10, 20, 15, 5],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        },
        ],
    };

    const radarData = {
        labels: ['Performance', 'Fiabilité', 'Disponibilité', 'Sécurité', 'Évolutivité'],
        datasets: [
        {
            label: 'Satisfaction client',
            data: [65, 59, 90, 81, 56],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
        },
        ],
    };

    // Chiffres importants
    const importantFigures = {
        totalRevenue: '35K€',
        activeUsers: '500',
        collaborators: '50',
        satisfactionScore: '85%',
    };

    return {
        breadcrumbs,
        barData,
        lineData,
        pieData,
        radarData,
        importantFigures,
    }
}
