import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';

export const useGoBack = (fallbackUrl) => {
    const navigate = useNavigate();
    const location = useLocation();

    return useCallback(() => {
        if (location.state.canGoBack) {
            navigate(-1);
        } else {
            navigate(fallback, { replace: true });
        }
    }, [location, fallback]);

    // const navigate = useNavigate();
    // const location = useLocation();
    // const locKey = location.key;
    // const navigateBack = useCallback(() => {
    // if (locKey === 'default') {
    //     console.log('default');
    //     navigate(fallbackUrl, { replace: true });
    // } else {
    //     navigate(-1);
    //     console.log('default');
    // }
    // }, [navigate, location, locKey]);
    // return navigateBack;
};
