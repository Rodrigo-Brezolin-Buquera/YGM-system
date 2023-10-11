
export const goToLogin = (router) => {
    router.push("/");
};

export const goToUser = (router, id) => {
    router.push(`/user/${id}`);
};

export const goToAdmin = (router) => {
    router.push("/admin");
};
export const goToBusiness = (router) => {
    router.push("/admin/business");
};

export const goToCalendar = (router) => {
    router.push("/admin/calendar");
};

export const goToClass = (router, id) => {
    router.push(`/admin/class/${id}`);
};

export const goToContract = (router, id) => {
    router.push(`/admin/contract/${id}`);
};

export const goBack = (router) => {
    router.back();
};

