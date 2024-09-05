import { pathsEnum } from "@utilities/enums";
import { fetchRequest } from "@utilities/requests";
import { FetchRequestType, FetchResponseType } from "@utilities/types";

export const fetchGetDataRequest = async(
    payload: string
):Promise<FetchResponseType>=> {

    const requestConfig: FetchRequestType = {
        route: `${pathsEnum.GET_DATA}?token=${payload}`,
        method: 'GET',
    };

    try {
        const response:FetchResponseType = await fetchRequest(requestConfig);
        return response;
    } catch (error) {
        console.error('Error in fetchSigninRequest:', error);
        throw error;
    }
};
