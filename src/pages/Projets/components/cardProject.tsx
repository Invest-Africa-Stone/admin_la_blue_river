import { Carousel } from "@components";
import { ProjectStateEnum } from "@utilities/enums";
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
            <div
                className="card bg-base-200 shadow-md p-4 cursor-pointer"
                onClick={handleToggleCard}
            >
                <img
                    src={project.images?.[0]?.fileDir || "/placeholder.jpg"}
                    alt={project.name}
                    className="h-40 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600">Référence : {project.ref}</p>
            </div>

            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box relative max-w-4xl">
                        <button
                            className="btn btn-sm btn-circle btn-error absolute right-2 top-2 z-10"
                            onClick={isEditing ? toggleEdit : handleToggleCard}
                        >
                            ✕
                        </button>

                        {
                            project.images && (
                                <div className="mb-4 relative">
                                    <Carousel 
                                        images={project.images}
                                    />
                                </div>
                            )
                        }

                        {isEditing ? (
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Nom du projet */}
                                    <div>
                                    <label className="label">Nom du projet</label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={project.name}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Référence */}
                                    <div>
                                    <label className="label">Référence</label>
                                    <input
                                        type="text"
                                        name="ref"
                                        defaultValue={project.ref}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Description */}
                                    <div className="col-span-2">
                                    <label className="label">Description</label>
                                    <textarea
                                        name="description"
                                        defaultValue={project.description}
                                        className="textarea textarea-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Adresse */}
                                    <div>
                                    <label className="label">Adresse</label>
                                    <input
                                        type="text"
                                        name="adress"
                                        defaultValue={project.adress}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Ville */}
                                    <div>
                                    <label className="label">Ville</label>
                                    <input
                                        type="text"
                                        name="city"
                                        defaultValue={project.city}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Pays */}
                                    <div>
                                    <label className="label">Pays</label>
                                    <input
                                        type="text"
                                        name="country"
                                        defaultValue={project.country}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Valeur du stock */}
                                    <div>
                                    <label className="label">Valeur du stock</label>
                                    <input
                                        type="number"
                                        name="stockValue"
                                        defaultValue={project.stockValue}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Rente */}
                                    <div>
                                    <label className="label">Rente (%)</label>
                                    <input
                                        type="number"
                                        name="rente"
                                        defaultValue={project.rente}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Prix d'achat */}
                                    <div>
                                    <label className="label">Prix d'achat (€)</label>
                                    <input
                                        type="number"
                                        name="purchasePrice"
                                        defaultValue={project.purchasePrice}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Durée d'exploitation */}
                                    <div>
                                    <label className="label">Durée d'exploitation (années)</label>
                                    <input
                                        type="number"
                                        name="yearsOfOperations"
                                        defaultValue={project.yearsOfOperations}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Nombre total d'actions */}
                                    <div>
                                    <label className="label">Nombre total d'actions</label>
                                    <input
                                        type="number"
                                        name="totalNumberOfStock"
                                        defaultValue={project.totalNumberOfStock}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Nombre d'actions restantes */}
                                    <div>
                                    <label className="label">Nombre d'actions restantes</label>
                                    <input
                                        type="number"
                                        name="numberOfStockRemaining"
                                        defaultValue={project.numberOfStockRemaining}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Nombre minimum d'actions à acheter */}
                                    <div>
                                    <label className="label">Nombre minimum d'actions à acheter</label>
                                    <input
                                        type="number"
                                        name="minimumStockPurchase"
                                        defaultValue={project.minimumStockPurchase}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* État du projet */}
                                    <div>
                                    <label className="label">État du projet</label>
                                    <select
                                        name="state"
                                        defaultValue={project.state}
                                        className="select select-bordered w-full"
                                    >
                                        <option value={ProjectStateEnum.NEW}>{ProjectStateEnum.NEW}</option>
                                        <option value={ProjectStateEnum.FINANCING_IN_PROGRESS}>{ProjectStateEnum.FINANCING_IN_PROGRESS}</option>
                                        <option value={ProjectStateEnum.FUNDED}>{ProjectStateEnum.FUNDED}</option>
                                    </select>
                                    </div>
                            
                                    {/* Date de début de campagne */}
                                    <div>
                                    <label className="label">Date de début de campagne</label>
                                    <input
                                        type="date"
                                        name="startCampaignAt"
                                        defaultValue={project.startCampaignAt?.toISOString().split('T')[0]}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Date de fin de campagne */}
                                    <div>
                                    <label className="label">Date de fin de campagne</label>
                                    <input
                                        type="date"
                                        name="endingCampaignAt"
                                        defaultValue={project.endingCampaignAt?.toISOString().split('T')[0]}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Champs pour Amount */}
                                    <div className="col-span-2 mt-4">
                                    <h4 className="text-xl font-semibold">Détails financiers</h4>
                                    </div>
                            
                                    {/* Montant d'acquisition */}
                                    <div>
                                    <label className="label">Montant d'acquisition (€)</label>
                                    <input
                                        type="number"
                                        name="acquisition"
                                        defaultValue={project.amount.acquisition}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Frais */}
                                    <div>
                                    <label className="label">Frais (€)</label>
                                    <input
                                        type="number"
                                        name="fees"
                                        defaultValue={project.amount.fees}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Réserve */}
                                    <div>
                                    <label className="label">Réserve (€)</label>
                                    <input
                                        type="number"
                                        name="reserve"
                                        defaultValue={project.amount.reserve}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                    {/* Notre rémunération */}
                                    <div>
                                    <label className="label">Notre rémunération (€)</label>
                                    <input
                                        type="number"
                                        name="ourRemuneration"
                                        defaultValue={project.amount.ourRemuneration}
                                        className="input input-bordered w-full"
                                    />
                                    </div>
                            
                                </div>
                            
                                <div className="modal-action">
                                    <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleEditProject}
                                    >
                                    Sauvegarder
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div>
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="mb-2">Référence : {project.ref}</p>
                            <p className="mb-2">Description : {project.description}</p>
                            <p className="mb-2">
                                Adresse : {project.adress}, {project.city}, {project.country}
                            </p>
                            <p className="mb-2">Valeur du stock : {project.stockValue} €</p>
                            <p className="mb-2">Rente : {project.rente} %</p>
                            <p className="mb-2">Prix d'achat : {project.purchasePrice} €</p>
                            <p className="mb-2">Durée d'exploitation : {project.yearsOfOperations} années</p>
                            <p className="mb-2">Nombre total d'actions : {project.totalNumberOfStock}</p>
                            <p className="mb-2">Nombre d'actions restantes : {project.numberOfStockRemaining}</p>
                            <p className="mb-2">Nombre minimum d'actions à acheter : {project.minimumStockPurchase}</p>
                            <p className="mb-2">État du projet : {project.state}</p>

                            {project.startCampaignAt && (
                                <p className="mb-2">Début de campagne : {new Date(project.startCampaignAt).toLocaleDateString()}</p>
                            )}
                            {project.endingCampaignAt && (
                                <p className="mb-2">Fin de campagne : {new Date(project.endingCampaignAt).toLocaleDateString()}</p>
                            )}

                            {/* Affichage des détails financiers */}
                            <h4 className="text-xl font-semibold mt-4">Détails financiers :</h4>
                            <p className="mb-2">Montant d'acquisition : {project.amount.acquisition} €</p>
                            <p className="mb-2">Frais : {project.amount.fees} €</p>
                            <p className="mb-2">Réserve : {project.amount.reserve} €</p>
                            <p className="mb-2">Notre rémunération : {project.amount.ourRemuneration} €</p>

                            <div className="modal-action">
                                <button className="btn btn-primary" onClick={toggleEdit}>
                                Éditer
                                </button>
                                <button className="btn btn-error" onClick={handleDelete}>
                                Supprimer
                                </button>

                                {confirmDelete && (
                                <div className="popover p-4 shadow-lg rounded-md bg-white absolute z-50 right-10">
                                    <p className="mb-2">Voulez-vous vraiment supprimer ce projet ?</p>
                                    <button className="btn btn-sm btn-error mr-2" onClick={confirmDeletion}>
                                    Oui
                                    </button>
                                    <button className="btn btn-sm" onClick={() => setConfirmDelete(false)}>
                                    Non
                                    </button>
                                </div>
                                )}
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}