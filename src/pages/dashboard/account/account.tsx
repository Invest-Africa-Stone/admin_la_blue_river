import { FC, useCallback } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";

export const Account:FC = ()=> {

    const { 
        breadcrumbs,
        isEditing,
        profile,
        handleChange,
        handleProfilePictureChange,
        handleSave,
        setIsEditing,
    } = useControllers();

    const renderAvatar = useCallback(()=> {
        return (
            <>
                <div className="avatar flex justify-center mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profile.profilePicture} alt="Profile" />
                    </div>
                </div>

                <div className="flex flex-1 justify-center mt-5 mb-5">
                    <div className="badge badge-secondary badge-lg">Administrateur</div>
                </div>

                {isEditing && (
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">Change Profile Picture</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                )}
            </>
        )
    }, [handleProfilePictureChange, isEditing, profile]);

    const renderUserNames = useCallback(()=> {
        return (
            <div className="flex flex-1 gap-2">
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`input input-bordered w-full ${isEditing ? '' : 'bg-gray-100'}`}
                    />
                </div>
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`input input-bordered w-full ${isEditing ? '' : 'bg-gray-100'}`}
                    />
                </div>
            </div>
        )
    }, [handleChange, isEditing, profile]);

    const renderContacts = useCallback(()=> {
        return (
            <div className="flex flex-1 gap-2">
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`input input-bordered w-full ${isEditing ? '' : 'bg-gray-100'}`}
                    />
                </div>
                <div className="flex-1">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`input input-bordered w-full ${isEditing ? '' : 'bg-gray-100'}`}
                    />
                </div>
            </div>
        )
    }, [handleChange, isEditing, profile]);

    return (
        <DashboardWrapper 
            currentPath={NavigationPathsEnum.ACCOUNT}
            breadcrumbs={breadcrumbs}
        >
            <div className="container mx-auto p-4">
                <div className="bg-neutral p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Profile</h2>

                    {renderAvatar()}

                    <div className="space-y-4 flex-1">
                        {renderUserNames()}
                        
                        {renderContacts()}
                        
                        <div>
                            <label className="label">
                                <span className="label-text">Birth Date</span>
                            </label>
                            <input
                                type="date"
                                name="birthDate"
                                value={profile.birthDate}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className={`input input-bordered w-full ${isEditing ? '' : 'bg-gray-100'}`}
                            />
                        </div>
                        <div className="mt-6 flex justify-between">
                            {!isEditing ? (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Edit Profile
                                    </button>
                                ) : (
                                    <button className="btn btn-success" onClick={handleSave}>
                                        Save Changes
                                    </button>
                                )
                            }
                            {isEditing && (
                                <button
                                    className="btn btn-error"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    )
}