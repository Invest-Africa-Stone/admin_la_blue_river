import { FC, useCallback, useState } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper } from "@components";
import { NavigationPathsEnum, ProjectStateEnum, ProjectTypeEnum } from "@utilities/enums";
import { CardProject } from "./components";
import { Project } from "@utilities/types";

const projectsData: Project[] = [
    {
        _id: '1',
        projectType: ProjectTypeEnum.VEHICLE,
        ref: 'PRJ001',
        name: 'Projet 1',
        description: 'Description du projet 1',
        adress: '123 Rue A',
        city: 'Ville A',
        country: 'Pays A',
        images: [
            { order: 0, filename: 'image1.jpg', fileDir: 'https://osabus.fr/wp-content/uploads/2022/09/49-MAN-1024x768.jpeg' },
            { order: 1, filename: 'image1.jpg', fileDir: 'https://www.ugap.fr/images/media-wp/page_presentation/4480267_transport_personnes_autocars_bus/4480267_prestation_transfere.jpg' },
            { order: 2, filename: 'image1.jpg', fileDir: 'https://locationbus.be/wp-content/uploads/2022/01/location-autocar-bruxelles.jpg' },
            { order: 3, filename: 'image1.jpg', fileDir: 'https://www.echoidf.fr/wp-content/uploads/2021/09/busautonome-grouperatp-hamdichref-17.jpg' },
            { order: 4, filename: 'image2.jpg', fileDir: 'https://static8.depositphotos.com/1003854/1025/i/450/depositphotos_10259407-stock-photo-inside-of-new-bus.jpg' },
        ],
        amount: {
            acquisition: 10000,
            fees: 500,
            reserve: 1000,
            ourRemuneration: 500,
        },
        stockValue: 100000,
        rente: 5,
        purchasePrice: 50000,
        yearsOfOperations: 5,
        totalNumberOfStock: 100,
        numberOfStockRemaining: 50,
        minimumStockPurchase: 10,
        state: ProjectStateEnum.NEW
    },
];

export const Projets:FC = ()=> {

    const { 
        breadcrumbs,
        isModalOpen,
        formData,
        imagePreviews,
        openModal,
        closeModal,
        handleChange,
        handleImageChange,
        handleSubmit,
    } = useControllers();

    const [selectedState, setSelectedState] = useState<ProjectStateEnum | 'ALL'>('ALL');

    const renderAddNewProjectForm = useCallback(()=> {
        return (
            <>
                <div className="flex-1 flex justify-end">
                    <button className="btn btn-primary" onClick={openModal}>
                        Créer un projet
                    </button>
                </div>

                {isModalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box relative max-w-5xl">
                            <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2" onClick={closeModal}>
                                ✕
                            </button>
                            <h3 className="text-2xl font-bold mb-4">Créer un projet</h3>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Champs Input - 2 par ligne */}
                                    <div>
                                        <label className="label">Référence</label>
                                        <input
                                            type="text"
                                            name="ref"
                                            value={formData.ref}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Nom du projet</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Type de projet</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            //@ts-ignore
                                            onChange={handleChange}
                                            className="select select-bordered w-full"
                                        >
                                            <option value="">Sélectionner le type</option>
                                            <option value={ProjectTypeEnum.VEHICLE}>{ProjectTypeEnum.VEHICLE}</option>
                                            <option value={ProjectTypeEnum.PROPERTY}>{ProjectTypeEnum.PROPERTY}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="label">Adresse</label>
                                        <input
                                            type="text"
                                            name="adress"
                                            value={formData.adress}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Ville</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Pays</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <label className="label">Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="textarea textarea-bordered w-full"
                                        />
                                    </div>

                                    {/* Champ pour les montants */}
                                    <div>
                                        <label className="label">Montant acquisition</label>
                                        <input
                                            type="number"
                                            name="amount.acquisition"
                                            value={formData.amount.acquisition}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Frais</label>
                                        <input
                                            type="number"
                                            name="amount.fees"
                                            value={formData.amount.fees}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Réserve</label>
                                        <input
                                            type="number"
                                            name="amount.reserve"
                                            value={formData.amount.reserve}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Notre rémunération</label>
                                        <input
                                            type="number"
                                            name="amount.ourRemuneration"
                                            value={formData.amount.ourRemuneration}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    {/* Autres champs */}
                                    <div>
                                        <label className="label">Valeur du stock</label>
                                        <input
                                            type="number"
                                            name="stockValue"
                                            value={formData.stockValue}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Rente</label>
                                        <input
                                            type="number"
                                            name="rente"
                                            value={formData.rente}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Prix d'achat</label>
                                        <input
                                            type="number"
                                            name="purchasePrice"
                                            value={formData.purchasePrice}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Années d'opération</label>
                                        <input
                                            type="number"
                                            name="yearsOfOperations"
                                            value={formData.yearsOfOperations}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Total des actions</label>
                                        <input
                                            type="number"
                                            name="totalNumberOfStock"
                                            value={formData.totalNumberOfStock}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Actions restantes</label>
                                        <input
                                            type="number"
                                            name="numberOfStockRemaining"
                                            value={formData.numberOfStockRemaining}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="label">Achat minimal d'actions</label>
                                        <input
                                            type="number"
                                            name="minimumStockPurchase"
                                            value={formData.minimumStockPurchase}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                </div>

                                {/* Gestion des images */}
                                <div className="my-4">
                                    <label className="label">Importer des images (5 max)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                        className="input input-bordered w-full"
                                    />

                                    <div className="grid grid-cols-5 gap-2 mt-2">
                                        {imagePreviews.map((src, index) => (
                                            <img key={index} src={src} alt={`Prévisualisation ${index}`} className="h-24 w-24 object-cover" />
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-action">
                                    <button type="submit" className="btn btn-success">
                                        Soumettre
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </>
        )
    }, [
        imagePreviews, isModalOpen, formData, 
        closeModal, handleChange, 
        handleImageChange, handleSubmit, openModal,
    ]);

    return (
        <DashboardWrapper 
            currentPath={NavigationPathsEnum.PROJECTS}
            breadcrumbs={breadcrumbs}
        >
            <div className="container p-4 h-[80vh] overflow-y-auto bg-neutral rounded-lg">
                {renderAddNewProjectForm()}

                <div className="mb-4">
                    <label className="label">Filtrer par état de projet :</label>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value as ProjectStateEnum | 'ALL')}
                        className="select select-bordered w-full"
                    >
                        <option value="ALL">Tous les projets</option>
                        <option value={ProjectStateEnum.NEW}>{ProjectStateEnum.NEW}</option>
                        <option value={ProjectStateEnum.FINANCING_IN_PROGRESS}>{ProjectStateEnum.FINANCING_IN_PROGRESS}</option>
                        <option value={ProjectStateEnum.FUNDED}>{ProjectStateEnum.FUNDED}</option>
                    </select>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-10">
                    <CardProject project={projectsData[0]} />
                    <CardProject project={projectsData[0]} />
                    <CardProject project={projectsData[0]} />
                    <CardProject project={projectsData[0]} />
                    <CardProject project={projectsData[0]} />
                    <CardProject project={projectsData[0]} />
                </div>
            </div>
        </DashboardWrapper>
    )
}