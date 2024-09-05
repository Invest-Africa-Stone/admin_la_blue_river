import { useCallback, useEffect, useMemo, useState } from "react"
import { collaborators } from "./collabsList_mocks";

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Collaborateurs'], []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCollaborator, setNewCollaborator] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: 'Collaborateur', // Valeur par défaut
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCollaborators, setFilteredCollaborators] = useState([]);

    const [popoverVisible, setPopoverVisible] = useState(null); // Pour afficher/masquer les popovers

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredCollaborators.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCollaborators = filteredCollaborators.slice(indexOfFirstItem, indexOfLastItem);

    // Fonction pour ouvrir la modal
    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    // Fonction pour fermer la modal
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setNewCollaborator({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: 'Collaborateur',
        });
    }, []);

    // Fonction pour gérer les changements dans le formulaire
    const handleChange = useCallback((e: any) => {
        const { name, value } = e.target;
        setNewCollaborator((prevState) => ({
            ...prevState,
        [name]: value,
        }));
    }, []);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        // Logique supplémentaire pour ajouter le collaborateur (par exemple, via une API)
        console.log('Collaborateur ajouté :', newCollaborator);
        closeModal();
    }, [closeModal, newCollaborator]);

    const handlePageChange = useCallback((pageNumber: number) => {
        setCurrentPage(pageNumber);
    }, []);
    
    // Fonction pour gérer l'affichage du popover
    const togglePopover = useCallback((id: any) => {
        setPopoverVisible(id === popoverVisible ? null : id);
    }, [popoverVisible]);

    // Fonction pour filtrer les collaborateurs en fonction du terme de recherche
    useEffect(() => {
        const filtered = collaborators.filter((collab: any) =>
            collab.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.phone.includes(searchTerm)
        );
        setFilteredCollaborators(filtered as any);
    }, [searchTerm]);

    return {
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
    }
}
