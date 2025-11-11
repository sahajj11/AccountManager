import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { PenLine, SquarePen, X } from "lucide-react";

const AccountDetailsForm = ({ initialData }) => {
    // Local state for form inputs 
    const [name, setName] = useState(initialData.name || '');
    const [email, setEmail] = useState(initialData.email || ''); 
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    // State to manage edit mode for fields 
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    
    // State for form status and feedback
    const [status, setStatus] = useState({ type: null, message: '' }); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { updateAccount } = useAuthContext();

    const toggleEditName = () => setIsEditingName(!isEditingName);
    const toggleEditEmail = () => setIsEditingEmail(!isEditingEmail);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: null, message: '' });
        setIsSubmitting(true);

        let updatedFields = {};
        let errors = [];

        //  Validate and track Name Change
        if (name.trim() === '') { errors.push('Name cannot be empty.'); }
        if (name !== initialData.name) { updatedFields.name = name; }
        
        //  Validate and track Email Change
        if (email !== initialData.email) {
            // Basic email format check
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errors.push('Please enter a valid email address.');
            } else {
                updatedFields.email = email;
            }
        }

        //  Validate Password Change
        if (newPassword || confirmPassword) {
            if (newPassword.length < 6) { errors.push('New password must be at least 6 characters.'); }
            if (newPassword !== confirmPassword) { errors.push('Passwords do not match.'); }
            if (!errors.length) { updatedFields.password = newPassword; }
        }

        // Handle validation errors
        if (errors.length > 0) {
            setStatus({ type: 'error', message: errors.join(' ') });
            setIsSubmitting(false);
            return;
        }

        // Check if any actual fields were changed
        if (Object.keys(updatedFields).length === 0) {
            setStatus({ type: 'error', message: 'No changes detected.' });
            setIsSubmitting(false);
            return;
        }

        
        const result = await updateAccount(updatedFields);

        if (result && typeof result !== 'string') {
            setStatus({ type: 'success', message: 'Account successfully updated!' });
            setIsEditingName(false);
            setIsEditingEmail(false);
            setNewPassword('');
            setConfirmPassword('');
        } else {
            setStatus({ type: 'error', message: result || 'Failed to update account. Please try again.' });
        }

        setIsSubmitting(false);
    };

    // Helper for status classes
    const getStatusClasses = () => {
        if (status.type === 'success') { return 'bg-green-100 text-green-700 border border-green-300'; }
        if (status.type === 'error') { return 'bg-red-100 text-red-700 border border-red-300'; }
        return 'hidden';
    };

    // Helper to get input classes based on edit mode
    const getInputClasses = (isEditing) => 
        `w-full p-3 text-gray-900 border rounded-lg shadow-sm focus:outline-none transition duration-150 ${
            isEditing
                ? 'bg-white border-indigo-500 focus:ring-2 focus:ring-indigo-500' 
                : 'bg-gray-50 border-gray-200 cursor-default text-gray-600'      
        }`;

    // Helper for the edit button icon
    const EditIcon = ({ isEditing, onClick }) => (
        <button
            type="button"
            onClick={onClick}
            className={`absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-sm font-medium ${
                isEditing ? 'text-red-500 hover:text-red-700' : 'text-gray-400 hover:text-indigo-600'
            } transition duration-150`}
            aria-label={isEditing ? "Disable editing" : "Enable editing"}
        >
             {isEditing ? <X className="w-5 h-5"/> : <SquarePen  className="w-5 h-5"/>} 
        </button>
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Status Message */}
            {status.message && (
                <div className={`p-3 rounded-lg text-sm text-center ${getStatusClasses()}`}>
                    {status.message}
                </div>
            )}

            {/* Email Field */}
            <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditingEmail}
                    className={getInputClasses(isEditingEmail)}
                    required
                />
                <EditIcon isEditing={isEditingEmail} onClick={toggleEditEmail} />
            </div>

            {/* Name Field */}
            <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditingName}
                    className={getInputClasses(isEditingName)}
                    required
                />
                <EditIcon isEditing={isEditingName} onClick={toggleEditName} />
            </div>

            <hr className="border-gray-200" />
            
            <h4 className="text-lg font-medium text-gray-900 pt-2">
                Change Password (Optional)
            </h4>

            {/* New Password Field */}
            <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                </label>
                <input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={getInputClasses(true)} 
                    placeholder="Leave blank to keep current password"
                />
            </div>

            {/* Confirm Password Field */}
            <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                </label>
                <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={getInputClasses(true)} // Always editable style
                />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-indigo-600 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving changes...' : 'Save Account Details'}
                </button>
            </div>
        </form>
    );
};

export default AccountDetailsForm;