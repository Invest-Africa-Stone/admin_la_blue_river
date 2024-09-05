import { Project } from "@utilities/types";
import { FC, useState } from "react";

interface Props {
    project: Project,
}

export const CardProject: FC<Props> = ({
    project
})=> {

    const [isEditing, setIsEditing] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleCard = () => {
        setIsModalOpen(!isModalOpen);
    };    

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        setConfirmDelete(true);
    };

    const confirmDeletion = () => {
        handleDeleteProject();
        setConfirmDelete(false);
        handleToggleCard();
    };

    const handleEditProject = () => {
        // Logique pour éditer le projet
    };

    const handleDeleteProject = () => {
        // Logique pour supprimer le projet
        console.log("Projet supprimé");
    };
    

    return (
        <>
            <div className="card bg-base-200 shadow-md p-4" onClick={handleToggleCard}>
                <img src={project.images?.[0].fileDir} alt={project.name} className="h-40 w-full object-cover mb-4" />
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600">Référence : {project.ref}</p>
            </div>

            {
                isModalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box relative max-w-4xl">
                            <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2" onClick={handleToggleCard}>
                            ✕
                            </button>
                            <div className="mb-4">
                            <div className="carousel w-full">
                                {project.images?.map((image, index) => (
                                <div key={index} className="carousel-item w-full">
                                    <img src={image.fileDir} alt={image.filename} className="w-full h-60 object-cover" />
                                </div>
                                ))}
                            </div>
                            </div>

                            {isEditing ? (
                            <form>
                                {/* Formulaire de modification */}
                                <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label">Nom du projet</label>
                                    <input
                                    type="text"
                                    name="name"
                                    defaultValue={project.name}
                                    className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">Référence</label>
                                    <input
                                    type="text"
                                    name="ref"
                                    defaultValue={project.ref}
                                    className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Ajouter d'autres champs ici */}
                                </div>
                                <div className="modal-action">
                                <button type="button" className="btn btn-success" onClick={() => setIsEditing(false)}>
                                    Sauvegarder
                                </button>
                                </div>
                            </form>
                            ) : (
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                <p className="mb-2">Référence : {project.ref}</p>
                                <p className="mb-2">Description : {project.description}</p>
                                <p className="mb-2">Adresse : {project.adress}, {project.city}, {project.country}</p>
                                <p className="mb-2">Valeur du stock : {project.stockValue} €</p>
                                <p className="mb-2">Rente : {project.rente} %</p>
                                <p className="mb-2">Prix d'achat : {project.purchasePrice} €</p>
                                {/* Ajouter d'autres informations ici */}

                                <div className="modal-action">
                                <button className="btn btn-primary" onClick={toggleEdit}>Éditer</button>
                                <button className="btn btn-error" onClick={handleDelete}>Supprimer</button>

                                {confirmDelete && (
                                    <div className="popover p-4 shadow-lg rounded-md bg-white absolute z-50 right-10">
                                    <p className="mb-2">Voulez-vous vraiment supprimer ce projet ?</p>
                                    <button className="btn btn-sm btn-error mr-2" onClick={confirmDeletion}>Oui</button>
                                    <button className="btn btn-sm" onClick={() => setConfirmDelete(false)}>Non</button>
                                    </div>
                                )}
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}