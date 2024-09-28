import { useCallback, useEffect, useMemo, useState } from "react"
import { investors } from "./investorList_mocks";

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Investisseurs'], []);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCollaborators, setFilteredCollaborators] = useState([]);

    const [popoverVisible, setPopoverVisible] = useState(null); // Pour afficher/masquer les popovers

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredCollaborators.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCollaborators = filteredCollaborators.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = useCallback((pageNumber: number) => {
        setCurrentPage(pageNumber);
    }, []);
    
    // Fonction pour gérer l'affichage du popover
    const togglePopover = useCallback((id: any) => {
        setPopoverVisible(id === popoverVisible ? null : id);
    }, [popoverVisible]);

    // Fonction pour filtrer les collaborateurs en fonction du terme de recherche
    useEffect(() => {
        const filtered = investors.filter((collab: any) =>
            collab.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            collab.phone.includes(searchTerm)
        );
        setFilteredCollaborators(filtered as any);
    }, [searchTerm]);

    return {
        breadcrumbs,
        totalPages,
        currentCollaborators,
        searchTerm,
        popoverVisible,
        currentPage,
        setSearchTerm,
        handlePageChange,
        togglePopover,
    }
}
