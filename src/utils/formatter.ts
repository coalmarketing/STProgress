/* Method to format UI date - DD. MM. YYYY */
export const formatUIDate = (date: string ) => {
    if (!date) return "";

    const UIDate = new Date(date);
    return `${UIDate.getDate()}. ${UIDate.getMonth() + 1}. ${UIDate.getFullYear()}`;
}