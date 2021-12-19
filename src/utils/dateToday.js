const dateToday = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = today.toLocaleString('default', { month: 'long' })
    const yyyy = today.getFullYear();
    const nth = (dd) => {
        if (dd > 3 && dd < 21) return 'th';
        switch (dd % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
    const getToday = dd + nth() + " day of " + mm + " " + yyyy;
    return (
        getToday
    )
}

export default dateToday;