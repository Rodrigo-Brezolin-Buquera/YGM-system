export const goToLogin = (navigate) => {
    navigate("/");
};

export const goToUser = (navigate, id) => {
    navigate(`/user/${id}`);
};

export const goToAdmin = (navigate) => {
    navigate("/admin");
};

export const goToCalendar = (navigate) => {
    navigate("/admin/calendar");
};

export const goToViewClass = (navigate, id) => {
    navigate(`/admin/class/${id}`);
};

export const goToContract = (navigate, id) => {
    navigate(`/admin/contract/${id}`);
};



export const goBack = (navigate) => {
    navigate(-1);
};

