import { FC, useCallback } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";

export const Collaborators:FC = ()=> {

    const { 
        breadcrumbs,
        isModalOpen,
        totalPages,
        currentCollaborators,
        newCollaborator,
        searchTerm,
        popoverVisible,
        currentPage,
        closeModal,
        setSearchTerm,
        openModal,
        handleChange,
        handleSubmit,
        handlePageChange,
        togglePopover,
    } = useControllers();

    const renderAddCollab = useCallback(()=> {
        return (
            <div className="flex-1 flex justify-end">
                {/* Bouton pour ouvrir la modal */}
                <button className="btn btn-primary" onClick={openModal}>
                    Ajouter un collaborateur
                </button>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box relative">
                            <h3 className="text-lg font-bold mb-4">Ajouter un collaborateur</h3>

                            <form onSubmit={handleSubmit}>
                                {/* Champ Nom */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Nom</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={newCollaborator.lastName}
                                        onChange={handleChange}
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Champ Prénom */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Prénom</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={newCollaborator.firstName}
                                        onChange={handleChange}
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Champ Email */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={newCollaborator.email}
                                        onChange={handleChange}
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Champ Téléphone */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Téléphone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={newCollaborator.phone}
                                        onChange={handleChange}
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Champ Sélection du rôle */}
                                <div className="mb-4">
                                    <label className="label">
                                        <span className="label-text">Rôle</span>
                                    </label>
                                    <select
                                        name="role"
                                        value={newCollaborator.role}
                                        onChange={handleChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="Propriétaire">Propriétaire</option>
                                        <option value="Administrateur">Administrateur</option>
                                        <option value="Sous-administrateur">Sous-administrateur</option>
                                        <option value="Collaborateur">Collaborateur</option>
                                    </select>
                                </div>

                                {/* Boutons Sauvegarder et Annuler */}
                                <div className="modal-action">
                                    <button type="submit" className="btn btn-success">
                                        Sauvegarder
                                    </button>
                                    <button type="button" className="btn btn-error" onClick={closeModal}>
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        )
    }, [
        isModalOpen, newCollaborator, 
        closeModal, handleChange, 
        handleSubmit, openModal,
    ]);

    const renderListCollab = useCallback(()=> {
        return (
            <div className="container mx-auto p-4 bg-neutral rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-4">Liste des collaborateurs</h2>

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
                                <th>Rôle</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCollaborators.map((collab: any) => (
                                <tr key={collab.id}>
                                    <td>{collab.firstName} {collab.lastName}</td>
                                    <td>{collab.email}</td>
                                    <td>{collab.phone}</td>
                                    <td><div className="badge badge-secondary">{collab.role}</div></td>
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
            currentPath={NavigationPathsEnum.COLLABS}
            breadcrumbs={breadcrumbs}
        >
            <>
                {renderAddCollab()}

                {renderListCollab()}
            </>
        </DashboardWrapper>
    )
}