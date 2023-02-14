export const goToLogin = (navigate) => {
    navigate("/");
};

export const goToUser = (navigate, id) => {
    navigate(`/user/${id}`);
};

export const goToAdmin = (navigate) => {
    navigate("/admin");
};
export const goToBusiness = (navigate) => {
    navigate("/admin/business");
};

export const goToCalendar = (navigate) => {
    navigate("/admin/calendar");
};

export const goToClass = (navigate, id) => {
    navigate(`/admin/class/${id}`);
};

export const goToContract = (navigate, id) => {
    navigate(`/admin/contract/${id}`);
};

export const goBack = (navigate) => {
    navigate(-1);
};

