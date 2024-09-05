import { ProjectTypeEnum } from "@utilities/enums";
import { Project } from "@utilities/types";
import { useCallback, useMemo, useState } from "react"

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Projets'], []);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<Project>({
        projectType: ProjectTypeEnum.VEHICLE,
        ref: '',
        name: '',
        description: '',
        adress: '',
        city: '',
        country: '',
        images: [],
        amount: {
            acquisition: 0,
            fees: 0,
            reserve: 0,
            ourRemuneration: 0,
        },
        stockValue: 0,
        rente: 0,
        purchasePrice: 0,
        yearsOfOperations: 0,
        totalNumberOfStock: 0,
        numberOfStockRemaining: 0,
        minimumStockPurchase: 0,
    });

    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    // Ouvrir et fermer la modal
    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

    // Gestion des changements dans le formulaire
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    // Gestion de l'importation des images
    const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
        const newPreviews = Array.from(files).map((file) => URL.createObjectURL(file));
        setImagePreviews(newPreviews);

        const imagesData = Array.from(files).map((file, index) => ({
            order: index,
            filename: file.name,
            fileDir: URL.createObjectURL(file),
        }));
        setFormData((prev) => ({
            ...prev,
            images: imagesData,
        }));
        }
    }, []);

    // Fonction pour soumettre le formulaire
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        closeModal(); // Fermer la modal après soumission
    }, [closeModal, formData]);

    return {
        breadcrumbs,
        isModalOpen,
        formData,
        imagePreviews,
        openModal,
        closeModal,
        handleChange,
        handleImageChange,
        handleSubmit,
    }
}
