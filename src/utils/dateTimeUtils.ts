export const getCurrentDate = () => {
    const todaysDate = new Date();

    return todaysDate.toLocaleDateString(); 
};