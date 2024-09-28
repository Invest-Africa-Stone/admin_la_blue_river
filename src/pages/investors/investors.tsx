import { FC, useCallback } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";

export const Investors:FC = ()=> {

    const { 
        breadcrumbs,
        totalPages,
        currentCollaborators,
        searchTerm,
        popoverVisible,
        currentPage,
        setSearchTerm,
        handlePageChange,
        togglePopover,
    } = useControllers();

    const renderInvestorsList = useCallback(()=> {
        return (
            <div className="container mx-auto p-4 bg-neutral rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-4">Liste des investisseurs</h2>

                {/* Champ de recherche */}
                <input
                    type="text"
                    placeholder="Rechercher un collaborateur"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full mb-4"
                />

                {/* Tableau des collaborateurs */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCollaborators.map((collab: any) => (
                                <tr key={collab.id}>
                                    <td>{collab.firstName} {collab.lastName}</td>
                                    <td>{collab.email}</td>
                                    <td>{collab.phone}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary" onClick={() => togglePopover(collab.id)}>
                                            Actions
                                        </button>
                                        {popoverVisible === collab.id && (
                                            <div className="popover absolute z-10 p-2 bg-white shadow-lg rounded-lg mt-2">
                                                <button className="btn btn-sm btn-info mb-2" onClick={() => console.log(`Modifier ${collab.id}`)}>
                                                    Modifier
                                                </button>
                                                <button className="btn btn-sm btn-error" onClick={() => console.log(`Supprimer ${collab.id}`)}>
                                                    Supprimer
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-4 gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`btn btn-circle ${currentPage === i + 1 ? 'btn-active' : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        )   
    }, [
        searchTerm, currentCollaborators, 
        totalPages, popoverVisible, 
        currentPage, togglePopover,
        handlePageChange, setSearchTerm,
    ]);

    return (
        <DashboardWrapper 
            currentPath={NavigationPathsEnum.INVESTORS}
            breadcrumbs={breadcrumbs}
        >
            <>
                {renderInvestorsList()}
            </>
        </DashboardWrapper>
    )
}