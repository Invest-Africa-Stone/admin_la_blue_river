import { useCallback, useMemo, useState } from "react"

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Dashboard', 'Mon compte'], []);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '1990-01-01',
        email: 'john.doe@example.com',
        phone: '+33 6 12 34 56 78',
        profilePicture: 'https://via.placeholder.com/150', // Image par défaut
    });

    // Fonction pour gérer les changements dans les champs texte
    const handleChange = useCallback((e: any) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
        [name]: value,
        }));
    }, []);

    // Fonction pour gérer l'upload de la photo de profil
    const handleProfilePictureChange = useCallback((e: any) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile((prevProfile: any) => ({
                ...prevProfile,
                profilePicture: reader.result, // Met à jour la photo avec le fichier sélectionné
            }));
        };
        reader.readAsDataURL(file); // Convertit l'image en base64 pour l'aperçu
        }
    }, []);

    // Fonction pour sauvegarder les modifications
    const handleSave = useCallback(() => {
        setIsEditing(false);
        // Logique supplémentaire pour sauvegarder les données (par ex: via API)
        console.log('Profile saved:', profile);
    }, [profile]);

    return {
        breadcrumbs,
        isEditing,
        profile,
        handleChange,
        handleProfilePictureChange,
        handleSave,
        setIsEditing,
    }
}
